// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/userController');
const upload = require('../middleware/multer');

// Route to handle user submission with image upload
router.post('/', upload.array('images', 5), createUser);

// Route to get all users
router.get('/', getUsers);

module.exports = router;
