import React from "react";
import Slider from "react-slick"; // Import react-slick
import WeddingTimeline from './WeddingTimeline'; 
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
const events = [
  {
    title: "Birthday",
    image: "assets/birthdayf.png",
  },
  {
    title: "Anniversary",
    image: "path_to_anniversary_image.jpg",
  },
  {
    title: "Wedding",
    image: "assets/wefhdding.png",
  },
  {
    title: "Kitty Party",
    image: "path_to_kitty_party_image.jpg",
  },
  {
    title: "Baby Shower",
    image: "path_to_baby_shower_image.jpg",
  },
  {
    title: "Retirement Party",
    image: "path_to_retirement_party_image.jpg",
  },
];
 
const EventServices = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Event Services By Planners Events
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Discover a wide range of event solutions designed to make every occasion special.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden bg-white hover:scale-105 transform transition duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-72 object-cover"
            />
            <div className="bg-green-800 text-white text-center py-2">
              <h2 className="text-lg font-medium">{event.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
const MainContent = () => {
  // Settings for the carousel
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop through slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval in milliseconds
  };
 
  const features = [
    {
      icon: "📋", // Replace with an icon or use libraries like Heroicons
      title: "Stress-Free Event Planning and Execution",
      description:
        "From setup to logistics, we have got everything covered. As experienced event managers, we ensure seamless event delivery and coordination, leaving you to focus on enjoying your special day, while we take care of all the hustle and bustle.",
    },
    {  
      icon: "💰",
      title: "Budget-Friendly Event Planning",
      description:
        "Our event management company, Planners Events, is dedicated to working within your budget. We'll handle every detail, from initial planning to post-event. Our knowledge and negotiation skills guarantee the best rates and efficient management of costs, ensuring a stress-free experience.",
    },
    {
      icon: "👥",
      title: "Experienced Team",
      description:
        "At Planners Events, our event management team handles any unexpected twists. No matter how complex your event is, we adapt to your needs. Our 15+ years of expertise ensure a smooth and enjoyable experience for your event.",
    },
    {
      icon: "📊",
      title: "Budget Setting and Management",
      description:
        "We keep you through the budget-setting process, ensuring it aligns with your vision and everything is transparent. Our knowledge of event trends allows us to recommend creative ideas that fit your theme and budget.",
    },
    {
      icon: "🎨",
      title: "Personalized Experience",
      description:
        "We are committed to creating unique and tailored events for each client. Our event managers keep your vision and preferences all through the event management process to ensure that your event turns out to be an utter delight for you.",
    },
    {
      icon: "🎨",
      title: "Personalized Experience",
      description:
        "We are committed to creating unique and tailored events for each client. Our event managers keep your vision and preferences all through the event management process to ensure that your event turns out to be an utter delight for you.",
    },
  ];
 
  const excellence = [
    {
      icon: "📋",
      title: "Venue",
      description:
        "We're dedicated to matching your preferences and budget with the perfect venue.We assist in perfect visits,secure packages,and provide details for easy shortlisting.",
    },
    {
      icon: "💰",
      title: "Catering",
      description:
        "If your selected venue permits external caterers, we can organize a top-notch catering service for you. We also aid in crafting a menu tailored to your budget and preferences.",
    },
    {
      icon: "👥",
      title: "Decorations",
      description:
        "At Planners Events, our event management team handles any unexpected twists. No matter how complex your event is, we adapt to your needs. Our 15+ years of expertise ensure a smooth and enjoyable experience for your event.",
    },
    {
      icon: "📊",
      title: "Guest Management",
      description:
        "We keep you through the budget-setting process, ensuring it aligns with your vision and everything is transparent. Our knowledge of event trends allows us to recommend creative ideas that fit your theme and budget.",
    },
    {
      icon: "🎨",
      title: "Gifts & Hamper",
      description:
        "We are committed to creating unique and tailored events for each client. Our event managers keep your vision and preferences all through the event management process to ensure that your event turns out to be an utter delight for you.",
    },
    {
      icon: "🎨",
      title: "Transportation",
      description:
        "We are committed to creating unique and tailored events for each client. Our event managers keep your vision and preferences all through the event management process to ensure that your event turns out to be an utter delight for you.",
    },
  
  ];
 
  return (
    <main className="flex-1 text-white  ">
      <section>
        <div className="   text-center">
          {/* Carousel component */}
          <Slider  className = "max-h-full h-full w-[100%]" {...settings}>
            <div>
              <img
                src="/assets/pic1.png" // Correct path to the image
                alt="Destination Wedding"
                className="w-full h-auto mb-8 rounded shadow"
              />
            </div>
            <div>
              <img
                src="/assets/pic2.png" // Correct path to pic2
                alt="Wedding Destination 2"
                className="w-full h-auto mb-8 rounded shadow"
              />
            </div>
            <div>
              <img
                src="/assets/pic3.png" // Correct path to pic3
                alt="Wedding Destination 3"
                className="w-[100%] h-auto mb-8 rounded shadow"
              />
            </div>
          </Slider>
        </div>
      </section>
   
      {/* Design Content Section */}
      <section className="bg-white text-gray-800 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-teal-700 mb-4">
              Best Wedding and Event Management Company In Delhi NCR
            </h2>
            <h3 className="text-xl font-semibold mb-6">
              Planners Events: Best Event Planners in Delhi NCR, India
            </h3>
            <p className="mb-4 leading-relaxed">
              We believe every celebration deserves to be unique and memorable. Whether it’s a
              wedding, birthday party, anniversary, or corporate event at Planners Events, we bring
              creativity and professionalism to every project. As the best event planners in Delhi
              with 15+ years of experience, we excel in delivering exceptional event management
              services in Delhi NCR & across India.
            </p>
            <p className="mb-4 leading-relaxed">
              Our event management services are customized to fit your particular preferences and
              budgetary limitations, ensuring a stress-free and seamless event. We can assist you at
              every stage, whether you’re looking for an event management company in Delhi. Our
              committed staff of event planners take care of every detail from the very beginning to
              the very end, so you can concentrate on what really counts—enjoying the occasion with
              your loved ones.
            </p>
            <button className="bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-800">
              Let’s Connect
            </button>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <img
              src="/assets/pic4.png"
              alt="Event Planner"
              className="rounded-lg shadow-lg h-96 object-cover"
            />
          </div>
        </div>
      </section>
 
      {/* Design Content Section 2 */}
      <section className="bg-white text-gray-800 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-teal-700 mb-4">
              Experienced Event Management Team To Add A
              Unique Touch That Reflects Your Style
            </h2>
 
            <p className="mb-4 leading-relaxed">
              At our core, we truly enjoy going the extra mile to make your celebrations and
              gatherings unique. We collaborate with trusted vendors and rely on our skilled event
              team to provide outstanding planning services that cater to your particular vision and
              budget limitations because we recognize how significant these occasions are. We can
              help you create memorable arrangements that your guests will love, whether your vision
              is for a small, intimate party in a beautiful local setting or a grand celebration in a
              stunning international location.
            </p>
            <p className="mb-4 leading-relaxed">
              As one of Delhi’s top event planners and an established event management company, we
              put a high value on excellence and originality in all that we do. Our staff is
              dedicated to realizing your dreams because we understand that every little detail
              matters. You can relax knowing that we will carefully and meticulously manage every
              element of your special occasion when you select us as your local event planner. While
              we work behind the scenes to create lifelong memories, we want you to enjoy your
              celebration to the fullest!
            </p>
            <button className="bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-800">
              Let’s Connect
            </button>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <img
              src="/assets/pic5.png"
              alt="Event Planner"
              className="rounded-lg shadow-lg h-96 object-cover"
            />
          </div>
        </div>
      </section>
 
      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-teal-700 mb-6">
            Why Choose Planners Events for Your Celebration?
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Being the Best Social Events Organizers in Delhi, Planners Event Aims
            To Craft Extraordinary Social Events Tailored To Your Vibrant Spirit.
          </p>
 
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-teal-700 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                {/*Icon*/}
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
        {/* Event Services Section */}
        <EventServices />
        <WeddingTimeline />
        {/*Event Excelence Record starts here */ }
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-teal-700 mb-6">
          Event Excellence Redefined
          </h2>
          <p className="text-gray-600 text-lg mb-12">
          From intimate gatherings to grand celebrations, we ensure every detail is perfect. Experience seamless planning and unforgettable moments with us.
          </p>
 
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {excellence.map((excellent, index) => (
              <div
                key={index}
                className="bg-teal-700 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                {/*Icon*/}
                <div className="text-4xl mb-4">{excellent.icon}</div>
                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">{excellent.title}</h3>
                {/* Description */}
                <p className="text-sm leading-relaxed">{excellent.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/aboutus" className="bg-teal-700 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-teal-800 transition duration-300">
           Know More
            </Link>
          </div>
        </div>
      </section>
      {/*Event Excelence Record ends here */ }
      {/* <Testimonials/> */}
 
    </main>
  );
};
 
export default MainContent;