const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dayjs = require('dayjs');
const app = express();
const nodemailer = require('nodemailer');
const contact = require('./controllers/contacts');
const event_enquires = require('./controllers/event_inquires');

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

// MongoDB Atlas connection
const mongoURI = 'mongodb+srv://AryanEventsDB:@ry@nevent009@aryanevents.5ehl4.mongodb.net/?retryWrites=true&w=majority&appName=AryanEvents'; // Replace with your MongoDB Atlas URI
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Atlas database!'))
  .catch((err) => {
    console.error('Database connection failed:', err.message);
  });

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to my Node.js server!');
});

// POST route for contact (if you want to use MongoDB)
app.post('/submit', contact);

// POST route for saving event inquiry data
app.post('/saveFormData', (req, res) => {
  const formData = req.body;
  const inputDate = formData.event_date;
  const eventDate = dayjs(inputDate, 'DD-MM-YYYY').toDate(); // Convert to JavaScript Date

  // Create a new event inquiry document
  const newEventInquiry = new EventInquiry({
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    location: formData.location,
    event_type: formData.event_type,
    event_date: eventDate,
  });

  // Save to MongoDB
  newEventInquiry.save()
    .then(() => {
      console.log('Event inquiry saved successfully!');
      res.status(200).json({ message: 'Form data saved successfully!' });
    })
    .catch((err) => {
      console.error('Error saving data:', err.message);
      res.status(500).json({ error: 'Failed to save form data' });
    });
});

// 404 handler - must be defined **after** all routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start the server
const PORT = process.env.PORT || 1200;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});