// Import the Mongoose ODM library
const mongoose = require("mongoose");

// Connect to MongoDB
const connection = async() => {
    try{

        // Connect to the local MongoDB database
        await mongoose.connect("mongodb://127.0.0.1:27017/bd-portfolio");

        console.log("Connected to the DB: bd-portfolio");
    } 
    catch(error){

        // Log and rethrow connection errors
        console.log(error);

        throw new Error("Connection with DB could not be established!");
    }
};

// Export the connection function
module.exports = connection;
