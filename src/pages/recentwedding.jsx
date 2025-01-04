import React from 'react';
// import RecentWeddings from "./recentwedding";
import Faq from "./faq";
const events = [
  {
    image: "assets/birthday.png",
  },
  {
    image: "assets/birthday.png",
  },
  {
    image: "assets/birthday.png",
  },
  {
    image: "assets/birthday.png",
  },
  {
    image: "assets/birthday.png",
  },
  {
    image: "assets/birthday.png",
  },
  {
    image: "assets/birthday.png",
  },
  {
    image: "assets/birthday.png",
  },
];

const RecentWeddings = () => {
  return (
    <div className="bg-white py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl text-rose-900 font-bold text-gray-800">
          Our Recent Celebrations 
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Discover a variety of events we've planned recently.
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden bg-white hover:scale-105 transform transition duration-300"
            >
              <img
                src={event.image}
                alt={`Event ${index + 1}`}
                className="w-full h-96 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default RecentWeddings;
