const express = require('express');
const mysql = require('mysql2'); // Import the mysql2 package
const cors = require('cors');
const dayjs = require('dayjs'); // Import the dayjs
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


// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'evenplan', // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to my Node.js server!');
});

app.post('/submit',  contact);

app.post('/saveFormData', event_enquires);

// 404 handler - must be defined **after** all routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start the server
const PORT = process.env.PORT || 1200;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




// const formData = req.body;
// const inputDate = formData.date;
//  const mysqlDate = dayjs(inputDate, 'DD-MM-YYYY').format('YYYY-MM-DD');
//  console.log('Formatted MySQL Date:', mysqlDate);
// console.log('saveFormData form data:', formData);

// // SQL query to insert form data
// const query = `
//  INSERT INTO event_inquiry (name, phone, email, location, event_type, event_date)
//  VALUES (?, ?, ?, ?, ?, ?, ?)
// `;

// // Execute the query
// db.query(
//  query,
//  [
//    formData.name,
//    formData.phone,
//    formData.email,
//    formData.location,
//    formData.eventType,
//    mysqlDate,
//  ],
//  (err, results) => {
//    if (err) {
//      console.error('Error inserting data:', err.message);
//      return res.status(500).json({ error: 'Failed to save form data' });
//    }

//    console.log('Data inserted successfully:', results);
//    res.status(200).json({ message: 'Form data saved successfully!' });
//  }
// );