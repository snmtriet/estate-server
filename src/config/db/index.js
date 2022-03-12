const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/estate_inventory_dev',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('Connect successfuly');
    } catch (error) {
        console.log('connect failure');
    }
}

module.exports = { connect };
