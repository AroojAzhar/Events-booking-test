const mongoose = require('mongoose');

let AdminSchema = new mongoose.Schema({
    name : {type : String , required : true},
    image : {type : String , required : true},
    type : {type : String , required : true},
    date : {type : String , required : true},
    price : {type : Number , required : true},
    info : {type : String , required : true},
    created : {type : Date , default : Date.now()}
});
let Admin = mongoose.model('admin' , AdminSchema);
module.exports = Admin;
