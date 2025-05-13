import React from "react";
import Biz1 from "../assets/biz1.jpeg";
import Biz2 from "../assets/biz2.jpg";
import Biz3 from "../assets/biz3.jpeg";

const businessTemplates = [
  {
    img: Biz1,
    title: "Corporate Site",
    description: "Clean and professional layout for small and large businesses alike."
  },
  {
    img: Biz2,
    title: "Startup Launch",
    description: "Highlight your mission, services, and team with a dynamic one-page design."
  },
  {
    img: Biz3,
    title: "Consultancy Portfolio",
    description: "Ideal for consultants and firms to display expertise and success stories."
  },
];

const Business = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Business Templates</h1>
        <p className="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Build credibility and grow your business with high-impact website templates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessTemplates.map((template, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow hover:shadow-md transition overflow-hidden">
              <img src={template.img} alt={template.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                <div className="flex gap-2">
                  <button className="flex-1 text-blue-600 border border-blue-600 px-3 py-1 text-sm rounded hover:bg-blue-50">
                    Preview
                  </button>
                  <button className="flex-1 bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700">
                    Use Template
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
