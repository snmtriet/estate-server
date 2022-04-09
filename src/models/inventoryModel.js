const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true,
        },
        checkList: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'Category',
                required: true,
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

inventorySchema.pre(/^find/, function (next) {
    this.populate({
        path: 'user',
        select: 'fullname',
    }).populate({
        path: 'checkList',
        select: '-__v',
    });

    next();
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
