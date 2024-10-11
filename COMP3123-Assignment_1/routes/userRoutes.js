const express = require('express');
const { signup, login } = require('../controllers/userController');
const { signupValidator, loginValidator } = require('../utils/validators');
const router = express.Router();

// User routes
router.post('/signup', signupValidator, signup);
router.post('/login', loginValidator, login);

module.exports = router;
