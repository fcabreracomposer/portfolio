import TimelineElement from '../components/TimelineElement';

const Timeline = ({ elements, chooseProject }) => {
  return (
    <article className="timeline" id="timeline">
      <div className="content">
        <ul className="titles">
          <li className="projectLi">PROJECT</li>
          <li className="typeLi">TYPE</li>
          <li className="studioLi">STUDIO</li>
          <li className="yearLi">YEAR</li>
          <li className="roleLi">ROLE</li>
        </ul>
        {elements.map((item) => (
          <TimelineElement item={item} key={item.id} chooseProject={chooseProject} />
        ))}
      </div>
    </article>
  );
};

export default Timeline;
