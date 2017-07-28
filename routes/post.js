var express = require('express'); //调用express模块
var router = express.Router();  //调用模块的Router方法
var blog = require('../models/blog');   // 调用刚才封装好的user类
var crypto = require("crypto");


router.get('/', function (req, res, next) {
    console.log(req.session.name);
    res.render('post', {user: req.session.name,
    title: '发表文章'});
});

router.post('/', function (req, res, next) {

    new blog({
        blog_name: req.body.blog_name,
        blog_text: req.body.blog_text,
        blog_user: req.session.user
    }).save(function (err, small, numAffected ) {
        if (err) {
            console.log(err);
        }else {
            return res.render('post', {
                user:req.session.user,
                title: "chenggong."
            });
        }});
});

module.exports = router;