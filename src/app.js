const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const signupRoutes = require("./routes/signupRoutes");


dotenv.config();

const app = express();
const port = 3000;


//Middleware
app.use(express.json());
app.use(logger);


//Routes
app.use("/signup", signupRoutes);


// Start the server 
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})
