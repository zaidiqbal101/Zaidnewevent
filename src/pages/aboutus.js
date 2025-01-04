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
          <h1 className="text-4xl font-bold text-[#351E30] mb-6">About Planners Events</h1>
          <p className="text-xl text-gray-700 mb-8">Creators of Timeless Celebrations!</p>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-6">
            Welcome to [......] Events, your trusted partner in designing extraordinary moments. 
            In today’s fast-paced world, we bring your dreams to life with precision and care. 
            Our experienced team of event planners manages every aspect, from concept to execution, ensuring a hassle-free journey.
            </p>
            <p className="text-lg text-gray-600 mb-6">
            Whether it’s a grand wedding or an intimate gathering, we tailor 
            our services to reflect your style and meet your needs. With a
             passion for excellence, creativity, and attention to detail, [....] 
             Events turns your vision into a breathtaking reality.
            </p>
            <p className="text-lg text-gray-600">
            Let us take care of the complexities while you relish every cherished moment of your celebration. Your perfect event begins with [....] Events.
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
