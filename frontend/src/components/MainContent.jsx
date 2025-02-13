import React from "react";
import Slider from "react-slick";
import { ClipboardCheck, DollarSign, Users, PieChart, Palette, Brush } from "lucide-react";
import WeddingTimeline from "./WeddingTimeline";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";

const events = [
  {
    title: "Birthday",
    image: "/assets/birthday.png",
    url: "/birthdaydelhi"
  },
  {
    title: "Anniversary",
    image: "/assets/pic1.png",
    url: "/servicesanniversary"
  },
  {
    title: "Wedding",
    image: "/assets/wedding.png",
    url: "/weddingdelhi"
  },
  {
    title: "Kitty Party",
    image: "/assets/kitty_party.png",
    url: "/kittyparty"
  },
  {
    title: "Baby Shower",
    image: "/assets/baby_shower.png",
    url: "/babyshower"
  },
  {
    title: "Retirement Party",
    image: "/assets/retirment.png",
    url: "/retirementparty"
  },
];

const EventServices = () => {
  return (
    <div className="bg-gray-100 py-10 mt-18">
      <div className="text-center mb-10 px-4">
        <h1 className="text-4xl md:text-6xl philosopher-bold text-[#12244A]">
          Event Services By Aryan Events
        </h1>
        <p className="text-lg md:text-xl text-gray-600 philosopher-regular mt-2">
          Discover a wide range of event solutions designed to make every
          occasion special.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <a href={event.url} key={index}>
            <div className="rounded-lg shadow-md overflow-hidden bg-white hover:scale-105 transform transition duration-300">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-72 object-cover"
              />
              <div className="bg-[#11244A] text-white text-center py-2">
                <h2 className="text-xl philosopher-regular bg-gradient-to-r from-[#d4af37] via-[#f8e45f] to-[#d4af37] bg-clip-text text-transparent">
                  {event.title}
                </h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const MainContent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const features = [
    {
      icon: <ClipboardCheck className="text-white w-12 h-12" strokeWidth={1} />,
      title: "Effortless Event Planning",
      description:
        "Relax and enjoy your special moments while we take care of every detail. From setup to execution, our team ensures a flawlessly coordinated event experience.",
      borderColor: "bg-[#11244A] text-white",
    },
    {
      icon: <DollarSign className="text-white w-12 h-12" strokeWidth={1} />,
      title: "Affordable Event Solutions",
      description:
        "We design and execute events that fit your budget, combining smart planning and expert negotiation to deliver exceptional value without compromising quality.",
      borderColor: "bg-[#11244A] text-white",
    },
    {
      icon: <Users className="text-white w-12 h-12" strokeWidth={1} />,
      title: "Experienced Professionals",
      description:
        "With years of expertise, our team is equipped to handle all the challenges of event management, ensuring your celebration is stress-free and memorable.",
      borderColor: "bg-[#11244A] text-white",
    },
    {
      icon: <PieChart className="text-white w-12 h-12" strokeWidth={1} />,
      title: "Transparent Budget Management",
      description:
        "We help you set a budget that aligns with your vision and maintain full transparency, ensuring you get the most value out of your investment.",
      borderColor: "bg-[#11244A] text-white",
    },
    {
      icon: <Palette className="text-white w-12 h-12" strokeWidth={1} />,
      title: "Custom-Crafted Events",
      description:
        "Every event is designed to reflect your unique style and preferences. We work closely with you to bring your vision to life, creating unforgettable experiences.",
      borderColor: "bg-[#11244A] text-white",
    },
    {
      icon: <Brush className="text-white w-12 h-12" strokeWidth={1} />,
      title: "Tailored Event Experiences",
      description:
        "Our personalized approach ensures every detail of your event resonates with your personality, leaving you and your guests with cherished memories.",
      borderColor: "bg-[#11244A] text-white",
    },
  ];

  const excellence = [
    {
      icon: <ClipboardCheck className="text-white w-12 h-12" strokeWidth={1} />,
      title: "Venue Selection",
      description:
        "We specialize in finding venues that perfectly match your style, preferences, and budget. From arranging seamless site visits to securing exclusive packages, we simplify the process to help you shortlist the ideal location.",
    },
    {
      icon: <DollarSign className="text-white w-12 h-12" strokeWidth={1} />,
      title: "Catering Services",
      description:
        "If your chosen venue allows external catering, we'll arrange a top-tier service that suits your event. Our team works with you to craft a menu that aligns with your taste and budget, ensuring a delectable dining experience.",
    },
    {
      icon: <Users className="text-white w-12 h-12" strokeWidth={1} />,
      title: "Event Decorations",
      description:
        "Our creative team transforms your vision into reality with stunning decorations tailored to your theme. With over 15 years of experience, we handle every detail to ensure a flawless and visually captivating event.",
    },
    {
      icon: <PieChart className="text-white w-12 h-12" strokeWidth={1} />,
      title: "Guest Coordination",
      description:
        "We make guest management effortless, from maintaining a clear budget to aligning with your event's theme. Our expertise helps recommend innovative ideas and ensures seamless coordination throughout your celebration.",
    },
    {
      icon: <Palette className="text-white w-12 h-12" strokeWidth={1} />,
      title: "Gifting & Hampers",
      description:
        "Delight your guests with thoughtfully curated gifts and hampers. We work closely with you to create unique, personalized keepsakes that leave a lasting impression on everyone attending your event.",
    },
    {
      icon: <Brush className="text-white w-12 h-12" strokeWidth={1} />,
      title: "Transportation Services",
      description:
        "From guest pickups to event logistics, we provide reliable and efficient transportation services. Our focus is on ensuring a smooth journey for you and your attendees, making your event stress-free and enjoyable.",
    },
  ];

  return (
    <main className="flex-1 text-white overflow-hidden">
      <section className="w-full">
        <Slider className="w-full" {...settings}>
          <div>
            <img
              src="/assets/pic1.png"
              alt="Destination Wedding"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/pic2.png"
              alt="Wedding Destination 2"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/pic3.png"
              alt="Wedding Destination 3"
              className="w-full h-auto object-cover"
            />
          </div>
        </Slider>
      </section>

      <section className="bg-white text-gray-800 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 max-w-7xl">
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-5xl philosopher-bold font-bold text-[#11244A] mb-4">
              Top Wedding and Event Management Company in Gaya
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold philosopher-regular mb-6">
              Aryan Events: Best Event Planners in Gaya, India
            </h3>
            <p className="mb-4 leading-relaxed">
              Every celebration deserves to be extraordinary and unforgettable.
              At Aryan Events, we specialize in making weddings, birthday
              parties, anniversaries, and corporate events truly remarkable with
              our creativity and professionalism. With over years of experience,
              we are recognized as the leading event planners in Gaya,
              delivering outstanding event management services in Gaya and
              across India.
            </p>
            <p className="mb-4 leading-relaxed">
              We take pride in going above and beyond to make your celebrations
              truly exceptional. By partnering with trusted vendors and
              leveraging the expertise of our skilled event team, we deliver
              outstanding planning services tailored to your unique vision and
              budget. Whether you envision an intimate gathering in a
              picturesque local setting or a lavish celebration in an exquisite
              international location, we ensure your event is unforgettable and
              cherished by your guests.
            </p>
            <p className="mb-4 leading-relaxed">
              As a leading event planner in Gaya and a trusted name in event
              management, we prioritize excellence and creativity in every
              detail. Our team is committed to turning your dreams into reality,
              understanding that every element matters. When you choose us as
              your event planner, you can rest assured that every aspect of your
              special occasion will be handled with precision and care. While we
              work behind the scenes to create lasting memories, you can focus
              on enjoying your celebration to the fullest!
            </p>
            <br />
            <Link
              to="/contactPage"
              className="bg-[#11244A] text-white px-4 py-2 rounded-lg text-xl font-semibold hover:bg-[#0B1C3E] transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:w-1/3 mt-8 md:mt-0 flex flex-col space-y-4">
            <img
              src="/assets/pic4.png"
              alt="Event Planner"
              className="rounded-lg shadow-lg h-96 w-auto mx-auto object-cover transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl md:text-6xl philosopher-bold text-[#12244A] mb-6">
            "Why Trust Aryan Events for Your Special Occasions?"
          </h2>
          <p className="text-[#12244A] text-lg md:text-xl philosopher-regular mb-12">
            As premier social event organizers in Gaya, Aryan Events is dedicated to
            creating unforgettable experiences tailored to your unique vision and vibrant
            personality. Let us transform your celebrations into extraordinary moments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md ${feature.borderColor} text-center`}
              >
                <div className="flex justify-center items-center mb-4">
                  <div className="text-4xl">{feature.icon}</div>
                </div>
                <h3 className="text-2xl philosopher-regular mb-4 bg-gradient-to-r from-[#d4af37] via-[#f8e45f] to-[#d4af37] bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EventServices />
      <WeddingTimeline />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl md:text-6xl philosopher-bold text-[#12244A] mb-6">
            Event Excellence Redefined
          </h2>
          <p className="text-gray-600 text-lg md:text-xl philosopher-regular mb-12">
            From intimate gatherings to grand celebrations, we ensure every
            detail is perfect. Experience seamless planning and unforgettable
            moments with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {excellence.map((excellent, index) => (
              <div
                key={index}
                className="bg-[#11244A] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-center items-center mb-4">
                  <div className="text-4xl">{excellent.icon}</div>
                </div>
                <h3 className="text-2xl philosopher-regular mb-4 bg-gradient-to-r from-[#d4af37] via-[#f8e45f] to-[#d4af37] bg-clip-text text-transparent">
                  {excellent.title}
                </h3>
                <p className="text-sm leading-relaxed">{excellent.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/aboutus"
              className="bg-[#11244A] text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-[#0B1C3E] hover:shadow-md transition duration-300"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;