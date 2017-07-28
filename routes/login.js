var express = require('express'); //调用express模块
var router = express.Router();  //调用模块的Router方法
var User = require('../models/user');   // 调用刚才封装好的user类
var crypto = require("crypto");


router.get('/', function (req, res, next) {
    res.render('login', {title: '登陆'});
});

router.post('/', function (req, res, next) {
   var md5 = crypto.createHash('md5');
   var password = md5.update(req.body.password, 'utf-8').digest('base64');

   var us = User.find({'name': req.body.name, 'password': password});
   us.exec(function (err, user) {
       if (err) {  //如果报错，返回报错信息
           console.log(err);
           return res.send({
               error: err
           });
       }
       if (user.length != 0){
           req.session.user_id = user[0]._id;
           req.session.user = user[0].name;
           req.session.success = 'denglu';
           res.redirect('/users');
       }else {
           return res.render('login', {title: res.locals.message.err});
       }
   })
});

module.exports = router;