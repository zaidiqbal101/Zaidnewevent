import React, { useState } from 'react';
import axios from 'axios';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    eventType: '',
    date: '',
    message: '',
    isRobot: false
  });

  const eventTypes = [
    "Birthday", "Anniversary", "Wedding", "Kitty Party", 
    "Baby Shower", "Retirement Party", "Couple Proposals", 
    "House Party", "Namakarana Ceremony", "Theme Party", 
    "Reunions", "Alumni Meet", "Other"
  ];

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      isRobot: !formData.isRobot
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Handle form submission logic here

    const response =  axios.post('http://localhost:1200/submit',formData);
    response.then(response => {
      console.log('Success:', response.data);
      alert(response.data.message); // Show the success message from the server
    }).catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="min-h-screen bg-[#351e2f] flex">
      {/* Left Side Content */}
      <div className="w-1/2 p-12 text-white flex justify-center items-center">
        {/* Contact Info */}
        <div className="text-left">
          <h1 className="text-4xl text-yellow-400 font-semibold mb-6">
            Let's Talk About Your Event
          </h1>
          
          <p className="mb-8 text-lg text-white">
            If you have any query or would like more information on<br />
            our works, kindly fill the form and we’ll aim<br />
            to get back to you within 24 hours.
          </p>

          <div className="space-y-4 text-yellow-600">
            <div>
            +91 9220565444<br />
             
            </div>
            <div>aryaneventsplanner@gmail.com</div>
            <div>
            Kujapi Gaya- 823002<br />
             
              
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 p-12">
        <div className="bg-white rounded-lg p-8 max-w-lg">
          <h2 className="text-3xl text-[#2F6158] font-semibold mb-6">
            Happy To Connect
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              type="text"
              placeholder="Name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#2F6158]"
            />
            
            <input 
              type="tel"
              placeholder="Phone Number*"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#2F6158]"
            />
            
            <input 
              type="email"
              placeholder="Email*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#2F6158]"
            />
            
            <input 
              type="text"
              placeholder="Location*"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#2F6158]"
            />
            
            <input 
              type="date"
              placeholder="Select Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#2F6158]"
            />
            
            {/* Event Type Dropdown inside the form */}
            <div className="mb-4">
              <label htmlFor="eventType" className="block text-sm font-semibold text-[#2F6158]">Select Event Type*</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#2F6158]"
              >
                <option value="">Select Event Type</option>
                {eventTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <textarea 
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#2F6158]"
            ></textarea>

            <div className="flex items-center mb-4">
              <input 
                type="checkbox" 
                name="isRobot" 
                checked={formData.isRobot}
                onChange={handleCheckboxChange} 
                className="mr-2" 
              />
              <label htmlFor="isRobot">I'm not a robot</label>
            </div>

            <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>

            <button 
              type="submit"
              className="bg-[#290F23] text-white px-8 py-2 rounded hover:bg-[#351E30] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
