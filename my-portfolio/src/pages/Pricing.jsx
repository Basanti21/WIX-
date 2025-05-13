import React from "react";

const Pricing = () => {
  const plans = [
    { name: "Basic", price: "₹299/mo", features: ["1 Website", "500 MB Storage", "Email Support"] },
    { name: "Pro", price: "₹399/mo", features: ["5 Websites", "5 GB Storage", "Priority Support"] },
    { name: "Business", price: "₹2999/mo", features: ["Unlimited Sites", "Unlimited Storage", "24/7 Support"] },
  ];

  return (
    <section className="min-h-screen py-12 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                {plan.features.map((f, i) => <li key={i}>• {f}</li>)}
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
