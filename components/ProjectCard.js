import Image from "next/image";

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
      className="relative w-full overflow-hidden -mb-8 text-white rounded-lg shadow-lg"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      style={style}
    >
      <Image
        src={project.image}
        alt={project.name}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="relative">
        <div className="absolute inset-0 z-10 flex flex-col items-end justify-end p-4 transition-all transform translate-y-full hover:translate-y-0">
          <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
          <p className="text-gray-300 text-sm">{project.project}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
