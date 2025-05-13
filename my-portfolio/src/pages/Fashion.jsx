import React from "react";
import Fashion1 from "../assets/fashion1.jpeg";
import Fashion2 from "../assets/fashion2.jpg";
import Fashion3 from "../assets/fashion3.jpeg";

const Fashion = () => {
  const templates = [
    { img: Fashion1, title: "Fashion Portfolio" },
    { img: Fashion2, title: "Lookbook Showcase" },
    { img: Fashion3, title: "Fashion Blog" },
  ];

  return (
    <section className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Fashion Templates</h1>
        <p className="text-gray-600 text-lg mb-12">
          Explore stunning fashion templates to showcase your brand, designs, or blog in style.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="bg-gray-50 rounded shadow hover:shadow-lg transition">
              <img src={template.img} alt={template.title} className="w-full h-64 object-cover rounded-t" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                <button className="mt-2 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fashion;
