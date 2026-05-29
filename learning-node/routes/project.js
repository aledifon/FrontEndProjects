// Import Express (HTTP)
const express = require("express");
const router = express.Router();

// Load the project controller
const ProjectController = require("../controllers/project");

// Define the routes
router.post("/save", ProjectController.save);

// Export the routes
module.exports = router;