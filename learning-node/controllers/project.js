// Import the project model
const Project = require("../models/project");

// Save (Create) method
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

// List (Read) method
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

const item =

// Export the different controllers
module.exports = {
    save,
    list
};