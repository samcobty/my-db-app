var express = require('express');
var router = express.Router();
const Users = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', async function(req, res) {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
