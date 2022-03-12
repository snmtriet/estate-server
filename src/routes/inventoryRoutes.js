const express = require('express');
const inventoryController = require('../controller/inventoryController');
const authController = require('../controller/authController');

const router = express.Router();

router
    .route('/')
    .get(inventoryController.getAllInventory)
    .post(authController.protect, inventoryController.createInventory);

router.route('/:id').get(inventoryController.getInventory);
module.exports = router;
