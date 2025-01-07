// Gallery.js
import React, { useState } from 'react';

const gallery = [
  {
    image: "assets/gallery1.png",
  },
  {
    image: "assets/gallery2.png",
  },
  {
    image: "assets/gallery3.png",
  },
];

const Gallery = () => {
  // State to manage the modal visibility and the selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle opening the modal
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-100 py-10">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl text-rose-900 font-bold text-gray-800">Gallery</h1>
        <p className="text-lg text-gray-600 mt-2">
          Dedicated to creating lasting memories, we prioritize your special day’s significance.
          Trust us to exceed expectations, cherishing every moment with you.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden bg-white hover:scale-105 transform transition duration-300"
          >
            {/* Event Image - Click to open the modal */}
            <img
              src={item.image}
              alt={"Gallery Image " + (index + 1)}  // Added fallback for alt text
              className="w-full h-72 object-cover cursor-pointer"

              onClick={() => openModal(item.image)}  // Open the modal on click
            />
          </div>
        ))}
      </div>

      {/* Message Section */}
      <div className="text-center mt-10 text-lg">
        <p className="text-rose-900 font-bold">
          In every captured moment, we find stories waiting to be discovered. We hope our gallery has ignited your imagination and left a lasting impression.
        </p>
      </div>

      {/* Modal for displaying the full-size image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 text-white text-2xl font-bold p-2"
              onClick={closeModal}
            >
              &times; {/* Close button */}
            </button>
            <img
              src={selectedImage}
              alt="Full-size Gallery"
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
