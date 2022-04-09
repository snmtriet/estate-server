const mongoose = require('mongoose');
const slugify = require('slugify');

const EstateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A estate must have name'],
        trim: true,
    },
    slug: String,
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true,
    },
    status: {
        type: String,
        enum: {
            values: [
                'Hư hỏng chờ sửa chữa',
                'Hư hỏng xin thanh lý',
                'Đang sử dụng',
                'Không nhu cầu sử dụng',
            ],
            message:
                'Status phải là Hư hỏng chờ sửa chữa, Hư hỏng xin thanh lý, Không nhu cầu sử dụng hoặc Đang sử dụng',
        },
        default: 'Đang sử dụng',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
});

EstateSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'category',
        select: 'name describe',
    });

    next();
});

EstateSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

const Estate = mongoose.model('Estate', EstateSchema);

module.exports = Estate;
