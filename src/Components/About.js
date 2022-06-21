import './About.css';

const About = () => {
  return (
    <div>
      <h1 className="header">
        <i>9Tube</i> is the revolutionary new way to watch and search for
        videos.
      </h1>
      <div className="description">
        <p>
          This <a href="https://reactjs.org/">React</a>-based application lets
          you search for YouTube videos using the{" "}
          <a href="https://developers.google.com/youtube/v3">YouTube API</a>,
          then choose a video from a list to watch.
        </p>
        <p>
          To use 9Tube, simply type what you're looking for in the search bar. A
          page of video results with titles and preview images will appear.
        </p>
        <p>
          Next, choose a video that you would like to watch. Comments can be left below the video as well. It's just that simple.
        </p>
      </div>
      <img alt="9Tube logo" src="./logo_about.png" />
      <h1>Contributors</h1>
      <div className="about">
        <article>
          <img
            className="about-img"
            src="./headshots/isaac.png"
            alt="contributor headshot"
          />
          <h3>Isaac Gonzalez</h3>
          <p className="bio">
            [Full Stack Developer | Passionate about being the best I can
            possibly be!]
          </p>
          <a href="https://github.com/0IG">GitHub</a>
        </article>
        <article>
          <img
            className="about-img"
            src="./headshots/jonathan.png"
            alt="contributor headshot"
          />
          <h3>Jonathan Scheiber</h3>
          <p className="bio">
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
            src="./headshots/jan.png"
            alt="contributor headshot"
          />
          <h3>Jan C. Matias</h3>
          <p className="bio">
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
