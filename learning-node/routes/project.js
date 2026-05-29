// Import Express (HTTP)
const express = require("express");
const router = express.Router();

// Load the project controller
const ProjectController = require("../controllers/project");

// Define the routes
router.post("/save", ProjectController.save);
router.get("/list", ProjectController.list);

// Export the routes
module.exports = router;