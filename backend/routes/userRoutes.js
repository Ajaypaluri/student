const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST request to create a new user
router.post('/create', userController.createUser);

// GET request to fetch all users
router.get('/', userController.getAllUsers);

module.exports = router;
