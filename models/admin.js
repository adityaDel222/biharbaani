const mongoose = require('mongoose');
const { collection } = require('./articles');

const adminSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
}, { collection: 'admin' });

const admin = mongoose.model('admin', adminSchema);
module.exports = admin;