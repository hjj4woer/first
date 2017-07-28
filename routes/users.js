var express = require('express');
var router = express.Router();
var blog = require('../models/blog');


/* GET users listing. */
router.get('/', function(req, res, next) {

    var blog_t = blog.find({'blog_user': req.session.user});
    blog_t.exec(function (err, blog) {
        if(blog.length != 0) {
            var re = new Array;

            for(var i in blog){
                var t = {};
                t.blog_name = blog[i].blog_name;
                t.blog_text = blog[i].blog_text;
                t.blog_user = blog[i].blog_user;
                re.push(t);
            }
            res.render('user',{user: req.session.user, re:re});
            console.log(re)
        }else{
            console.log('meiyouswenzhan');
        }
    });
    console.log(req.session.user);

});
router.post('/',function (req, res, next) {
    res.redirect('/post');
});



module.exports = router;
