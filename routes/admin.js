const express = require('express');
const admin = require('../models/admin');
const articles = require('../models/articles');
const router = express.Router();
const bodyParser = require('body-parser');
const session = require('client-sessions');
router.use(bodyParser.urlencoded({ extended: true }));

router.use(session({
    cookieName: 'session',
    secret: 'random_string_goes_here',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    httpOnly: true,
    secure: true,
    ephemeral: true
}));

router.use((req, res, next) => {
    if(req.session && req.session.user) {
        admin.findOne({ username: req.session.user.username }, (err, user) => {
            if(user) {
                req.user = user;
                delete req.user.password;
                req.session.user = user;
                res.locals.user = user;
            }
            next();
        });
    } else {
        next();
    }
});

router.get('/', (req, res) => {
    if(req.user) {
        res.redirect('/admin/addarticle');
    } else {
        res.render('adminlogin');
    }
});

router.get('/addarticle', (req, res) => {
    if(!req.user) {
        res.redirect('/admin');
    } else {
        res.render('admin');
    }
});

router.get('/deletearticle', (req, res) => {
    if(!req.user) {
        res.redirect('/admin');
    } else {
        articles.find({}, (err, articles) => {
            if(err) {
                console.log(err);
            } else {
                articles.sort((a, b) => {
                    const monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                    const aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                    const bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                    return aDateTime < bDateTime ? 1 : -1;
                });
                res.render('admindelete', {
                    articles: articles
                });
            }
        });
    }
});

router.get('/deletearticle/:id', (req, res) => {
    articles.findByIdAndDelete(req.params.id, (err, res) => {
        if(err) {
            console.error(err);
        } else {
            console.log(res);
        }
    });
    res.redirect('/admin/deletearticle');
});

router.get('/logout', (req, res) => {
    req.session.reset();
    res.redirect('/admin');
});

router.post('/', (req, res) => {
    const newAdmin = new admin({
        username: req.body.username,
        password: req.body.password
    });
    admin.findOne({ username: newAdmin.username }, (err, user) => {
        if(!user) {
            res.redirect('/admin');
            console.log('Invalid username or password');
        } else {
            if(req.body.password === user.password) {
                req.session.user = user;
                res.redirect('/admin/addarticle');
            } else {
                res.redirect('/admin');
                alert("Invalid username or password");
                console.log('Invalid username or password');
            }
        }
    });
});

router.post('/submit', (req, res) => {
    console.log('Title: ' + req.body.title);
    console.log('Subtitle: ' + req.body.subtitle);
    console.log('Category: ' + req.body.category);
    const newArticle = new articles({
        title: req.body.title,
        date: {
            dayDB: req.body.dayselect,
            monthDB: req.body.monthselect,
            yearDB: req.body.yearselect
        },
        time: {
            hourDB: req.body.hour,
            minuteDB: req.body.minute
        },
        by: req.body.by,
        location: req.body.location,
        subtitle: req.body.subtitle,
        image: {
            url: req.body.imgurl,
            caption: req.body.imgcaption
        },
        content: {
            para1: req.body.para1,
            para2: req.body.para2,
            para3: req.body.para3,
            para4: req.body.para4,
            para5: req.body.para5
        },
        category: req.body.category
    });
    newArticle.save((err, articles) => {
        if(err) {
            console.error(err);
        } else {
            console.log('Articles saved to database');
        }
    })
    res.redirect('/');
});

module.exports = router;