const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

router.get('/app', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.2",
        appEnv: process.env.APP_API,
        teste: "Bem vindo!"
    });
});
module.exports = router;