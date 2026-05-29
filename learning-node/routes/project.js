// Import Express (HTTP)
const express = require("express");
const router = express.Router();

// Load the project controller
const ProjectController = require("../controllers/project");

// Define the routes
router.post("/save", ProjectController.save);
router.get("/list", ProjectController.list);
router.get("/item/:id", ProjectController.item);
router.delete("/delete/:id", ProjectController.deleteProject);

// Export the routes
module.exports = router;