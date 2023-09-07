const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please provide price'],
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ['apple', 'samsung', 'dell', 'mi'],
            message: '{VALUE} is not supported'
        }
    }
});

module.exports = mongoose.model("Product", ProductSchema);