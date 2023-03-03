// Application setup
const express = require('express');
const app = express();
const port = 8080;

// Prerequisites
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware - allows you to parse the application/json and application/x-www-form-encoded request bodies.
// CORS is a package to allow Cross-Origin Resource Sharing.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Tells the Express Application to serve files relative to the dist folder.
app.use(express.static("dist"));

app.get('', (req, res) => {
    res.sendFile("index.html")
})

// Starts the application on the specified port.
app.listen(port, () => {
    console.log(`Express Web Application is now live and listening on port ${port}.`);
})