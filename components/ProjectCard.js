const ProjectCard = ({
  project,
  index,
  activeIndex,
  onMouseEnter,
  onMouseLeave,
  style,
}) => {
  const isActive = index === activeIndex;
  return (
    <div
      className="flex items-end justify-end w-full h-full px-4 py-6 overflow-hidden text-white rounded-lg shadow-lg"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      style={style}
    >
      <div className="card-content transition-all transform translate-y-full opacity-0 visibility-hidden">
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-300 text-sm">{project.project}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
