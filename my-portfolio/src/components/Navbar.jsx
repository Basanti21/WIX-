import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 border-b sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold">WIX</Link>

        <nav className="hidden md:flex space-x-6 text-sm text-gray-700 relative">
          
          <div className="group relative">
            <button className="hover:text-blue-600">Product</button>
            <div className="absolute top-full left-0 bg-white shadow-md mt-2 rounded hidden group-hover:block z-10">
              <ul className="p-4 space-y-2 w-48 text-left text-sm">
                <li>
                  <Link to="/product/website-builder" className="block hover:text-blue-600">Website Builder</Link>
                </li>
                <li>
                  <Link to="/product/ai-tools" className="block hover:text-blue-600">AI Tools</Link>
                </li>
                <li>
                  <Link to="/product/app-market" className="block hover:text-blue-600">App Market</Link>
                </li>
              </ul>
            </div>
          </div>

         
          <div className="group relative">
            <button className="hover:text-blue-600">Solutions</button>
            <div className="absolute top-full left-0 bg-white shadow-md mt-2 rounded hidden group-hover:block z-10">
              <ul className="p-4 space-y-2 w-48 text-left text-sm">
                <li>
                <Link to="/freelancer" className="block hover:text-blue-600">Freelancers</Link>
                </li>
                <li>
                  <Link to="/solutions/agencies" className="block hover:text-blue-600">Agencies</Link>
                </li>
                <li>
                  <Link to="/solutions/small-businesses" className="block hover:text-blue-600">Small Businesses</Link>
                </li>
              </ul>
            </div>
          </div>

          
          <div className="group relative">
            <button className="hover:text-blue-600">Resources</button>
            <div className="absolute top-full left-0 bg-white shadow-md mt-2 rounded hidden group-hover:block z-10">
              <ul className="p-4 space-y-2 w-48 text-left text-sm">
                <li>
                <Link to="/blog" className="block hover:text-blue-600">Blog</Link>
                </li>
                <li>
                  <Link to="/resources/help-center" className="block hover:text-blue-600">Help Center</Link>
                </li>
                <li>
                  <Link to="/resources/community" className="block hover:text-blue-600">Community</Link>
                </li>
              </ul>
            </div>
          </div>

          <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link to="/wix-studio" className="hover:text-blue-600">Wix Studio</Link>
          <Link to="/enterprise" className="hover:text-blue-600">Enterprise</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-sm text-blue-600 hover:underline">Log In</Link>
          <Link to="/signup">
  <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
    Get Started
  </button>
</Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
