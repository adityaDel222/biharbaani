const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const app = express();
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('./public'));

// const db = require('./config/keys').mongoURI;
const db = process.env.MONGO_URI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to database'))
.catch(err => console.error(err));

app.use('/', indexRouter);
app.use('/admin', adminRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started at PORT ${ port }`);
});