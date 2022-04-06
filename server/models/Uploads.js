const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadsSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    image:{
        type: String
    }, 
    collection:'uploads'
})


module.exports = mongoose.model('Uploads',uploadsSchema )