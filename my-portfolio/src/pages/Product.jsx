import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <p className="text-gray-600 mb-6">Explore the tools we offer to build powerful websites and experiences.</p>
  
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-xl">Website Builder</h2>
            <p className="text-gray-500">Create stunning websites with ease using our drag-and-drop editor.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-xl">AI Designer</h2>
            <p className="text-gray-500">Let AI help you craft your brand identity effortlessly.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-xl">App Market</h2>
            <p className="text-gray-500">Enhance functionality with third-party integrations.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Product;
  