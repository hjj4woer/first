var mongoose = require('mongoose');

module.exports = new  mongoose.Schema({
    blog_name:{
        type:String,
        default: ""
    },
    blog_text:{
        type: String,
        default: ""
    },
    blog_user:{
        type: String
    }
});