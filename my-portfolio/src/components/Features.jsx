const features = [
    { title: "Drag & Drop Editor", desc: "Build visually without code." },
    { title: "Mobile Responsive", desc: "Looks great on every device." },
    { title: "SEO Tools", desc: "Get discovered on Google." },
  ];
  
  const Features = () => (
    <section id="features" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">Features You’ll Love</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {features.map((f, i) => (
          <div key={i} className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  export default Features;
  