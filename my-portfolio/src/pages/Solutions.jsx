const Solutions = () => {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Solutions for Everyone</h1>
        <p className="text-gray-600 mb-6">Tailored tools for different professionals and industries.</p>
  
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-xl">Freelancers</h2>
            <p className="text-gray-500">Build and manage client websites with ease.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-xl">Agencies</h2>
            <p className="text-gray-500">Scale your design operations with team features and client handoff.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-xl">Small Businesses</h2>
            <p className="text-gray-500">Create a professional online presence and drive conversions.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Solutions;
  