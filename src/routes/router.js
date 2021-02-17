import { Router } from 'express';
import * as Users from './controllers/user_controller';
import * as AccessTokens from './controllers/access_token_controller';
import signS3 from './services/s3';

const loggedinMw = require('./middleware/web/loggedin');
const loggedoutMw = require('./middleware/web/loggedout');

const router = Router();

router.get('/', (req, res) => {
  const { user, isLoggedIn, token } = req;
  res.json({ success: true, data: { user, isLoggedIn, token }, message: 'welcome to the gremlin api!' });
});


// Photo Routes from Amazon S3
router.get('/sign-s3', signS3);

// Access Token Routes
router.post('/access-token', AccessTokens.createAccessToken);

// User Routes
router.post('/checkUserName', Users.checkUsername);
router.post('/checkEmail', Users.checkEmail);
router.post('/signup', Users.createUser);
router.post('/signin', Users.signIn);
router.route('/users')
  .get(Users.getUsers);

router.route('/users/:id')
  .get(Users.getUser)
  .put(Users.updateUser) // not for profile updating, only for updating user model fields
  .delete(Users.deleteUser);

router.route('/users/un/:userName')
  .get(Users.getUserByUserName);

/**
* Forgot password
*
* @name users/forgot
* @route {POST} /users/forgot
* @bodyparam {string} email Email address
*/
router.post('/users/forgot', loggedoutMw, Users.forgotPassword);

/**
 * Force password change flag on the user model
 *
 * @name users/force-password-change
 * @route {POST} /users/force-password-change
 * @bodyparam {string} email Email address
 */
router.post('/users/force-password-change', loggedinMw, Users.forcePasswordChange);

/**
 * Reset password
 *
 * @name users/reset/
 * @route {POST} /users/reset/
 * @bodyparam {string} password New password
 */
router.post('/users/reset', loggedinMw, Users.resetPassword);

/**
 * Check a users authentication
 *
 * @name users/auth/check
 * @route {POST} /users/auth/check
 * @bodyparam {string} token
 */
router.post('/users/auth/check', AccessTokens.verifyAccessToken);

/**
 * Logout user
 *
 * @name users/logout
 * @route {POST} /logout/
 */
router.post('/users/logout', loggedinMw, function (req, res) {

  // Expire the access token
  req.token.expires = new Date().toISOString();

  // Save the access token record
  req.token.save().then(() => {
    res.json({ success: true, message: 'Logged out!' });
  }).catch((err) => {
    res.json({ success: false, message: 'Error deleting access token: ' + err });
  });

});

export default router;