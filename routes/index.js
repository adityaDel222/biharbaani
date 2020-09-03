const express = require('express');
const articles = require('../models/articles');
const router = express.Router();

router.get('/', (req, res) => {
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
            res.render('index', {
                heading: 'Headlines',
                hindiHeading: 'हेडलाइंस',
                articles: articles
            });
        }
    });
});

router.get('/desh-videsh/', (req, res) => {
    articles.find({ category: "desh-videsh" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Desh-Videsh',
                hindiHeading: 'देश-विदेश',
                articles: articles
            });
        }
    });
});

router.get('/bihar-breaking/', (req, res) => {
    articles.find({ category: "bihar-breaking" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Bihar-Breaking',
                hindiHeading: 'बिहार ब्रेकिंग',
                articles: articles
            });
        }
    });
});

router.get('/raajneeti/', (req, res) => {
    articles.find({ category: "raajneeti" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Raajneeti',
                hindiHeading: 'राजनीति',
                articles: articles
            });
        }
    });
});

router.get('/sampaadkiya/', (req, res) => {
    articles.find({ category: "sampaadkiya" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Sampaadkiya',
                hindiHeading: 'संपादकीय',
                articles: articles
            });
        }
    });
});

router.get('/vyakti-vishesh/', (req, res) => {
    articles.find({ category: "vyakti-vishesh" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Vyakti-Vishesh',
                hindiHeading: 'व्यक्ति-विशेष',
                articles: articles
            });
        }
    });
});

router.get('/paryatan/', (req, res) => {
    articles.find({ category: "paryatan" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Paryatan',
                hindiHeading: 'पर्यटन',
                articles: articles
            });
        }
    });
});

router.get('/khel-jagat/', (req, res) => {
    articles.find({ category: "khel-jagat" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Khel-Jagat',
                hindiHeading: 'खेल जगत',
                articles: articles
            });
        }
    });
});

router.get('/manoranjan/', (req, res) => {
    articles.find({ category: "manoranjan" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Manoranjan',
                hindiHeading: 'मनोरंजन',
                articles: articles
            });
        }
    });
});

router.get('/aapke-sandesh/', (req, res) => {
    articles.find({ category: "aapke-sandesh" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Aapke-Sandesh',
                hindiHeading: 'आपके संदेश',
                articles: articles
            });
        }
    });
});

router.get('/sampark/', (req, res) => {
    res.render('sampark');
});

router.get('/article/:id', (req, res) => {
    articles.findById(req.params.id, (err, article) => {
        if(err) {
            console.error(err);
        } else {
            console.log('Title: ' + article.title);
            articles.find({ category: article.category }, (err, relArticlesList) => {
                if(err) {
                    console.error(err);
                } else {
                    relArticlesList.sort((a, b) => {
                        monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                        aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                        bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                        return aDateTime < bDateTime ? 1 : -1;
                    });
                    let hindiHeading;
                    if(article.category === 'desh-videsh') {
                        hindiHeading = 'देश-विदेश';
                    } else if(article.category === 'bihar-breaking') {
                        hindiHeading = 'बिहार ब्रेकिंग';
                    } else if(article.category === 'raajneeti') {
                        hindiHeading = 'राजनीति';
                    } else if(article.category === 'sampaadkiya') {
                        hindiHeading = 'संपादकीय';
                    } else if(article.category === 'vyakti-vishesh') {
                        hindiHeading = 'व्यक्ति-विशेष';
                    } else if(article.category === 'paryatan') {
                        hindiHeading = 'पर्यटन';
                    } else if(article.category === 'khel-jagat') {
                        hindiHeading = 'खेल जगत';
                    } else if(article.category === 'manoranjan') {
                        hindiHeading = 'मनोरंजन';
                    } else if(article.category === 'aapke-sandesh') {
                        hindiHeading = 'आपके संदेश';
                    }
                    res.render('article', {
                        article: article,
                        hindiHeading: hindiHeading,
                        relArticlesList: relArticlesList
                    });
                }
            });
        }
    });
});

module.exports = router;