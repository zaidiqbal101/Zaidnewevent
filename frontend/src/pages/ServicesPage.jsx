import React from "react";

const services = [
  {
    title: "Wedding Venue Selection",
    description:
      "Our Events Planning Team specializes in helping you find the perfect wedding venue that suits your style and budget. We assist with site visits and help negotiate the best deals for your chosen location. Alternatively, you can consult with our team to gather property details, create a shortlist, and schedule visits at your convenience.",
  },
  {
    title: "Customized Catering Services",
    description:
      "If your venue allows external catering, we can connect you with exceptional caterers for your event. We’ll work with you to design a wedding menu that meets your budget and taste preferences, ensuring a delightful dining experience that complements your special day.",
  },
  {
    title: "Theme-Based Decorations",
    description:
      "Our decoration services are crafted to perfectly match your chosen theme, down to the finest detail. From color schemes to floral arrangements, we ensure every element enhances your vision, delivering ceremonies and events that are visually stunning and flawlessly executed.",
  },
  {
    title: "Comprehensive Guest Management",
    description:
      "We take care of every detail of your guests' experience, from their arrival to departure. With our professional guest management services, you can relax and enjoy the event, knowing your guests are in good hands and being treated with exceptional care and hospitality.",
  },
  {
    title: "Exclusive Gifts and Hampers",
    description:
      "Our unique approach to personalized gifts and hampers ensures that your guests feel truly appreciated. We craft thoughtful surprises tailored to your preferences, making each event memorable with meaningful tokens of gratitude and joy.",
  },
  {
    title: "Professional Photography Services",
    description:
      "Preserve every special moment with the help of skilled photographers we connect you with. From candid shots to professional videos, we ensure your memories are beautifully captured and cherished for a lifetime.",
  },
  {
    title: "Makeup and Mehendi Artists",
    description:
      "Enhance your look with the help of top-tier makeup and mehendi artists. We arrange trials to help you find the best fit, ensuring everyone looks stunning on the big day. Let us connect you with professionals who bring your bridal vision to life.",
  },
  {
    title: "Effortless Transportation Solutions",
    description:
      "We offer seamless transportation solutions, including cabs, mini-buses, and larger buses for airport transfers and local travel. Additionally, we can arrange taxis for guests who wish to explore nearby attractions, ensuring a smooth and comfortable travel experience throughout their stay.",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-[#0B1C3E] py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-center philosopher-bold bg-gradient-to-r from-[#d4af37] via-[#f8e45f] to-[#d4af37] bg-clip-text text-transparent text-6xl font-bold mb-12 py-5">
          Wedding Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Four Service Cards */}
          {services.slice(0, 4).map((service, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col justify-between h-full"
            >
              <h2 className="philosopher-regular text-2xl font-semibold mb-4 bg-gradient-to-r from-[#d4af37] via-[#f8e45f] to-[#d4af37] bg-clip-text text-transparent">
                {service.title}
              </h2>
              <p className="text-white mb-4">{service.description}</p>
            </div>
          ))}

          {/* Image Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex items-center justify-center">
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
              className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col justify-between h-full"
            >
              <h2 className="philosopher-regular text-2xl font-semibold mb-4 bg-gradient-to-r from-[#d4af37] via-[#f8e45f] to-[#d4af37] bg-clip-text text-transparent">
                {service.title}
              </h2>
              <p className="text-white mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
