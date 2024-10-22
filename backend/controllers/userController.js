// backend/controllers/userController.js
const User = require('../models/userModel');

// Create a new user submission
exports.createUser = async (req, res) => {
    try {
        const { name, socialMediaHandle } = req.body;
        const images = req.files.map(file => file.path); // Get paths of uploaded images

        const newUser = new User({ name, socialMediaHandle, images });
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Fetch all user submissions
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
