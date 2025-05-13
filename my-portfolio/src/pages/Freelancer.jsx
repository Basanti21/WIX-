import React from "react";

const Freelancer = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Solutions for Freelancers</h1>
        <p className="text-lg text-gray-600 mb-10">
          Build professional websites for your clients with powerful tools that help you work efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Portfolio Tools", "Client Management", "App Integrations"].map((item, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{item}</h2>
              <p className="text-sm text-gray-600">Everything you need to build, manage, and grow your freelance business.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelancer;
