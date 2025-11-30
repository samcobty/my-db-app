var express = require('express');
var router = express.Router();
const Users = require('../models/users');

/* GET home page. */
router.get('/', async function (req, res, next) {
    try {
        const users = await Users.find();
        res.render('index', { title: 'Express', users: users });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
