
// Import file system & path modules
const fs = require("fs");
const path = require ("path");

// Import the project model
const Project = require("../models/project");

// Save method
const save = (req, res) => {

    // Receive the data
    let body = req.body;

    // Data validation
    if(!body.name || !body.description || !body.state){
        return res.status(400).send({
            status: "error",
            message: "There are some missing data"
        });
    }

    // Create a new Project instance according to the Project model
    let projectToSave = new Project(body);

    // Save the Project object on the DB
    projectToSave.save().
        then(project => {

            if(!project){
                return res.status(404).send({
                    status: "error",
                    message: "The project has not been properly saved"
                });
            }
            
            // Return a response
            return res.status(200).send({
                status: "success",
                project
            });
            
        })
        .catch(error => {

            return res.status(500).send({
                status: "error",
                message: "Error at saving project data",
                error
            });
        });
};

// List method
const list = (req, res) => {
    Project.find()
        .then(projects => {

            if(!projects){
                return res.status(404).send({
                    status: "error",
                    message: "There are no projects to show"
                });
            }

            // Return a response
            return res.status(200).send({
                status: "success",
                projects
            });

        })
        .catch(error => {

            return res.status(500).send({
                status: "error",
                message: "Error at listing the projects",
                error
            });
        });
};

// Get project method
const item = (req, res) => {

    let id = req.params.id;

    // console.log(id);

    Project.findById(id)
        .then(project => {

            if(!project)
                return res.status(404).send({
                    status: "error",
                    message: "Project with id = " + id + " not found"
                });

            return res.status(200).send({
               status: "success",
               project
            });
        })
        .catch(error => {

            return res.status(500).send({
                status: "error",
                message: "Error at getting the project with id = " + id ,
                error
            });
        });
}

// Delete project method
const deleteProject = (req, res) => {

    let id = req.params.id;

    // console.log(id);
    
    Project.findByIdAndDelete(id)
        // .deleteOne()
        .then(project => {

            if(!project)
                return res.status(404).send({
                    status: "error",
                    message: "Project with id = " + id + " was not deleted!"
                });

            return res.status(200).send({
               status: "success",
               project
            });
        })
        .catch(error => {

            return res.status(500).send({
                status: "error",
                message: "Error at deleting the project with id = " + id ,
                error
            });
        });
}

// Udpate project method
const update = (req, res) => {

    let body = req.body;

    if(!body || !body.id){
        return res.status(404).send({
            status: "error",
            message: "You sent nothing"
        });
    }

    Project.findByIdAndUpdate(body.id, body, {new: true})        
        .then(projectUpdate => {

            if(!projectUpdate)
                return res.status(404).send({
                    status: "error",
                    message: "Project with id = " + body.id + " was not found!"
                });

            return res.status(200).send({
               status: "success",
               projectUpdate
            });
        })
        .catch(error => {

            return res.status(500).send({
                status: "error",
                message: "Error at updating the project with id = " + body.id ,
                error
            });
        });
}

// Upload files method
const upload = (req, res) => {
    
    let id = req.params.id;

    if(!req.file){
        return res.status(404).json({
            status: "error",
            message: "Nothing was uploaded"
        });
    }

    const filePath = req.file.path;
    const extension = path.extname(req.file.originalname).toLocaleLowerCase().replace(".","");

    const validExtensions = ["png", "jpg", "jpeg", "gif"];

    if(!validExtensions.includes(extension)){

        fs.unlinkSync(filePath);

        return res.status(400).json({
            status: "error",
            message: "Invalid file extension"
        })
    }

    Project.findByIdAndUpdate({_id: id}, {image: req.file.filename}, {new: false})        
        .then(projectUpdate => {

            if(!projectUpdate){

                fs.unlinkSync(filePath);

                return res.status(404).send({
                    status: "error",
                    message: "Project with id = " + body.id + " was not found!"
                });
            }

            if(projectUpdate.image && projectUpdate.image != "default.png"){
                const oldImagePath = "./uploads/images/" + projectUpdate.image;

                if(fs.existsSync(oldImagePath)){
                    fs.unlinkSync(oldImagePath);
                }
            }

            return res.status(200).send({
               status: "success",
               project: projectUpdate,
               newFile: req.file.filename
            });

        })
        .catch(error => {

            fs.unlinkSync(filePath);

            return res.status(500).send({
                status: "error",
                message: "Error at updating the project with id = " + body.id ,
                error
            });
        });
}

const getImage = (req, res) => {
    // Get the file name
    let file = req.params.file;

    // Build the file route
    let filePath = "./uploads/images/" + file;

    // Check if the file exists
    fs.stat(filePath, (error, exist) => {

        if(!error && exist){

            // Return a response
            return res.sendFile(path.resolve(filePath));

        }
        else{

            // Return a response
            return res.status(404).json({        
                status: "error",            
                message: "The image does not exists"
            });
        }
    });

}

// Export the different controllers
module.exports = {
    save,
    list,
    item,
    deleteProject,
    update,
    upload,
    getImage
};