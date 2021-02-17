import UserModel from '../models/user';
import * as AccessTokenController from '../controllers/access_token_controller';
var generator = require('generate-password');
var _uuid = require('uuid');
const Mail = require('../mailers/mail.js')


export const checkUsername = async (req, res) => {
    let existingUName = await UserModel.findOne({ userName: req.body.userName });
    if (existingUName) {
        res.status(500).send("username already exists");
    } else {
        res.status(200).send();
    }
}
export const checkEmail = async (req, res) => {
    let existingEmail = await UserModel.findOne({ email: req.body.email });
    if (existingEmail) {
        res.status(500).send("email already exists");
    } else {
        res.status(200).send();
    }
}


/*
* the createUser() is activated to create an account
* it takes name, email, password, phone, and location
* it activates createProfile() which then passes up an empty profile
* which is then stored in the new User object before saving
*/
//PROBLEM WITH THIS METHOD: doesn't have total atomicity! profile could be created but user not saved
export const createUser = async (req, res) => {

    const userName = req.body.userName || '';
    const email = req.body.email || '';

    //check to make sure there is not a username in the db already that is a match to this directly
    let existingUName = await UserModel.findOne({ userName });
    let uNameExists = false;
    // artist as a root URL is used so don't allow it
    if (existingUName || userName == 'artist') {
        uNameExists = true;
    }
    if (uNameExists) {
        return res.status(501).send({ message: `username exists` });
    }

    //check to make sure there is not a username in the db already that is a match to this directly
    let existingEmail = await UserModel.findOne({ email });
    if (existingEmail) {
        return res.status(502).send({ message: `an account with that email already exists` });
    }

    const user = new UserModel();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.userName = req.body.userName;
    user.email = req.body.email;

    // hash and salt passwords
    if (req.body.password) {
        user.setPassword(req.body.password);
    }

    req.body.userID = user.id;


    return user.save()
        .then((success) => {
            res.json({ success: true, data: success });
        })
        .catch((fail) => {
            //could not save new user object
            res.status(500).send(fail);
        });

};

/* Retrieve all Users */
export const getUsers = (req, res) => {
    return UserModel.find({})
        .then((users) => {
            res.send(users);
        })
        .catch((error) => {
            res.status(500).send(`error: ${error}`);
        });
};

/* Retrieve specific User object by User ID */
export const getUser = (req, res) => {
    // Source: https://mongoosejs.com/docs/populate.html
    return UserModel.findById(req.params.id)
        .then((user) => {
            res.send(user);
        })
        .catch((error) => {
            res.status(500).send({ message: `error: ${error}` });
        });
};

export const getUserByUserName = (req, res) => {
    // Source: https://mongoosejs.com/docs/populate.html
    return UserModel.find({ 'userName': req.params.userName })
        .then((user) => {
            if (user.length > 0)
                res.send(user[0]);
            else
                res.status(501).send({ message: `User with username: ${req.params.userName} not found.` })
        })
        .catch((error) => {
            res.status(500).send({ message: `error: ${error}` });
        });
};

/* Delete User object by User ID */
export const deleteUser = (req, res) => {
    return UserModel.findByIdAndRemove(req.params.id)
        .then((success) => {
            res.send(success);
        })
        .catch((fail) => {
            res.status(500).send(`error: ${fail}`);
        });
};

/* Update User object by User ID */
export const updateUser = async (req, res) => {

    const userName = req.body.userName || '';
    const userId = req.params.id || '';

    //check to make sure there is not a username in the db already that is a match to this directly
    let existingUName = await UserModel.findOne({ userName });
    let uNameExists = false;
    if (existingUName) {
        if (existingUName._id != userId) {
            uNameExists = true;
        }
    }

    if (uNameExists) {
        return res.status(501).send({ message: `username exists` });
    }

    const updatedUserInfo = {};
    updatedUserInfo.firstName = req.body.firstName;
    updatedUserInfo.userName = req.body.userName;
    updatedUserInfo.lastName = req.body.lastName;
    updatedUserInfo.email = req.body.email;

    return UserModel.findByIdAndUpdate(req.params.id, updatedUserInfo, { new: true })
        .then((success) => {
            res.send(success);
        })
        .catch((fail) => {
            res.status(500).send(`error: ${fail}`);
        });
};

export const signIn = (req, res) => {

    // Sign In a User and Create a new Access Token
    const password = req.body.password;

    let search = {
        userName: req.body.emailOrUsername,
    }
    if (req.body.emailOrUsername && req.body.emailOrUsername.includes("@")) {
        search = {
            email: req.body.emailOrUsername,
        }
    }

    return UserModel.findOne(search)
        .then((result) => {
            if (result != null) {
                if (result.validPassword(password)) {
                    // Create and attach the acecss token to the response
                    AccessTokenController.createAccessToken(req, res, result).then((access_token) => {
                        res.send({ user: result, access_token: access_token && access_token.token });
                    });

                } else {
                    // wrong password
                    res.status(500).send(`error: username or password is incorrect`);
                }
            } else {
                // wrong email
                res.status(500).send(`error: username or password is incorrect`);
            }
        })
        .catch((error) => {
            res.status(500).send(`error: ${error}`);
        });

}

export const forgotPassword = (req, res) => {
    var email = req.body.email;
    var ip = req.ip;

    UserModel.findOne({ email }).then(async function (user) {

        if (!user) {
            res.json({ success: true, message: '' }); // Fail out with success: true since we don't want malicious users using forgot pw to find accounts
            return;
        }
        // Generate temporary password
        var temp_password = generator.generate({
            length: 10,
            numbers: true,
            uppercase: true,
            lowercase: true
        });

        // Set the account to force a password change
        user.forcePasswordChange = true;
        user.setPassword(temp_password);
        await user.save();

        // Send an email to the user
        const email = new Mail('reset-password2', user.email, {
            name: user.firstName,
            temp_password: temp_password,
            email: user.email
        });
        email.send();
        res.json({ success: true, message: '' });
    }).catch(function (err) {
        res.json({ success: false, message: 'Error validating email address: ' + err });
    });
};

export const forcePasswordChange = (req, res) => {
    var email = req.body.email;
    UserModel.findOne({ email }).then(async function (user) {
        if (!user) {
            res.json({ success: true, message: '' }); // Fail out with success: true since we don't want malicious users using forgot pw to find accounts
            return;
        }
        user.forcePasswordChange = true;
        await user.save();
        res.json({ success: true, message: '' });
    }).catch(function (err) {
        res.json({ success: false, message: 'Error validating email address: ' + err });
    });
};

export const resetPassword = (req, res) => {
    var password = req.body.password;
    var user = req.user;

    // Make sure we've forced the user to update their password
    if (!user.forcePasswordChange)
        return res.json({ success: false, message: 'Cannot update password as a reset is not required' });

    // Update user password
    user.setPassword(password);
    user.forcePasswordChange = false;
    // Save value
    user.save().then(() => {
        res.json({ success: true, message: 'Password reset!' });
    }).catch((err) => {
        res.json({ success: false, message: 'Unable to update password: ' + err });
    });

};