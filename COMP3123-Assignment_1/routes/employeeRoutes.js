const express = require('express');
const { getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const { employeeValidator, updateEmployeeValidator } = require('../utils/validators');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

// Employee routes
router.get('/', authMiddleware, getEmployees);
router.get('/:eid', authMiddleware, getEmployeeById);
router.post('/', authMiddleware, employeeValidator, createEmployee);
router.put('/:eid', authMiddleware, updateEmployeeValidator, updateEmployee); // Use the new validator here
router.delete('/', authMiddleware, deleteEmployee);

module.exports = router;
