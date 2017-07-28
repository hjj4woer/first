var mongoose = require('mongoose');
var blogSchema = require('../schema/blog');

module.exports = mongoose.model('blog', blogSchema);
