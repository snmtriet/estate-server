const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A category must have name'],
        trim: true,
    },
    describe: String,
    totalEstate: Number,
    statistics: {
        dsd: Number, // đang sử dụng
        hhcsc: Number, // hư hỏng chờ sửa chữa
        hhxtl: Number, // hư hỏng xin thanh lý
        kncsd: Number, // không có nhu cầu sử dụng
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
