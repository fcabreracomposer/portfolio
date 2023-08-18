import Contact from './Contact';

const About = () => {
  return (
    <div className="todo" id="about">
      <article className="about">
        <div className="aboutBloqOne">
          <h1>
            <span id="spin"></span>
          </h1>
        </div>
        <div className="aboutInfo">
          <div className="text">
            <h2>Fernando Cabrera</h2>
            <h3>about me</h3>
          </div>
          <p>
            Im <strong>Fernando Cabrera</strong>, composer based in{' '}
            <strong>Madrid</strong>. As a composer and sound designer, I often research
            and experiment with sound to create sonic identities that stand out, from
            strong melodic approaches to experimental and organic soundscapes.
          </p>
          <p>
            <strong>Capable of adapting to any style</strong>, I will help you guiding and
            supporting the emotional and technical needs of your project, and, with each
            project comes a unique approach. My mission is{' '}
            <strong>to fulfill that vision</strong> through disctintive sound worlds and
            original ideas , collaborating with other profesionals and being a part of a
            team workflow.
          </p>
          <p>
            <strong>
              I would love to know more about your project, so lets talk, shall we?
            </strong>
          </p>
        </div>
      </article>
      <Contact></Contact>
    </div>
  );
};

export default About;
