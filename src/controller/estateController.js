const Estate = require('./../models/estateModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllEstate = catchAsync(async (req, res) => {
    const estates = await Estate.find(req.query).select('-__v');

    res.status(200).json({
        status: 'success',
        result: estates.length,
        requestAt: req.requestTime,
        data: {
            estates,
        },
    });
});

exports.updateEstate = catchAsync(async (req, res) => {
    const estate = await Estate.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        status: 'success',
        data: {
            estate,
        },
    });
});

exports.deleteEstate = catchAsync(async (req, res) => {
    await Estate.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});

exports.getEstate = catchAsync(async (req, res) => {
    const estate = await Estate.findById(req.params.id);
    //Estate.findOne({_id: req.parmas.id})

    res.status(200).json({
        status: 'success',
        data: {
            estate,
        },
    });
});

exports.createEstate = catchAsync(async (req, res, next) => {
    const newEstate = await Estate.create(req.body);
    console.log(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            estate: newEstate,
        },
    });
});
