var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Hero = require('../models/HERO').Hero;
var User = require("../models/User").User;
var async = require('async');
var checkAuth = require("../middleware/checkAuth.js");
var index = Math.random();

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.greeting = "Hi!!!";
    res.render('index', { title: 'Express',counter:req.session.counter});
});

router.get('/car/:nick', checkAuth ,function(req, res, next) {
    Hero.findOne({"nick": req.params.nick},
        function (err, result) {
            if (err) throw err;
            var car = result;
            res.render('car', {
                title: car.title,
                picture: car.avatar,
                about: car.desc,
            })
        })
});


/*Gallery*/
router.get('/Gallery', function(req, res, next) {
    res.render('gallery',{
    });
});

/*Video*/
router.get('/Video', function(req, res, next) {
    res.render('Video',{
    });
});




//GET auth
router.get('/logreg', function(req, res, next){
    res.render('logreg',{error:null});
})

//POST auth
router.post('/logreg', function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username:username},function(err,user){
        if(err) return next(err)
        if(user){
            if(user.checkPassword(password)){
                req.session.user_id = user._id;
                res.redirect('/')
            } else {
                res.render('logreg',{error:"Пароль не верный"});
            }
        } else {
            var newUser = new User({username:username,password:password});
            newUser.save(function(err,user){
                if(err) return next(err);
                res.session.user_id = user._id;
                index++;
                res.redirect('/');
            })
        }
    })
});

// Post logout
router.post('/logout',function(req, res, next){
    req.session.destroy();
    res.redirect('/')
});

module.exports = router;