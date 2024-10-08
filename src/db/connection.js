const mongoose = require("mongoose");
// Imports the mongoose library

//require("dotenv").config(); this line is temporary test

async function connection() {
try {
    await mongoose.connect(process.env.MONGO_URI)
    // mongoose connect is effectively logging into our database using the password stored in the .env file
    console.log("connected to database");
    
} catch (error) {
    console.log(error);
}   
}

connection();