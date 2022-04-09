const express = require('express');
const categoryController = require('./../controller/categoryController');
const authController = require('./../controller/authController');

const router = express.Router();

router
    .route('/')
    .get(
        authController.protect,
        authController.restrictTo('admin', 'user'),
        categoryController.getAllCategory
    )
    .post(categoryController.createCategory);

router
    .route('/:id')
    .get(categoryController.getCategory)
    .patch(
        authController.protect,
        authController.restrictTo('admin', 'user'),
        categoryController.updateCategory
    )
    .delete(
        authController.protect,
        authController.restrictTo('admin'),
        categoryController.deleteCategory
    );

module.exports = router;
