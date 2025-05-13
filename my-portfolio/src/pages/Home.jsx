import React from "react";
import { Link } from "react-router-dom";
import Template1 from "../assets/template1.png";
import Template2 from "../assets/template2.jpeg";
import Template3 from "../assets/template3.png";
import Template4 from "../assets/template4.png";
import Template5 from "../assets/template5.jpg";
import Template6 from "../assets/template6.jpeg";

const templates = [
  { img: Template1, title: "Business Website" },
  { img: Template2, title: "Portfolio" },
  { img: Template3, title: "Online Store" },
  { img: Template4, title: "Photography" },
  { img: Template5, title: "Blogging" },
  { img: Template6, title: "Fitness & Wellness" },
];

const Home = () => {
  return (
    <>
        <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-5xl md:text-5xl font-bold mb-4">Create a portfolio website that stands out</h1>
        <p className="text-lg text-gray-600 mb-6">Build your brand and attract clients with an online portfolio stacked with design features and AI capabilities.</p>
        <Link to="/signup">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>
      </Link>

      </section>

      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">Explore Our Templates</h2>
          <div className="overflow-x-auto whitespace-nowrap space-x-6 flex">
            {templates.map((template, index) => (
              <div
                key={index}
                className="inline-block w-64 border rounded-lg overflow-hidden shadow hover:shadow-xl transition shrink-0"
              >
                <img src={template.img} alt={template.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-medium">{template.title}</h3>
                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 text-blue-600 border border-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-50">Preview</button>
                    <button className="flex-1 bg-blue-600 text-white rounded px-3 py-1 text-sm hover:bg-blue-700">Use</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Design</h3>
              <p className="text-gray-600">Generate layouts and content with smart suggestions tailored to your needs.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Fully Responsive</h3>
              <p className="text-gray-600">All templates work seamlessly on desktops, tablets, and phones.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">App Market</h3>
              <p className="text-gray-600">Integrate tools for eCommerce, marketing, analytics, and more.</p>
            </div>
          </div>
        </div>
      </section>

      
       <div className="flex flex-wrap justify-center gap-4 mb-10 text-blue-600 font-medium">
            <Link to="/design">Design</Link>
            <Link to="/photography">Photography</Link>
            <Link to="/architecture">Architecture</Link>
            <Link to="/business">Business</Link>
            <Link to="art">Art</Link>
            <Link to="fashion">Fashion</Link>
          </div>

              
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg overflow-hidden transition hover:shadow-lg"
              >
                <img
                  src={template.img}
                  alt={template.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{template.title}</h3>
                </div>
              </div>
            ))}
          </div>

      
      <section className="py-20 bg-blue-400 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to build your dream website?</h2>
        <p className="mb-6 text-lg">Choose a template and customize it the way you like.</p>
        <Link to="/signup">
        <button className="bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition">
         Start Now
        </button>
      </Link>
      </section>

      
      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-2">Product</h4>
            <ul className="space-y-1 text-sm">
              <li>Website Builder</li>
              <li>AI Tools</li>
              <li>Templates</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Solutions</h4>
            <ul className="space-y-1 text-sm">
              <li>Business</li>
              <li>Freelancers</li>
              <li>Agencies</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-10">&copy; 2025 YourWixClone. All rights reserved.</div>
      </footer>
    </>
  );
};

export default Home;
