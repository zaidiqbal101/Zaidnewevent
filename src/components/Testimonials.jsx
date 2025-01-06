// src/components/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Rishi Malhotra",
    image: "path/to/image1.jpg", // Replace with actual image URL or import
    feedback:
      "Aryan Events ensured the success of our event from start to finish. Their professional and creative approach made the planning process effortless. Highly recommend their services for a seamless and memorable event!",
  },
  {
    name: "Vivek Singh Rajput",
    image: "path/to/image2.jpg", // Replace with actual image URL or import
    feedback:
      "Choosing Aryan Events for our special day was brilliant! Impeccable attention, seamless coordination, and a team that perfectly understood our vision. Trust Aryan Events for unforgettable memories!",
  },
  {
    name: "Shreya Gupta",
    image: "path/to/image3.jpg", // Replace with actual image URL or import
    feedback:
      "Wow! Our event was a huge success, all thanks to Aryan Events. From start to finish, they took care of every detail. Highly recommend their services!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-green-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Devoted Clients, Delighted Hearts</h2>
        <p className="text-lg mb-12">
          Putting your happiness at the center of every celebration. We deliver excellence that touches hearts and strengthens bonds.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-black rounded-lg p-6 shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
              <p className="text-sm mt-2">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full ${
                i === 0 ? "bg-yellow-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
