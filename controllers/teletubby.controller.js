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

// Get Teletubby by ID
const getTeletubbyById = async (req, res) => {
    try {
        const teletubby = await Teletubby.findById(req.params.id);

        if (!teletubby) {
            return res.status(404).json({
                message: 'Teletubby not found'
            });
        }

        res.status(200).json({
            message: 'Teletubby retrieved successfully',
            data: teletubby
        });

    } catch (error) {

        if (error.name === 'CastError') {
            return res.status(400).json({
                message: 'Invalid Teletubby ID'
            });
        }

        res.status(500).json({
            message: error.message
        });
    }
};

// Update Teletubby by ID
const updateTeletubbyById = async (req, res) => {
    try {
        const teletubby = await Teletubby.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!teletubby) {
            return res.status(404).json({
                message: 'Teletubby not found'
            });
        }

        res.status(200).json({
            message: 'Teletubby updated successfully',
            data: teletubby
        });

    } catch (error) {
        
        if (error.name === 'CastError') {
            return res.status(400).json({
                message: 'Invalid Teletubby ID'
            });
        }

        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: error.message
            });
        }

        res.status(500).json({
            message: error.message
        });
    }
};

// Delete Teletubby by ID
const deleteTeletubbyById = async (req, res) => {
    try {
        const teletubby = await Teletubby.findByIdAndDelete(req.params.id);

        if (!teletubby) {
            return res.status(404).json({
                message: 'Teletubby not found'
            });
        }

        res.status(200).json({
            message: 'Teletubby deleted successfully',
            data: teletubby
        });

    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({
                message: 'Invalid Teletubby ID'
            });
        }

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createTeletubby,
    getAllTeletubbies,
    getTeletubbyById,
    updateTeletubbyById,
    deleteTeletubbyById
};
