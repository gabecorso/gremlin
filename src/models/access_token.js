import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
var moment = require('moment');

// Defines a new Access Token, expire defaulted to 1 hour in the future
// expires - Expiry Date
// token - Access Token
// ip - IP Address

const AccessTokenSchema = new Schema({
   expires: { 
        type: Date, 
        default: moment(moment()).add(1, 'hours').toISOString(),
    },
    token: {
        type: String,
        default: uuidv4(),
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    ip: String,
},
    { timestamps: true }
    );


// create model class for Access Token
const AccessTokenModel = mongoose.model('AccessToken', AccessTokenSchema);

export default AccessTokenModel;