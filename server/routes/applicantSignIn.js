const express = require("express");
const router = express.Router();

//import the models
const Applicant = require("../models/Applicant");
const UserSession = require("../models/UserSession");
/*
Sign In 
*/

router.post("/", (req, res) => {
  const { body } = req;
  const { userName, password } = body;

  //make sure they are not blank
  if (!userName) {
    return res.send({
      success: false,
      message: "applicantName field should not be empty",
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: "password field should not be empty",
    });
  } //field are not empty

  //make sure that the admin exists
 Applicant.find({ applicantName: userName }, (err,applicant) => {
    if (err) {
      return res.send({
        success: false,
        message: "Server Error",
      });
    }
    if (applicant == 0) {
      return res.send({
        success: false,
        message: "The user name does not exist",
      });
    }

    //user does exist
    //check if password is correct for that particular admin
    const currentApplicant = applicant[0];
    if (currentApplicant.password != password ) {
      return res.send({
        success: false,
        message: "The password is incorrect",
      });
    }

    //Everything is OK
    //create an Admin session

    const newUserSession = new UserSession({
      userId: currentApplicant.id,
    });

    //save the new user session

    newUserSession.save((err, session) => {
      if (err) {
        return res.send({
          success: false,
          message: " User Session Server Error",
        });
      }

      res.send({
        success: true,
        message: "Applicant Successfully Signed In",
        token: session.id,
      });
    });
  });
});

module.exports = router;