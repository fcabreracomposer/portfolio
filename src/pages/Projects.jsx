import { useState } from 'react';

import ProjectCard from '../components/ProjectCard';
import Timeline from '../components/Timeline';
import data from '../data/data.json';

const Projects = () => {
  const { projects } = data;
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const chooseProject = (item) => {
    setSelectedProject(projects[item.id]);
  };

  return (
    <>
      <section className="projects" id="projects">
        <Timeline elements={projects} chooseProject={chooseProject} />

        <ProjectCard project={selectedProject} />
        <span id="article-project"></span>
      </section>
    </>
  );
};

export default Projects;
