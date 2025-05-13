import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/temolet1.jpg";
import project2 from "../assets/templet2.jpg";

const Projects = () => (
  <section id="projects" className="py-20 bg-white px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Selected Work</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard title="E-Commerce Redesign" image={project1} />
        <ProjectCard title="Portfolio Website" image={project2} />
      </div>
    </div>
  </section>
);

export default Projects;
