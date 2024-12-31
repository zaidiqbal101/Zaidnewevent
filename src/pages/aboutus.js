import React from "react";
import ServicesPage from "./ServicesPage";
import AboutUsBox from "./aboutusbox";
const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 flex items-center">
        {/* Left side: Image */}
        <div className="w-1/2 pr-8">
          <img
            src="/assets/aboutus.png" // Make sure the image path is correct
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg" // Adjust styling as needed
          />
        </div>

        {/* Right side: Content */}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-green-900 mb-6">About Planners Events</h1>
          <p className="text-xl text-gray-700 mb-8">Architects of Everlasting Memories!</p>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-6">
              Welcome to Planners Events, your dedicated partner in crafting unforgettable moments. In a world bustling with time constraints, we specialize in turning your visions into reality. Our seasoned event planners meticulously handle every detail, from concept to execution, offering a seamless experience.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Whether it's a wedding or a social gathering, we tailor our services to suit your unique preferences and needs. With a commitment to excellence, creativity, and professionalism, Planners Events transforms your ideas into spectacular events.
            </p>
            <p className="text-lg text-gray-600">
              Let us handle the intricacies, allowing you to savor every moment of your special occasion. Your dream event starts here with Planners Events.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16">
      <ServicesPage/>
      </div>
      <AboutUsBox/>
    </section>

  );
};

export default About;
