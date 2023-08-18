const ProjectCard = ({ project }) => {
  return (
    <div className="project" style={{ backgroundImage: `url(${project.artwork})` }}>
      <article className="media">
        <div className="contentMedia">
          {/* <img src={project.artwork} alt={project.name} /> */}
          {project.media && (
            <div className="embed-container">
              <iframe
                className="media-player"
                title={project.name}
                width="100%"
                scrolling="no"
                frameBorder="no"
                src={project.media}
              ></iframe>
            </div>
          )}
          {project.info && <p>{project.info}</p>}
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
