const express = require('express');
const userController = require('./../controller/userController');
const authController = require('./../controller/authController');
const { route } = require('express/lib/application');

const router = express.Router();

router.post('/signin', authController.signin);
router.post('/signup', authController.signup);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.patch(
    '/updateMyPassword',
    authController.protect,
    authController.updatePassword
);

router.patch('/updateMe', authController.protect, userController.updateMe);
router.delete('/deleteMe', authController.protect, userController.deleteMe);

router.route('/').get(userController.getAllUser);
router.route('/:id').get(userController.getUser);

module.exports = router;
