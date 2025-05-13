import templates from "../data/templates";

const Templates = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Choose a Portfolio Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <a
            key={template.id}
            href={template.url}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img src={template.image} alt={template.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold">{template.title}</h3>
              <p className="text-sm text-gray-600">{template.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Templates;
