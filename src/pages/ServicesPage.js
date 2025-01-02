import React from "react";

const services = [
    {
      title: "Venue",
      description:
        "The Events Planning Team is dedicated to helping you discover a wedding venue that aligns with both your preferences and budget. We guide you through visits to selected properties and support you in securing the best package for your chosen venue. If you prefer, you can inquire about property details from our team members and create a shortlist before scheduling visits.",
    },
    {
      title: "Catering",
      description:
        "If your chosen venue permits external catering, we can arrange an excellent caterer for your event. Our services extend to helping you finalize a wedding menu that aligns with both your budget and culinary preferences. Trust us to ensure a delightful dining experience that complements the uniqueness of your special day.",
    },
    {
      title: "Decorations",
      description:
        "Our meticulous event decoration services ensure a flawless alignment with your chosen theme. From color-coordinated decor to carefully selected flowers, every detail reflects and enhances your vision. We take pride in planning and executing ceremonies and events with precision, creating a seamless and visually captivating experience for all.",
    },
    {
      title: "Guest Management",
      description:
        "From their arrival to departure, we meticulously handle every aspect of your guests' experience throughout the entire event. Our dedicated guest management services ensure that you can relax and enjoy the celebration, confident that your guests are well taken care of with seamless attention to detail and hospitality.",
    },
    {
      title: "Gifts & Hamper",
      description:
        "Distinguishing ourselves through personalized gift and hamper offerings, we ease your worries about guest appreciation. Tailored to your preferences, our unique selling point lies in crafting thoughtful and delightful surprises for every event. Elevate the guest experience with our personalized touch, ensuring memorable moments of gratitude and joy.",
    },
    {
      title: "Photography",
      description:
        "Capture and immortalize life's pivotal moments with our expertise in connecting you with skilled photographers. We assist in finding an expert who can beautifully capture every event, ensuring your cherished memories are preserved through fabulous photos and videos that last a lifetime. Trust us to enhance your special occasions.",
    },
    {
      title: "Professional Artists",
      description:
        "Elevate your look with our connections to top-notch makeup and mehendi vendors. We assist in finding the best by arranging trials, assuring everyone in the event will radiate beauty on the big day. Trust us to connect you with vendors who create the perfect bridal aesthetic.",
    },
    {
      title: "Transportation",
      description:
        "We provide comprehensive transportation services with cabs, mini buses, and buses available for both airport transfers and local travel. Should your guests wish to explore nearby tourist destinations, we facilitate taxis for their convenience. Our aim is to ensure seamless and comfortable travel experiences throughout their stay in the city.",
    },
  ];
  
const ServicesPage = () => {
  return (
    <div className="bg-rose-900 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-white text-4xl font-bold mb-12">
          Wedding Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Four Service Cards */}
          {services.slice(0, 4).map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full"
            >
              <h2 className="text-rose-700 text-2xl font-semibold mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}

          {/* Image Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="/assets/wedding.png"
              alt="Wedding Event"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Last Four Service Cards */}
          {services.slice(4).map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full"
            >
              <h2 className="text-rose-700 text-2xl font-semibold mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
