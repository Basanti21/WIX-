import React from "react";
import Art1 from "../assets/art1.jpeg";
import Art2 from "../assets/art2.jpg";
import Art3 from "../assets/art3.jpeg";

const artTemplates = [
  {
    img: Art1,
    title: "Artist Portfolio",
    description: "Display your artwork, style, and biography in an elegant portfolio layout."
  },
  {
    img: Art2,
    title: "Gallery Showcase",
    description: "Perfect for galleries to exhibit collections, artist profiles, and events."
  },
  {
    img: Art3,
    title: "Creative Studio",
    description: "Highlight your creative agency's projects and client testimonials."
  },
];

const Art = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Art Templates</h1>
        <p className="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Showcase your creativity and artistic journey with professionally crafted templates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artTemplates.map((template, index) => (
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

export default Art;
