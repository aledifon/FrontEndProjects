// Import backend dependencies
const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");

// DB connection
connection();

// Create the Express application/server
const app = express();

// Define the port where the backend will listen
const port = 3977;

// Enable CORS to allow requests from other origins, such as Angular or Postman
app.use(cors());

// Allow Express to read JSON data sent in the request body
app.use(express.json());

// Allow Express to read form data sent in the request body
app.use(express.urlencoded({extended: true}));

// Load application routes here
// Create test endpoints here

app.get("/", (req, res) => {
    console.log("The root route has been called!");

    return res.status(200).json([
        {
            course: "Master on advanced CSS",
            url: "https://aledifon.com",
            author: "Alejandro Diaz"
        },
        {
            course: "Master on extreme CSS",
            url: "https://aledifon.com",
            author: "Alejandro Diazzzzz"
        }
    ]);
});

app.get("/tests", (req, res) => {

    console.log("My test endpoint has been executed!");

    return res.status(200).send(`
        <section>
            <h1>I am learning Node</h1>
            <h2>With my teacher pepillo</h2>
            <p>This is a route</p>
        </section>        
    `);
});

// Start the backend server and keep it listening for incoming HTTP requests
app.listen(port, () => {
    console.log("Server is running correctly, on the port " + port);
});