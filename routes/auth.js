const express = require('express');
const router = express.Router();


router.get('/signup', (req, res) => {
    res.send('signup');
});

router.get('/signin', (req, res) => {
    res.send('sign in');
});

module.exports = router;