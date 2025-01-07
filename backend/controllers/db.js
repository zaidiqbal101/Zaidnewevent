const mongoose = require('mongoose');

// Define a schema for a collection
const EventSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  location: String,
  event_type: String,
  event_date: Date,
});
