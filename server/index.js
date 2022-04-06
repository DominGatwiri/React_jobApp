const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
//import routes
const postItemsRoute = require('./routes/postItems.js');
const getItemsRoute = require('./routes/getItems');
const getSpecificItem = require('./routes/getSpecificItem');
const recruiterSignUp = require('./routes/recruiterSignUp');
const recruiterSignIn = require('./routes/recruiterSignIn');
const applicantSignUp = require('./routes/applicantSignUp');
const applicantSignIn = require('./routes/applicantSignIn');
const FilesUpload = require('./routes/FilesUpload');

const { verify } = require("jsonwebtoken");

//set apis
app.use("/api/postitems", postItemsRoute);
app.use("/api/getitems", getItemsRoute);
app.use("/api/getspecific", getSpecificItem);
app.use("/api/recruitersignup", recruiterSignUp);
app.use("/api/recruitersignin", recruiterSignIn);
app.use("/api/applicantsignup", applicantSignUp);
app.use("/api/applicantsignin", applicantSignIn);
app.use("/api/uploadfile", FilesUpload);


//connect to the database
mongoose.connect(
  "mongodb://localhost/Goods",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Successfuly connected to mongoDB");
  }
);

//listen to port
app.listen(5000, () => {
  console.log("Server running on port 5000");
});