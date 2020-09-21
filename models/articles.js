const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
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
        imageFile: { type: Buffer, required: true },
        imageType: { type: String, required: true },
        url: { type: String, required: false },
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

articleSchema.virtual('imageFile').get(() => {
    // if (this.image.imageFile != null && this.image.imageType != null) {
        return `data:${this.image.imageType};charset=utf-8;base64,${this.image.imageFile.toString('base64')}`;
    // }
});

const articles = mongoose.model('articles', articleSchema);
module.exports = articles;