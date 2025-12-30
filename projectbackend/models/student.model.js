// models/student.model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// --- Define the Blueprints for the nested data ---

const subjectAttendanceSchema = new Schema({
    subjectName: { type: String, required: true },
    totalClasses: { type: Number, required: true },
    attendedClasses: { type: Number, required: true },
}, { _id: false }); // _id: false prevents MongoDB from creating extra IDs for sub-documents

const semesterAttendanceSchema = new Schema({
    semester: { type: String, required: true },
    subjectAttendances: [subjectAttendanceSchema],
}, { _id: false });


// --- Define the Main Student Blueprint ---

const studentProfileSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true // Removes whitespace from the beginning and end
    },
    rollNumber: {
        type: String,
        required: true,
        unique: true, // Ensures no two students can have the same roll number
        trim: true
    },
    className: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String,
        required: true
    },
    attendanceHistory: [semesterAttendanceSchema]
}, {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
});

// Create the model from the blueprint.
// Mongoose will automatically create a collection named 'students' (plural and lowercase).
const Student = mongoose.model('Student', studentProfileSchema);

// Export the model so we can use it in other files
module.exports = Student;