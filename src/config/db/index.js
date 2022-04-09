const mongoose = require('mongoose');
require('dotenv').config();

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_COMPASS_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfuly');
    } catch (error) {
        console.log('connect failure');
    }
}

module.exports = { connect };
