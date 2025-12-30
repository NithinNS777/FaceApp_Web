// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 3004; // Or whichever port you are using

// Middleware
app.use(cors());
app.use(express.json()); // This is crucial for our server to understand JSON data

// --- Connect to MongoDB ---
const uri = process.env.MONGO_URI;
mongoose.connect(uri)
  .then(() => {
    console.log('Successfully connected to MongoDB!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// --- DEFINE OUR ROUTES ---

// Test route
app.get('/ping', (req, res) => {
  console.log('Ping request received!');
  res.send('Pong! The Aegis Backend is running.');
});

// --- THIS IS THE NEW PART ---
// We tell our app to use the new student routes we created.
const studentRoutes = require('./routes/student.routes');
// Any URL that starts with '/api/students' will be handled by our 'student.routes.js' file.
app.use('/api/students', studentRoutes);


// --- START THE SERVER ---
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
