const TimelineElement = ({ item, chooseProject }) => {
  function scrollToElementEndOnMobile(elementId) {
    if (window.innerWidth < 900) {
      const element = document.getElementById(elementId);

      if (element) {
        const offsetTop = element.offsetTop + element.offsetHeight - window.innerHeight;
        const scrollOptions = {
          behavior: 'smooth',
          block: 'end',
        };
        window.scrollTo(scrollOptions);
        window.scrollTo({
          top: offsetTop,
          ...scrollOptions,
        });
      } else {
        return;
      }
    }
  }

  return (
    <ul
      onClick={() => {
        chooseProject(item);
        scrollToElementEndOnMobile('article-project');
      }}
      className="items"
      tabIndex="0"
      id={item.id}
    >
      <li className="projectLi">{item.name}</li>
      <li className="typeLi">{item.type}</li>
      <li className="studioLi">{item.studio}</li>
      <li className="yearLi">{item.year}</li>
      <li className="roleLi">{item.role}</li>
    </ul>
  );
};

export default TimelineElement;
