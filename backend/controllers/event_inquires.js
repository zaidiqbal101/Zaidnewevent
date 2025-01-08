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
    

    const emailInfo = await transporter.sendMail(mailOptions);
    console.log('Email sent:', emailInfo);
    
    const thanksemailInfo = await transporter.sendMail(thanksmailOptions);
    console.log('Email sent:', thanksemailInfo);

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