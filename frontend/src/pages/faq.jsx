import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    "How much does a wedding planner cost in Gaya?",
    "What are the services offered by a wedding planner?",
    "What things do you need to discuss with a wedding planner before hiring them?",
    "When is the correct time to hire a wedding planner?",
  ];

  const answers = [
    "Make your special day unforgettable with expert wedding planning services in Gaya. Whether you need assistance with venue selection, decor, catering, or entertainment, professional wedding planners can bring your dream wedding to life. Contact us today to connect with the best wedding planners and customize your wedding experience!",
    "Venue Selection: Assisting in choosing the perfect location for your wedding and reception. Theme and Decor Planning: Designing and executing a unique theme with stunning .Vendor :  with caterers, photographers, florists, and other vendors.Budget Management: Helping you stay within your budget without compromising on quality.Guest Management: Managing RSVPs, , and transportation for guests. Entertainment Arrangements: Organizing live music, DJs, or cultural performances. Catering Services: Ensuring a menu that delights all your guests.Wedding Day Coordination: Overseeing the schedule and troubleshooting any issues on the big day. Let us help you connect with the best wedding planners in Gaya to make your dream wedding a reality!",
    "Experience and Portfolio: Ask about their previous projects and expertise in planning weddings similar to yours. Services Offered: Clarify what is included in their package—venue , decor, catering, entertainment, and more. Budget: Ensure their services align with your budget and discuss any hidden costs. Availability: Confirm their availability on your wedding date and their ability to dedicate time to your event. Vendors: Ask if they have a network of trusted vendors or if you can bring your own. Timeline: Discuss the planning schedule and key milestones leading up to the wedding. Team Size: Find out how many people will be involved in managing the event on the day. Customization Options: Check if they can cater to specific cultural, religious, or personal preferences. Contingency Plans: Discuss how they handle unexpected situations like bad weather or vendor cancellations.References: Request testimonials or contact details of past clients to evaluate their work. Taking the time to cover these points ensures you and your wedding planner are on the same page, making your big day stress-free and unforgettable.",
    "12 to 18 Months Before the Wedding: Ideal for larger weddings or destination events requiring detailed planning and bookings. 6 to 12 Months Before the Wedding: Perfect for mid-sized weddings where you need help with venue selection, vendor management, and theme creation. 3 to 6 Months Before the Wedding: Suitable for couples who have already started planning but need professional help to finalize details and coordinate logistics. Last-Minute or Emergency Planning: If you're on a tight schedule, many wedding planners offer specialized packages for short-notice weddings.",
  ];

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl text-[#000] font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden text-black">
            <button
              className="flex items-center justify-between w-full p-4 bg-white hover:bg-gray-100"
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            >
              <span>{question}</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50">
                <p>{getRandomAnswer()}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;