const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dayjs = require('dayjs');
const nodemailer = require('nodemailer');
const app = express();

// MongoDB Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  eventType: { type: String, required: true },
  eventDate: { type: Date, required: true },
  message: { type: String, required: true },
});

const ContactInquiry = mongoose.model('ContactInquiry', contactSchema);

// MongoDB Atlas connection
const mongoURI = 'mongodb+srv://username:password@clustername.mongodb.net/mydb?retryWrites=true&w=majority'; // Replace with your MongoDB Atlas URI
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch((err) => console.error('Database connection failed:', err.message));

// Middleware to parse JSON
app.use(express.json());
// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's origin
  methods: ['GET', 'POST', 'OPTIONS'], // Allow required methods
  credentials: true, // Enable cookies and authorization headers
}));

// Contact Form Handler
const contact = async (req, res) => {
  const formData = req.body;
  console.log(formData);

  const phoneAsInt = parseInt(formData.phone, 10);
  console.log('Converted phone:', phoneAsInt);

  const inputDate = formData.date;
  const eventDate = dayjs(inputDate, 'DD-MM-YYYY').toDate(); // Convert to JavaScript Date
  console.log('Formatted Event Date:', eventDate);

  // Validate input data
  if (!formData.name) {
    return res.json({ message: "Please enter your name" });
  } else if (!formData.phone || isNaN(phoneAsInt)) {
    return res.json({ message: "Please enter a valid phone number" });
  } else if (!formData.email) {
    return res.json({ message: "Please enter your email" });
  } else if (!formData.location) {
    return res.json({ message: "Please enter your location" });
  } else if (!formData.date) {
    return res.json({ message: "Please enter your event date" });
  } else if (!formData.eventType) {
    return res.json({ message: "Please enter your event type" });
  } else if (!formData.message) {
    return res.json({ message: "Please enter your message" });
  }

  try {
    // Create a new contact inquiry document
    const newContact = new ContactInquiry({
      name: formData.name,
      phone: phoneAsInt,
      email: formData.email,
      location: formData.location,
      eventType: formData.eventType,
      eventDate: eventDate,
      message: formData.message,
    });

    // Save the contact inquiry to MongoDB
    await newContact.save();
    console.log('Data inserted successfully!');

    // Now send the email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'shahid.convegenius@gmail.com',
        pass: 'fqurhmlnhmlgvvzv', // Use environment variables for security
      },
    });

    const mailOptions = {
      from: 'shahid.convegenius@gmail.com',
      to: 'punitdeveloper1@gmail.com',
      subject: `Event Inquiry: ${formData.eventType}`,
      text: `You have a new event inquiry with the following details:
        
        Name: ${formData.name}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Location: ${formData.location}
        Event Type: ${formData.eventType}
        Event Date: ${formData.date}
        Message: ${formData.message}`,
    };

    try {
      const emailInfo = await transporter.sendMail(mailOptions);
      console.log('Email sent:', emailInfo);
      res.status(200).json({ message: 'Form data inserted and email sent successfully' });
    } catch (emailError) {
      console.error('Error sending email:', emailError.message);
      res.status(500).json({ message: 'Error sending email', error: emailError.message });
    }

  } catch (dbError) {
    console.error('Error inserting data:', dbError.message);
    res.status(500).json({ message: 'Error inserting data', error: dbError.message });
  }
};

module.exports = contact;
