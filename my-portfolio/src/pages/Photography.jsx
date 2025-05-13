import React from "react";
import Photography1 from "../assets/photo1.jpg";
import Photography2 from "../assets/photo2.png";
import Photography3 from "../assets/photo3.jpeg";

const photographyTemplates = [
  {
    img: Photography1,
    title: "Minimalist Portfolio",
    description: "A clean layout perfect for showcasing professional photography."
  },
  {
    img: Photography2,
    title: "Gallery Showcase",
    description: "Display your photo collections in a visually stunning gallery."
  },
  {
    img: Photography3,
    title: "Dark Mood Theme",
    description: "Great for high-contrast and moody photography portfolios."
  },
];

const Photography = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Photography Templates</h1>
        <p className="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Build a stunning online portfolio for your photography using our customizable templates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photographyTemplates.map((template, index) => (
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

export default Photography;
