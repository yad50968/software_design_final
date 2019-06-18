var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    date: Date,
    info: String,
    where: Number
});

module.exports = mongoose.model('User', userSchema);
