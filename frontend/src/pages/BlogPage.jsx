import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const BlogPage = () => {
  const blogs = [
    {
      title: "Hire a Birthday Planner for Birthday Decorations",
      description:
        "Planning a birthday party is no small feat, especially when it comes to decorations. Hiring a birthday planner can make the entire process easier and stress-free...",
      date: "December 5, 2024",
      image: "blogpage1.png",
      slug: "birthday-planner",
      url: "https://youtu.be/vLD0ltGhvrY?si=PS3tfZf3hXf97Awr", // Unique slug for the blog
    },
    {
      title: "Top Reasons Why You Should Hire a Professional",
      description:
        "One of the most exciting and challenging things a couple can experience is planning their wedding. Hiring a professional ensures the process goes smoothly and stress-free...",
      date: "December 5, 2024",
      image: "blogpage2.png",
      slug: "birthday-planner", // Unique slug for the blog
      url: "https://youtu.be/Ek-2VWEvQkQ?si=9QIr8CXHZvqrmqxB",
    },
    {
      title: "Simple Anniversary Decoration Ideas at Home",
      description:
        "As a professional anniversary planner, we understand that an anniversary is a special occasion. Here are some simple decoration ideas you can do at home...",
      date: "November 14, 2024",
      image: "blogpage3.png",
      slug: "birthday-planner", // Unique slug for the blog
      url: "https://youtu.be/pHl_MjgPiZo?si=B_aybdVlQMg7prRH", // Unique slug for the blog
    },
  ];

  // Function to convert YouTube URLs
  const convertToEmbedUrl = (blogs, newQueryString) => {
    return blogs.map((blog) => {
      if (blog.url.includes("youtu.be")) {
        const urlObj = new URL(blog.url);

        // Extract the video ID from the pathname
        const videoId = urlObj.pathname.substring(1);

        // Construct the new embed URL with the new query string
        return {
          ...blog,
          url: `https://www.youtube.com/embed/${videoId}?${newQueryString}`,
        };
      }
      return blog;
    });
  };

  // Replace URLs with a new query string
  const updatedBlogs = convertToEmbedUrl(blogs, "si=gvzzeiARXemrBhvI");

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl text-[#12244A] philosopher-bold mb-4 text-center">OUR BLOGS</h2>
        <h3 className="text-2xl text-[#12244A] philosopher-regular mb-8 text-center">
          Explore Our Latest Blogs
        </h3>

        {/* Search input and button */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2 w-1/3"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0"
              />
            </svg>
          </button>
        </div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {updatedBlogs.map((blog) => (
            <Link
              key={blog.title}
              to={`/blog/${blog.slug}`} // Redirect to blog article page based on the slug
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <iframe
                width="100%"
                height="200"
                src={blog.url}
                title={blog.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mb-4"
              ></iframe>
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{blog.title}</h4>
                <p className="text-gray-600">{blog.description}</p>
                <p className="text-sm text-gray-400 mt-2">{blog.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
