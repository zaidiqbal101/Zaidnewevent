const mongoose = require('mongoose'); // Import mongoose for MongoDB
const dayjs = require('dayjs'); // Import dayjs
const nodemailer = require('nodemailer');

// MongoDB Schema for Event Inquiry
const eventInquirySchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  location: String,
  event_type: String,
  event_date: Date,
});

const EventInquiry = mongoose.model('EventInquiry', eventInquirySchema);

const event_enquires = async (req, res) => {
  try {
    const formData = req.body;
    console.log('Received form data:', formData);

    // Convert event date to JavaScript Date
    const eventDate = dayjs(formData.eventDate, 'DD-MM-YYYY').toDate();

    // Create a new event inquiry document
    const newEventInquiry = new EventInquiry({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      event_type: formData.eventType,
      event_date: eventDate,
    });

    // Save event inquiry to MongoDB
    await newEventInquiry.save();
    console.log('Data inserted into MongoDB successfully');

    // Send email notification using nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'shahid.convegenius@gmail.com',
        pass: 'fqurhmlnhmlgvvzv', // Consider using environment variables for security
      },
    });

    const mailOptions = {
      from: `${formData.email}`,
      to: 'shahid.convegenius@gmail.com',
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
      message: 'Form data inserted into MongoDB and email sent successfully',
    });
  } catch (error) {
    console.error('Error occurred:', error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = event_enquires;