// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Flow = require('./models/flow');

// Local variables will come in handy
let u, f;
