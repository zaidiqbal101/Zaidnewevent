const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dayjs = require('dayjs');
const nodemailer = require('nodemailer');
const app = express();

// MongoDB Schema
const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  eventType: { type: String, required: true },
  eventDate: { type: Date, required: true }
});

const EventInquiries = mongoose.model('EventInquiries', eventSchema);

// Middleware to parse JSON
app.use(express.json());

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's origin
  methods: ['GET', 'POST', 'OPTIONS'], // Allow required methods
  credentials: true, // Enable cookies and authorization headers
}));

// Event Form Handler
const wedding = async (req, res) => {
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
  } else if (!formData.eventDate) { 
    return res.json({ message: "Please enter your event date" }); 
  } else if (!formData.eventType) { 
    return res.json({ message: "Please enter your event type" }); 
  }

  try {
    // Create a new event inquiry document
    const newInquiries = new EventInquiries({
      name: formData.name,
      phone: phoneAsInt,
      email: formData.email,
      location: formData.location,
      eventType: formData.eventType,
      eventDate: eventDate
    });

    // Save the event inquiry to MongoDB
    await newInquiries.save();
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
      from: formData.email,
      to: 'shahid.convegenius@gmail.com',
      subject: `Event Inquiry: ${formData.eventType}`,
      text: `You have a new event inquiry with the following details:
        
        Name: ${formData.name}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Location: ${formData.location}
        Event Type: ${formData.eventType}
        Event Date: ${formData.date}`,
    };


    const thanksmailOptions = {
      from: 'shahid.convegenius@gmail.com',
      to: `${formData.email}`,
      subject: `Event Inquiry: ${formData.eventType}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h1 style="color: #2F6158;">Dear ${formData.name},</h1>
          <p>Thank you for reaching out to <strong>Aryan Event Planners</strong>! We have received your inquiry regarding the <strong>${formData.eventType}</strong> event scheduled for <strong>${formData.date}</strong> at <strong>${formData.location}</strong>.</p>
          <p>Our team specializes in creating unforgettable events, offering:</p>
          <ul>
            <li>Premium decorations tailored to your theme.</li>
            <li>Customized event planning services.</li>
            <li>Top-notch catering and entertainment options.</li>
          </ul>
          <p>We’ll get back to you within <strong>24 hours</strong> to discuss your requirements in detail. Meanwhile, feel free to explore our portfolio of premium events at <a href="#" style="color: #2F6158; text-decoration: none; font-weight: bold;">[Insert Website or Portfolio Link]</a>.</p>
          <p>If you have any immediate queries, please contact us at <strong>+91 9220565444</strong> or reply to this email.</p>
          <p>We look forward to making your event extraordinary!</p>
          <p style="margin-top: 20px;">Warm Regards,<br><strong>Aryan Event Planners</strong></p>
        </div>
      `
    };

    try {
      const emailInfo = await transporter.sendMail(mailOptions);
      console.log('Email sent:', emailInfo);
      
      const thanksemailInfo = await transporter.sendMail(thanksmailOptions);
      console.log('Email sent:', thanksemailInfo);
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

module.exports = wedding;
