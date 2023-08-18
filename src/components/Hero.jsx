const Hero = () => {
  const handleClick = () => {
    const element = document.getElementById('1');
    const projects = document.getElementById('projects');
    element.click();
    projects.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-btn" onClick={handleClick}></div>
    </section>
  );
};

export default Hero;
