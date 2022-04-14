const mongoose = require('mongoose');
const app = require('./app');
const db = require('./config/db');

db.connect();
app.listen(process.env.PORT || 4000);
