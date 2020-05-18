const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

require('dotenv').config();

const pusher = new Pusher({
    appId: process.env.APP_ID,
    key: process.env.KEY,
    secret: process.env.SECRET,
    cluster: process.env.CLUSTER,
    encrypted: true
});

router.get('/', (req, res) => {
    res.send('POLL');
});

router.post('/', (req, res) => {
    pusher.trigger('os-poll', 'os-vote', {
        points: 1,
        os: req.body.os
    });
    res.json({ success: true, message: 'Thank You for Voting' });
});

module.exports = router;