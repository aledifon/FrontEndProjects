// Import Schema and model utilities from Mongoose
const { Schema, model } = require("mongoose");

// Define the structure and validation rules for Project documents
const ProjectSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    image:{
        type: String,
        default: "default.png"
    },
    created_at:{
        type: Date,
        default: Date.now
    }
});

// Create and export the Project model based on ProjectSchema.
// This model provides access to documents stored in the "projects" collection.
module.exports = model("Project", ProjectSchema, "projects");
