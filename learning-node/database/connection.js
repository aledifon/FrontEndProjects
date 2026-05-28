const mongoose = require("mongoose");

const connection = async() => {
    try{

        await mongoose.connect("mongodb://127.0.0.1:27017/bd-portfolio");

        console.log("Connected to the DB: bd-portfolio");
    } 
    catch(error){
        console.log(error);

        throw new Error("Connection with DB could not be established!");
    }
};

module.exports = connection;
