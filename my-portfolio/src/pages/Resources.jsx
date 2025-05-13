const Resources = () => {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Resources</h1>
        <p className="text-gray-600 mb-6">Learn and grow with our educational materials and support.</p>
  
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-xl">Help Center</h2>
            <p className="text-gray-500">Find answers to common questions and technical guides.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-xl">Blog</h2>
            <p className="text-gray-500">Explore insights, tutorials, and inspiration for creators.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-xl">Community</h2>
            <p className="text-gray-500">Connect with other users and showcase your work.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resources;
  