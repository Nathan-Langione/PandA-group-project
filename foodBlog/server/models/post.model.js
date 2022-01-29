const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A title is required"],
        minLength: [3, "The title must be 3 characters or more!"]
    },
    description: {
        type: String,
        required: [true, "A description is required"],
    },
    category: {
        type: String,
        enum: ['breakfast', 'lunch', 'dinner', 'appetizers', 'soup', 'salad', 'pasta', 'sides', 'dessert'],
    },
    cuisine: {
        type: String,
        enum: ['american', 'french', 'italian', 'mexian', 'japanse', 'chinese', 'indian'],
    },
    season: {
        type: String,
        enum: ['fall', 'winter', 'spring', 'summer'],
    },


}, { timestamps: true });
module.exports = mongoose.model('Post', PostSchema);
