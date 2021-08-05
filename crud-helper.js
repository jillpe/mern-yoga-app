require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Flow = require('./models/flow');

let u, f;
