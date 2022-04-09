const Faculty = require('../models/facultyModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllFaculty = catchAsync(async (req, res) => {
    const faculty = await Faculty.find(req.query).select('-__v');

    res.status(200).json({
        status: 'success',
        result: faculty.length,
        requestAt: req.requestTime,
        data: {
            faculty,
        },
    });
});

exports.updateFaculty = catchAsync(async (req, res) => {
    const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        status: 'success',
        data: {
            faculty,
        },
    });
});

exports.deleteFaculty = catchAsync(async (req, res) => {
    await Faculty.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});

exports.getFaculty = catchAsync(async (req, res) => {
    const faculty = await Faculty.findById(req.params.id);
    //Faculty.findOne({_id: req.parmas.id})

    res.status(200).json({
        status: 'success',
        data: {
            faculty,
        },
    });
});

exports.createFaculty = catchAsync(async (req, res, next) => {
    const faculty = await Faculty.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            faculty,
        },
    });
});
