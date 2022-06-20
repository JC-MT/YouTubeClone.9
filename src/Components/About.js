import './About.css';

const About = () => {
  return (
    <div>
      <h1>Contributors</h1>
      <div className="about">
        <article>
          <img
            className="about-img"
            src="https://i.imgur.com/RVwYeYA.jpeg"
            alt="contributor headshot"
          />
          <h3>Isaac Gonzalez</h3>
          <p>
            [Full Stack Developer | Passionate about being the best I can
            possibly be!]
          </p>
          <a href="https://github.com/0IG">GitHub</a>
        </article>
        <article>
          <img
            className="about-img"
            src="https://avatars.githubusercontent.com/u/794551?v=4"
            alt="contributor headshot"
          />
          <h3>Jonathan Scheiber</h3>
          <p>
            Jonathan is a full-stack web developer with a background in IT and
            customer service from New York, NY. He is currently learning
            JavaScript and React. His interests include user experience (UX)
            design, project management, and accessibility.
          </p>
          <a href="https://github.com/Scheiber">GitHub</a>
        </article>
        <article>
          <img
            className="about-img"
            src="https://ca.slack-edge.com/TCVA3PF24-U02M4L0HQKB-45e4dd21dc45-512"
            alt="contributor headshot"
          />
          <h3>Jan C. Matias</h3>
          <p>
            Hi there! I’m Jan, an aspiring Full Stack Web Developer based in
            NYC. If I’m not battling self-spawned bugs, you can catch me binge
            watching Anime, being forced to watch Gilmore Girls for the
            millionth time, or planning a getaway trip with my lovely wife.
          </p>
          <a href="https://github.com/JC-MT">GitHub</a>
        </article>
      </div>
    </div>
  );
};

export default About;
