import React, { useState } from "react";

const Weddingcontact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    eventType: "",
    date: "",
    message: "",
    isRobot: false,
  });

  const eventTypes = [
    "Birthday",
    "Anniversary",
    "Wedding",
    "Kitty Party",
    "Baby Shower",
    "Retirement Party",
    "Couple Proposals",
    "House Party",
    "Namakarana Ceremony",
    "Theme Party",
    "Reunions",
    "Alumni Meet",
    "Other",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-rose-900 flex">
      {/* Left Side Content */}
      <div className="w-1/2 p-12 text-white flex justify-center items-center">
        {/* Contact Info */}
        <div className="text-left">
          <h1 className="text-4xl text-yellow-400 font-semibold mb-6">
            Let's Plan Your Dream Wedding
          </h1>

          <p className="mb-8 text-lg">
            If you have any query or would like more information on
            <br />
            our works, kindly fill the form and we’ll aim
            <br />
            to get back to you within 24 hours.
          </p>

          <div className="space-y-4 text-yellow-400">
            <div>
              +91 96503 98807
              <br />
              +91 9999988014
            </div>
            <div>info@plannersevents.in</div>
            <div>
              125, Second Floor
              <br />
              Shahpur Jat, Siri Fort,
              <br />
              New Delhi - 110049
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 p-12">
        <div className="bg-white rounded-lg p-8 max-w-lg">
          <h2 className="text-3xl text-black font-semibold mb-6">
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
              <label
                htmlFor="eventType"
                className="block text-sm font-semibold text-[#2F6158]"
              >
                Select Event Type*
              </label>
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

            <div className="flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                name="isRobot"
                checked={formData.isRobot}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-[#2F6158] border-gray-300 rounded focus:ring-[#2F6158]"
              />
              <label htmlFor="isRobot" className="text-sm text-[#2F6158]">
                I'm not a robot
              </label>
            </div>

            <div
              className="g-recaptcha"
              data-sitekey="your-recaptcha-site-key"
            ></div>

            <button
              type="submit"
              className="bg-rose-900 text-white px-8 py-2 rounded hover:bg-[#3E7268] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Weddingcontact;
