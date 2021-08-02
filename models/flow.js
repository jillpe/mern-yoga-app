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
        },
        poses: String,
        difficulty: {
            type: Number,
            min: 1,
            max: 5
        },
    }
)

module.exports = mongoose.model('Flow', flowSchema);