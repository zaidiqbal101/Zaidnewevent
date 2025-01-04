import React from "react";
import ServicesPage from "./ServicesPage";
import AboutUsBox from "./aboutusbox";
const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap items-center">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-8">
          <img
            src="/assets/aboutus.png" // Make sure the image path is correct
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#351E30] mb-4 lg:mb-6">
            About Planners Events
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 lg:mb-8">
            Creators of Timeless Celebrations!
          </p>
          <div className="max-w-full lg:max-w-3xl">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 lg:mb-6">
              Welcome to Aryan Events, your trusted partner in designing
              extraordinary moments. In today’s fast-paced world, we bring your
              dreams to life with precision and care. Our experienced team of
              event planners manages every aspect, from concept to execution,
              ensuring a hassle-free journey.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 lg:mb-6">
              Whether it’s a grand wedding or an intimate gathering, we tailor
              our services to reflect your style and meet your needs. With a
              passion for excellence, creativity, and attention to detail, Aryan
              Events turns your vision into a breathtaking reality.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Let us take care of the complexities while you relish every
              cherished moment of your celebration. Your perfect event begins
              with Aryan Events.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <ServicesPage />
      </div>
      <AboutUsBox />
    </section>
  );
};

export default About;
