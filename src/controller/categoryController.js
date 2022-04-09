const Category = require('../models/categoryModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllCategory = catchAsync(async (req, res) => {
    const category = await Category.find(req.query).select('-__v');

    res.status(200).json({
        status: 'success',
        result: category.length,
        requestAt: req.requestTime,
        data: {
            category,
        },
    });
});

exports.updateCategory = catchAsync(async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        status: 'success',
        data: {
            category,
        },
    });
});

exports.deleteCategory = catchAsync(async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});

exports.getCategory = catchAsync(async (req, res) => {
    const category = await Category.findById(req.params.id);
    //Estate.findOne({_id: req.parmas.id})

    res.status(200).json({
        status: 'success',
        data: {
            category,
        },
    });
});

exports.createCategory = catchAsync(async (req, res, next) => {
    const newCategory = await Category.create(req.body);
    console.log(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            estate: newCategory,
        },
    });
});
