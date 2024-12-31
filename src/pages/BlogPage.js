import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const BlogPage = () => {
  const blogs = [
    {
      title: "Hire a Birthday Planner for Birthday Decorations",
      description: "Planning a birthday party is no small feat, especially when it comes to decorations. Hiring a birthday planner can make the entire process easier and stress-free...",
      date: "December 5, 2024",
      image: "blogpage1.png", 
      slug: "birthday-planner",  // Unique slug for the blog
    },
    {
      title: "Top Reasons Why You Should Hire a Professional",
      description: "One of the most exciting and challenging things a couple can experience is planning their wedding. Hiring a professional ensures the process goes smoothly and stress-free...",
      date: "December 5, 2024",
      image: "blogpage2.png", 
      slug: "birthday-planner",  // Unique slug for the blog
    },
    {
      title: "Simple Anniversary Decoration Ideas at Home",
      description: "As a professional anniversary planner, we understand that an anniversary is a special occasion. Here are some simple decoration ideas you can do at home...",
      date: "November 14, 2024",
      image: "blogpage3.png", 
      slug: "birthday-planner",  // Unique slug for the blog
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">OUR BLOGS</h2>
        <h3 className="text-xl font-semibold mb-8 text-center">Explore Our Latest Blogs</h3>

        {/* Search input and button */}
        <div className="flex justify-center mb-4">
          <input type="text" placeholder="Search..." className="border border-gray-300 rounded-md px-4 py-2 w-1/3" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0" />
            </svg>
          </button>
        </div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog.title} 
              to={`/blog/${blog.slug}`}  // Redirect to blog article page based on the slug
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/assets/${blog.image}`} 
                alt={blog.title} 
                className="w-full h-48 object-cover" 
              />
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
