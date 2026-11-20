const Teletubby = require('../models/teletubby.model');

// Add new Teletubby
const createTeletubby = async (req, res) => {
    try {
        const teletubby = await Teletubby.create(req.body);

        res.status(201).json({
            message: 'Teletubby created successfully, say hello to ' + teletubby.name + '!',
            data: teletubby
        });

    } catch (error) {
        
        // Validation error
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: error.message
            });
        }
        
        res.status(500).json({ // Server error
            message: error.message
        });
    }
};


// Get all Teletubbies
const getAllTeletubbies = async (req, res) => {
    try {
        const teletubbies = await Teletubby.find();

        res.status(200).json({
            message: 'Teletubbies retrieved successfully',
            data: teletubbies
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createTeletubby,
    getAllTeletubbies
};
