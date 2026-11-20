const mongoose = require('mongoose');

const teletubbySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    color: {
        type: String,
        required: true,
        enum: ['Purple', 'Green', 'Yellow', 'Red', 'Blue', 'Pink']
    },

    antenna: {
        type: String,
        required: true,
        enum: ['Triangle', 'Straight', 'Curly', 'Circular', 'Star']
    },

    personality: {
        type: String,
        required: true,
        enum: ['Cheerful', 'Shy', 'Energetic', 'Calm', 'Playful', 'Grumpy']
    },

    size: {
        type: String,
        required: true,
        enum: ['Small', 'Medium', 'Large']
    }

}, { timestamps: true });


const Teletubby = mongoose.model(
    'Teletubby',
    teletubbySchema
);

module.exports = Teletubby;