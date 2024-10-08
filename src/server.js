const express = require("express");
// This imports the express library 
const app = express();
// This renames express to be called as app
app.use(express.json());
// This line tells express that we will send data to and from via json rather than xlm

require("dotenv").config();
// This line imports and runs dotenv in one line
require("./db/connection");

const Book = require("./db/models/bookmodel")

app.use("/health", (req,res) => {res.send("API is healthy")});
// health route to verify server

app.listen(5001 , () => {console.log("server is listening on port 5001")});
// This is the listener which is the heart of the server