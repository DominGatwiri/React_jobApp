let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuidv4'),
    router = express.Router();

    //Uploads model
    let Uploads = require('../models/Uploads');

    const DIR = './public/';

    const storage = multer.diskStorage({
      destination: (req,file,cb) => {
        cb(null,DIR);
      },
filename: (req,file,cb) => {
  const fileName = file.originalname.toLowerCase().split('').join('-');
  cb(null, uuidv4() + '-' + fileName)
}

    });
    var upload = multer({
      storage: storage,
      fileFilter: (req, file, cb) => {
          if (file.mimetype == "application/msword" || file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file.mimetype == "application/pdf") {
              cb(null, true);
          } else {
              cb(null, false);
              return cb(new Error('Only .doc, .docx and .pdf format allowed!'));
          }
      }
  });
  
  // User model
  let User = require('../models/User');
  
  router.post('/user-profile', upload.single('profileImg'), (req, res, next) => {
      const url = req.protocol + '://' + req.get('host')
      const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          profileImg: url + '/public/' + req.file.filename
      });
      user.save().then(result => {
          res.status(201).json({
              message: "User registered successfully!",
              userCreated: {
                  _id: result._id,
                  profileImg: result.profileImg
              }
          })
      }).catch(err => {
          console.log(err),
              res.status(500).json({
                  error: err
              });
      })
  })
  
  router.get("/", (req, res, next) => {
      User.find().then(data => {
          res.status(200).json({
              message: "User list retrieved successfully!",
              users: data
          });
      });
  });
  
  module.exports = router;