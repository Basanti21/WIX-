import React from "react";

const WebsiteBuilder = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Start Building Your Website</h1>
        <p className="text-gray-600 mb-8">
          Choose a template and customize it to create your own professional website.
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded shadow hover:shadow-lg transition">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.4aWH_BTzOgraxTjuYOGFNgHaE8?cb=iwp2&w=1588&h=1059&rs=1&pid=ImgDetMain"
              alt="Template 1"
              className="w-full rounded-t"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Portfolio Template</h2>
              <button className="mt-2 text-blue-600 hover:underline">Use This Template</button>
            </div>
          </div>

          <div className="bg-white rounded shadow hover:shadow-lg transition">
            <img
              src="https://www.rebeccachulew.com/wp-content/uploads/2022/11/blank-templates-html10-amp-css-10-inside-html5-blank-page-template.png"
              alt="Template 2"
              className="w-full rounded-t"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Business Template</h2>
              <button className="mt-2 text-blue-600 hover:underline">Use This Template</button>
            </div>
          </div>

          <div className="bg-white rounded shadow hover:shadow-lg transition">
            <img
              src="https://www.rebeccachulew.com/wp-content/uploads/2022/11/blank-templates-html10-amp-css-10-inside-html5-blank-page-template.png"
              alt="Template 3"
              className="w-full rounded-t"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Blog Template</h2>
              <button className="mt-2 text-blue-600 hover:underline">Use This Template</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilder;
