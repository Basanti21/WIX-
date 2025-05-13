const ProjectCard = ({ title, image }) => (
    <div className="group relative overflow-hidden rounded-xl shadow-lg">
      <img src={image} alt={title} className="w-full h-80 object-cover transform group-hover:scale-110 transition" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <h3 className="text-white text-2xl font-semibold">{title}</h3>
      </div>
    </div>
  );
  
  export default ProjectCard;
  