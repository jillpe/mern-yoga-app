const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flowSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            enum: ['Vinyasa', 'Hatha', 'Yin', 'Power']
        },
        poses: String,
        difficulty: {
            type: Number,
            min: 1,
            max: 5
        },
    }
)