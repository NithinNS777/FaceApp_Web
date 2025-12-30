// routes/student.routes.js

const router = require('express').Router();
const Student = require('../models/student.model'); // Import our student blueprint

// This handles POST requests to the URL: /api/students/
// It's the endpoint for creating a new student.
router.post('/', async (req, res) => {
    try {
        // We get the student data from the body of the request sent by Flutter
        const studentData = req.body;

        // Create a new student document using our blueprint
        const newStudent = new Student(studentData);

        // Save the new student to the database
        await newStudent.save();

        // Send a success response back to the Flutter app
        res.status(201).json({ message: 'Student profile saved successfully!' });

    } catch (error) {
        // If an error occurs (e.g., validation fails, or roll number is not unique)
        console.error('Error saving student:', error);
        res.status(400).json({ message: 'Error saving student profile', error: error.message });
    }
});

module.exports = router;