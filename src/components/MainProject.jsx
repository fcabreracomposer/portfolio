import data from '../data/data.json';
import ProjectCard from './ProjectCard';
const MainProject = () => {
  const { projects } = data;

  return (
    <section className="projects">
      <h2>Projects</h2>
      <ProjectCard project={projects[0]} />
    </section>
  );
};

export default MainProject;
