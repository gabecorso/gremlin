import mongoose, { Schema } from 'mongoose';
var bcrypt = require('bcryptjs');
// import Profile from './profile';

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: { type: String, unique: true, lowercase: true, index: true },
    email: { type: String, unique: true, lowercase: true, index: true },
    password: { type: String },
    forcePasswordChange: { type: Boolean, default: false },
},
    { timestamps: true },
    {
        toJSON: {
            virtuals: true,
        },
    });

// Virtuals go here ~ UserSchema.virtual()...

// Custom instance methods

/**
 * Validates a password.
 * @memberof User
 * @param {string} password - User password.
 * @return {boolean} Whether the password matches the encrypted form.
 */
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

/**
 * Sets password.
 * @memberof User
 * @param {string} password - New password
 */
UserSchema.methods.setPassword = function (password) {
    const salt = bcrypt.genSaltSync();
    this.password = bcrypt.hashSync(password, salt);
};


// create model class
const UserModel = mongoose.model('User', UserSchema);

export default UserModel;