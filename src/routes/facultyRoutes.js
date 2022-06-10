const express = require('express');
const facultyController = require('./../controller/facultyController');
const authController = require('./../controller/authController');

const router = express.Router();

router
    .route('/')
    .get(authController.protect, facultyController.getAllFaculty)
    .post(facultyController.createFaculty);

router
    .route('/:id')
    .get(facultyController.getFaculty)
    .patch(
        authController.protect,
        authController.restrictTo('user'),
        facultyController.updateFaculty
    )
    .delete(
        authController.protect,
        authController.restrictTo('user'),
        facultyController.deleteFaculty
    );

module.exports = router;
