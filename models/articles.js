const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    url: { type: String, required: true },
    title: { type: String, required: true },
    date: {
        dayDB: { type: Number, required: true },
        monthDB: { type: String, required: true },
        yearDB: { type: Number, required: true }
    },
    time: {
        hourDB: { type: Number, required: true },
        minuteDB: { type: Number, required: true }
    },
    by: { type: String, required: true },
    location: { type: String, required: true },
    subtitle: { type: String, required: true },
    image: {
        url: { type: String, required: true },
        caption: { type: String, required: true }
    },
    content: {
        para1: { type: String, required: true },
        para2: { type: String },
        para3: { type: String },
        para4: { type: String },
        para5: { type: String }
    },
    category: { type: String, required: true }
}, { collection: 'articles' });

const articles = mongoose.model('articles', articleSchema);
module.exports = articles;