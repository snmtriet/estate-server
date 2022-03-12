const Inventory = require('../models/inventoryModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllInventory = catchAsync(async (req, res) => {
    const inventory = await Inventory.find(req.query).select('-__v');

    res.status(200).json({
        status: 'success',
        result: inventory.length,
        requestAt: req.requestTime,
        data: {
            inventory,
        },
    });
});

exports.createInventory = catchAsync(async (req, res, next) => {
    const inventory = await Inventory.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            inventory,
        },
    });
});

// exports.updateFaculty = catchAsync(async (req, res) => {
//     const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true,
//     });

//     res.status(200).json({
//         status: 'success',
//         data: {
//             faculty,
//         },
//     });
// });

// exports.deleteFaculty = catchAsync(async (req, res) => {
//     await Faculty.findByIdAndDelete(req.params.id);
//     res.status(204).json({
//         status: 'success',
//         data: null,
//     });
// });

exports.getInventory = catchAsync(async (req, res) => {
    const inventory = await Inventory.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: {
            inventory,
        },
    });
});
