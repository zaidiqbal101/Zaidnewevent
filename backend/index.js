const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dayjs = require('dayjs');
const app = express();
const nodemailer = require('nodemailer');
const contact = require('./controllers/contacts');
const wedding = require('./controllers/wedding');  

// Middleware to parse JSON
app.use(express.json());
// Use CORS middleware
app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with your frontend's origin
    methods: ['GET', 'POST', 'OPTIONS'], // Allow required methods
    credentials: true, // Enable cookies and authorization headers
  })
);

mongoose.connect('mongodb+srv://zaid:admin123@aryanevents.5ehl4.mongodb.net/?retryWrites=true&w=majority&appName=AryanEvents', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connection established'))
  .catch((err) => {
    console.error('MongoDB error: ', err.message);
    process.exit(1); // Exit process if connection fails
  });


// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to my Node.js server!');
});

// POST route for contact (if you want to use MongoDB)
app.post('/submit', contact);
app.post('/saveFormData', wedding);


// 404 handler - must be defined **after** all routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start the server
const PORT = process.env.PORT || 1200;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});