import Image from "next/image";

const ProjectCard = ({ title, description, github, link, technologies }) => {
  return (
    <div className="p-10 mt-12 text-white rounded-md lg:rounded-lg bg-gradient-to-br from-gray-800 to-gray-900">
      <p className="text-3xl font-semibold tracking-wider">{title}</p>

      <p className="my-5 tracking-wider text-gray-400">{description}</p>

      <div className="flex flex-col my-5 font-mono text-xs text-primary uppercase tracking-widest sm:gap-x-5 sm:flex-row">
        {technologies.map((tech) => (
          <p className="py-1 rounded-sm sm:px-2 sm:border-primary sm:border">{tech}</p>
        ))}
      </div>

      <a className="mr-5" href={github} target="_blank" rel="noreferrer">
        <Image src="/github.svg" alt="Github" height={22} width={22} />
      </a>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <Image src="/external-link.svg" alt={title} height={22} width={22} />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
