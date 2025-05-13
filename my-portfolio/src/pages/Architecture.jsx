import React from "react";
import Arch1 from "../assets/arch1.jpg";
import Arch2 from "../assets/arch2.jpeg";
import Arch3 from "../assets/arch3.jpeg";

const architectureTemplates = [
  {
    img: Arch1,
    title: "Modern Studio",
    description: "Showcase your architectural projects with a minimalist and modern design."
  },
  {
    img: Arch2,
    title: "Project Portfolio",
    description: "Display blueprints, 3D renders, and real-world builds in an elegant format."
  },
  {
    img: Arch3,
    title: "Architect Bio Site",
    description: "Perfect for solo architects to highlight expertise, credentials, and work."
  },
];

const Architecture = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Architecture Templates</h1>
        <p className="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Create a professional architecture portfolio with our expertly designed templates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {architectureTemplates.map((template, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
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

export default Architecture;
