const Employee = require('../models/Employee');

// Get all employees
exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.eid);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
    try {
        const { first_name, last_name, email, position, salary, date_of_joining, department } = req.body;

        const newEmployee = new Employee({
            first_name,
            last_name,
            email,
            position,
            salary,
            date_of_joining,
            department
        });

        await newEmployee.save();
        res.status(201).json({ message: 'Employee created successfully.', employee_id: newEmployee._id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update employee details
exports.updateEmployee = async (req, res) => {
    try {
        const updates = req.body;
        const employee = await Employee.findByIdAndUpdate(req.params.eid, updates, { new: true });

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json({ message: 'Employee details updated successfully.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete employee by ID
exports.deleteEmployee = async (req, res) => {
    try {
        const employeeId = req.query.eid;
        const employee = await Employee.findByIdAndDelete(employeeId);

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(204).json({ message: 'Employee deleted successfully.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
