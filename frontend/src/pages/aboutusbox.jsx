import React from "react";

const features = [
  {
    // icon: "📋",
    title: "All-in-One Event Solutions",
    description:
      "We take care of every detail of your event, from organizing guest transportation to curating custom gifts and hampers. No task is too small or too big for us. Our priority is to meet all your needs with precision, ensuring a hassle-free and unforgettable event experience.",
  },
  {
    // icon: "💰",
    title: "Celebrations for Every Occasion",
    description:
      "Whether you’re hosting an intimate gathering or a grand wedding celebration, we’re here to bring your vision to life. Share your ideas with us, and we’ll handle the rest, ensuring that every detail is meticulously planned and executed for a flawless event, no matter the scale.",
  },
  {
    // icon: "👥",
    title: "Affordable and Customizable Services",
    description:
      "We offer flexible plans tailored to suit your unique budget. Regardless of your spending preferences, we strive to provide personalized and high-quality services that exceed your expectations. Our focus is on delivering value and satisfaction, making your event truly special.",
  },
  {
    // icon: "📊",
    title: "Exceptional Quality Guaranteed",
    description:
      "We pride ourselves on delivering excellence with every event we plan. Our commitment to superior service ensures unforgettable moments and 100% customer satisfaction. With attention to detail and quality, we go above and beyond to create memorable experiences every time.",
  },
];

const AboutUsBox = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#290F23] mb-6">
        What Makes Us Unique
        </h2>
        <p className="text-gray-600 text-lg mb-12">
        Your one-stop destination for all your event needs, providing holistic solutions to ensure a smooth and unforgettable experience.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#351e2f]  text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
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
