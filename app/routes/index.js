var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send(`
        <link rel="stylesheet" href="css/app.css">
        <h1>Welcome to Roux Meetups</h1>
        <img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
        <p>Roux Academy Meetups put together artists from all walks of life</p>
        <script src="/reload/reload.js"></script>
    `);
});

module.exports = router;