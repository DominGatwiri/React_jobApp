const express = require('express');
const router = express.Router();
const Applicant = require("../models/Applicant");


//=================================
//             Applicant
//=================================

router.post("/",(req,res) => {
const {body} = req;
const {applicantName,password,email,mobile} = body;

if(!applicantName){
    return( res.send({
        success: false,
        message:"name required"
    }))
}
if(!password){
    return( res.send({
        success: false,
        message:"password required"
    }))
}
if(!mobile){
    return( res.send({
        success: false,
        message:"Mobile number required"
    }))
}
if(!email){
    return( res.send({
        success: false,
        message:"Email required"
    }))
}
//save 
const newApplicant = new Applicant({
    applicantName,
    password,
    mobile,
    email
})

newApplicant.save((error, applicant) => {
    if(error){
        return res.send({
            success: false,
            message: "Failed. Server Error"
        })
    }


    res.send({
        success: true,
        message:"Registration Successfull!"
    })
})


})

module.exports = router;
