import React from "react";

const features = [
  {
    // icon: "📋",
    title: "One stop solution",
    description:
      "We handle every aspect of your event, from coordinating guest transportation to crafting personalized gifts and hampers. No detail is too small for our attention. Your needs, no matter how minute, are our priority, ensuring a seamless and memorable experience for every aspect of your event.",
  },
  {
    // icon: "💰",
    title: "Intimate to Lavish Celebrations",
    description:
      "Planners Events is here for you, whether you're organizing an intimate gathering or a lavish wedding affair. Simply communicate your requirements, and we'll take care of every detail. Our commitment is to seamlessly manage and execute all aspects, ensuring your event, regardless of size, is a resounding success.",
  },
  {
    // icon: "👥",
    title: "Cost-effective for all",
    description:
      "We provide tailor-made plans to accommodate individual spending preferences. Irrespective of the budget, our services are crafted to surpass your expectations, ensuring a personalized experience that meets your financial considerations. Your satisfaction is our priority, and we aim to deliver exceptional service regardless of the financial framework you choose.",
  },
  {
    // icon: "📊",
    title: "Unmatched Excellence Every Time",
    description:
      "Consistently exceeding expectations, we deliver exceptional quality that ensures 100% customer satisfaction, creating memorable experiences every time. Our commitment is to consistently surprise with superior quality, going above and beyond to meet and exceed expectations, ensuring each experience is unforgettable and leaves customers completely satisfied.",
  },
];

const AboutUsBox = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-teal-700 mb-6">
          What sets us apart from others
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Your ultimate solution for all event needs, offering comprehensive
          services for a seamless and memorable experience.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-teal-700 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              {/* Description */}
              <p className="text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsBox;
