import express from 'express';
const router = express.Router();


router.post('/signup', (req, res) => {
    res.send('signup');
});

router.post('/signin', (req, res) => {
    res.send('sign in');
});

module.exports = router;