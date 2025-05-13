import React from "react";

const Blog = () => {
  const posts = [
    { title: "5 Design Tips", date: "May 2025", summary: "Improve your website aesthetics." },
    { title: "Top 10 SEO Tricks", date: "April 2025", summary: "Rank better on Google." },
    { title: "Wix Studio Walkthrough", date: "March 2025", summary: "Everything you need to know." },
  ];

  return (
    <section className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Blog</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-1">{post.date}</p>
              <p className="text-sm text-gray-600">{post.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
