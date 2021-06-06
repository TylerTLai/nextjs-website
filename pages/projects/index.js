import Head from "next/head";
import { motion } from "framer-motion";

import ProjectCard from "../../components/ProjectCard";
import { projectCardVariants } from "../../components/ProjectCard/animation";
import { projectData } from "../../components/ProjectCard/data";

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Tyler Lai | Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {projectData.map((project) => (
        <motion.div variants={projectCardVariants} initial="initial" whileHover="hover">
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            github={project.github}
            link={project.link}
            technologies={project.technologies}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
