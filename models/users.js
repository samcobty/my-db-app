const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    favoriteFood: String,
    isInstructor: Boolean
});

module.exports = mongoose.model('Users', usersSchema);