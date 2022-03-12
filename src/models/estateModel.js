const mongoose = require('mongoose');
const slugify = require('slugify');

const EstateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A estate must have name'],
        trim: true,
    },
    slug: String,
    status: {
        type: String,
        enum: {
            values: ['Hư hỏng', 'Đang sử dụng', 'Đã mất'],
            message: 'Status phải là Hư hỏng, Đang sử dụng hoặc Đã mất',
        },
        default: 'Đang sử dụng',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

EstateSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

const Estate = mongoose.model('Estate', EstateSchema);

module.exports = Estate;
