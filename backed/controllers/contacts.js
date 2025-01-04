const express = require('express');
const mysql = require('mysql2'); // Import the mysql2 package
const cors = require('cors');
const dayjs = require('dayjs'); // Import the dayjs
const app = express();
 const db = require('./db');
 const nodemailer = require('nodemailer');
const contact =   async (req, res) => {
  const formData = req.body;
  console.log(formData);
  
  const phoneAsInt = parseInt(formData.phone, 10);
  console.log('Converted phone:', phoneAsInt);

  const inputDate = formData.date;
  const mysqlDate = dayjs(inputDate, 'DD-MM-YYYY').format('YYYY-MM-DD');
  console.log('Formatted MySQL Date:', mysqlDate);

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

  // Insert into database
  const query = `
    INSERT INTO Contact_Inquiry(name, phone, email, location, event_type, event_date, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  
  const values = [
    formData.name || null,
    phoneAsInt || null,
    formData.email || null,
    formData.location || null,
    formData.eventType || null,
    mysqlDate || null,
    formData.message || null,
  ];

  try {
    // Execute the database query
    const result = await new Promise((resolve, reject) => {
      db.execute(query, values, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
    
    console.log('Data inserted successfully:', result);
    
    // Now send email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'mohdalquama01@gmail.com',
        pass: 'nqrx segq vdaq dyyp',
      },
    });

    const mailOptions = {
      from: 'mohdalquama01@gmail.com',
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
}

module.exports = contact;