const mongoose = require('mongoose');


const applicantSchema = mongoose.Schema({
  applicantName: {
        type: String,
        default: "",
        required: true,
      },
      password: {
        type: String,
        default: "",
        required: true,
      },
    email: {
        type:String,
        required: true ,
        default:""
    },
    mobile: {
        type:String,
        required: true,
        default:""
    },
   
})




module.exports = mongoose.model('Applicant', applicantSchema);