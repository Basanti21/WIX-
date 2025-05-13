import React from "react";

const DesignPage = () => {
  return (
    <section className="min-h-screen p-8 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Design Templates</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
              <img
                src={`https://tse3.mm.bing.net/th/id/OIP.6Ehy7K7hUVvnqQJO5r2EawHaEi?cb=iwp2&rs=1&pid=ImgDetMain+${id}`}
                alt={`Design Template ${id}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Design Template {id}</h3>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPage;
