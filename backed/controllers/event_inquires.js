 
 const express = require('express');
 const mysql = require('mysql2'); // Import the mysql2 package
 const cors = require('cors');
 const dayjs = require('dayjs'); // Import the dayjs
 const app = express();
 const db = require('./db');
 const nodemailer = require('nodemailer');
 const event_enquires = async (req, res) => {
  try {
    const formData = req.body;
    console.log('saveFormData form data:', formData);

    // SQL query to insert form data
    const query = `
      INSERT INTO event_inquiry (name, phone, email, location, event_type, event_date)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    // Execute query with async/await
    const [results] = await db.promise().query(query, [
      formData.name,
      formData.phone,
      formData.email,
      formData.location,
      formData.eventType,
      formData.eventDate,
    ]);

    console.log('Data inserted successfully:', results);

    // Now send email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'mohdalquama01@gmail.com',
        pass: 'nqrx segq vdaq dyyp', // Consider using environment variables for security
      },
    });

    const mailOptions = {
      from: `${formData.email}`,
      to: 'mohdalquama01@gmail.com',
      subject: `Event Inquiry: ${formData.eventType}`,
      text: `You have a new event inquiry with the following details:

        Name: ${formData.name}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Location: ${formData.location}
        Event Type: ${formData.eventType}
        Event Date: ${formData.eventDate}`,
    };

    const emailInfo = await transporter.sendMail(mailOptions);
    console.log('Email sent:', emailInfo);

    // Send final success response
    res.status(200).json({
      message: 'Form data inserted and email sent successfully',
    });
  } catch (error) {
    console.error('Error occurred:', error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = event_enquires;