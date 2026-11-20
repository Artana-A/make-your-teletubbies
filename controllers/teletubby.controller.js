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

module.exports = {
    createTeletubby
};
