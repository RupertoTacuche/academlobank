const userController = require('../controllers/user.controller');
const express = require('express');

const router = express.Router();

router.post('/signup', userController.signup);

router.post('/login', userController.login);

//todo: hacer el history
module.exports = router;