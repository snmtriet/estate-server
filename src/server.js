const mongoose = require('mongoose');
const app = require('./app');
const db = require('./config/db');

db.connect();

const port = 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
