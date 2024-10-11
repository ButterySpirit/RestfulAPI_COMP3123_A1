const { check, validationResult } = require('express-validator');

// User signup validation
exports.signupValidator = [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Valid email is required').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// User login validation
exports.loginValidator = [
    check('email', 'Valid email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Employee validation
exports.employeeValidator = [
    check('first_name', 'First name is required').not().isEmpty(),
    check('last_name', 'Last name is required').not().isEmpty(),
    check('email', 'Valid email is required').isEmail(),
    check('position', 'Position is required').not().isEmpty(),
    check('salary', 'Salary must be a number').isNumeric(),
    check('department', 'Department is required').not().isEmpty(),
    check('date_of_joining', 'Date of joining must be a valid date').isDate(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

exports.updateEmployeeValidator = [
    check('first_name', 'First name must be a string').optional().isString(),
    check('last_name', 'Last name must be a string').optional().isString(),
    check('email', 'Valid email is required').optional().isEmail(),
    check('position', 'Position must be a string').optional().isString(),
    check('salary', 'Salary must be a number').optional().isNumeric(),
    check('department', 'Department must be a string').optional().isString(),
    check('date_of_joining', 'Date of joining must be a valid date').optional().isDate(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
