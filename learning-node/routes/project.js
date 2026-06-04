// Import Express (HTTP)
const express = require("express");
const router = express.Router();

// Load the project controller
const ProjectController = require("../controllers/project");

// Configure multer
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/images");
    },
    filename: (req, file, cb) => {
        cb(null, "project-" + Date.now() + "-" + file.originalname);
    }
});

const upload = multer({storage});

// Define the routes
router.post("/save", ProjectController.save);
router.get("/list", ProjectController.list);
router.get("/item/:id", ProjectController.item);
router.delete("/delete/:id", ProjectController.deleteProject);
router.put("/update", ProjectController.update);
router.put("/upload/:id", upload.single("file0"), ProjectController.upload);
router.get("/image/:file", ProjectController.getImage);

// Export the routes
module.exports = router;