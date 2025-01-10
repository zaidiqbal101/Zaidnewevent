import React, { useState } from 'react';
import axios from 'axios';
import ConfettiExplosion from './partyBomb';
import Loader from './Loader'
import { triggerConfetti } from './partyBomb';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    eventType: '',
    date: '',
    message: '',
    isRobot: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState('');

  const eventTypes = [
    'Birthday', 'Anniversary', 'Wedding', 'Kitty Party',
    'Baby Shower', 'Retirement Party', 'Couple Proposals',
    'House Party', 'Namakarana Ceremony', 'Theme Party',
    'Reunions', 'Alumni Meet', 'Other',
  ];

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      isRobot: !formData.isRobot,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required.';
    if (!formData.location) newErrors.location = 'Location is required.';
    if (!formData.eventType) newErrors.eventType = 'Event type is required.';
    if (!formData.date) newErrors.date = 'Date is required.';
    if (formData.isRobot) newErrors.isRobot = 'Please confirm you are not a robot.';
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    setResponseMessage('');

    try {
      const response = await axios.post('http://localhost:1200/submit', formData);
      console.log('Success:', response.data);
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        eventType: '',
        date: '',
        message: '',
        isRobot: false,
      });
      setResponseMessage(response.data.message || 'Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
      triggerConfetti(); // Trigger confetti when form is submitted successfully
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1C3E] flex flex-wrap">
     {/* Left Side Content */}
      {loading && <Loader/>}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 text-white flex justify-center items-center">
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-6xl bg-gradient-to-r from-[#d4af37] via-[#f8e45f] to-[#d4af37] bg-clip-text text-transparent philosopher-bold mb-6">
            Let's Talk About Your Event
          </h1>
          <p className="mb-8 text-sm sm:text-base lg:text-lg text-white">
            If you have any query or would like more information on<br />
            our works, kindly fill the form and we’ll aim<br />
            to get back to you within 24 hours.
          </p>
          <div className="space-y-4 text-yellow-600 text-sm sm:text-base">
            <div>+91 9220565444</div>
            <div>aryaneventsplanner@gmail.com</div>
            <div>Kujapi Gaya- 823002</div>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12">
        <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-8 max-w-full sm:max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl text-[#2F6158] font-semibold mb-6">
            Happy To Connect
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'focus:ring-[#2F6158]'}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="tel"
              placeholder="Phone Number*"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500' : 'focus:ring-[#2F6158]'}`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            <input
              type="email"
              placeholder="Email*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'focus:ring-[#2F6158]'}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="text"
              placeholder="Location*"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 ${errors.location ? 'border-red-500' : 'focus:ring-[#2F6158]'}`}
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}

            <input
              type="date"
              placeholder="Select Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 ${errors.date ? 'border-red-500' : 'focus:ring-[#2F6158]'}`}
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

            <div className="mb-4">
              <label htmlFor="eventType" className="block text-sm font-semibold text-[#2F6158]">
                Select Event Type*
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className={`w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 ${errors.eventType ? 'border-red-500' : 'focus:ring-[#2F6158]'}`}
              >
                <option value="">Select Event Type</option>
                {eventTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.eventType && <p className="text-red-500 text-sm">{errors.eventType}</p>}
            </div>

            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#2F6158]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#0B1C3E] text-white px-8 py-2 rounded hover:bg-[#351E30] transition-colors"
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>
            <triggerConfetti/>
          </form>
          {responseMessage && (
            <p className={`mt-4 text-sm ${errors ? 'text-red-500' : 'text-green-500'}`}>
              {responseMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
