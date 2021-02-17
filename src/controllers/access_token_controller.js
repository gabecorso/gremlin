import AccessTokenModel from '../models/access_token';
import { v4 as uuidv4 } from 'uuid';
var moment = require('moment');

export const createAccessToken = (req, res, user) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // Attach the user and the IP to the access_token model
  let access_token = new AccessTokenModel();
  access_token.ip = ip;
  access_token.userId = user.id;

  // Temp fix create uuid here and save to ensure uniqueness, also set the expires here
  let expires = moment(moment()).add(1, 'hours').toISOString();
  access_token.expires = expires;
  let token = uuidv4();
  access_token.token = token;
  
  return access_token.save();
};

export const verifyAccessToken = (req, res, user) => {
  var token = req.params.token || req.body.token || req.query.token;
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  if (!token) {
    res.json({ success: true, message: 'Access token missing from request.', data: false });
    return;
  }

  const conditions = {
    ip: ip,
    token: token,
    expires: {
      $gt: new Date().toISOString()
    }
  };

  AccessTokenModel.find({conditions}).then(function(token) {

    if (!token)
      res.json({ success: true, message: 'No valid access token found.', data: false});
    else
      res.json({ success: true, message: 'Logged in.', data: true });

  }).catch(function(err) {
    res.json({ success: false, message: 'Error verifying access token: ' + err });
  });
};
