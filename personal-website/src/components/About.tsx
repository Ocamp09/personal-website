import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <h1 className="header-text">Hi, I'm Owen!</h1>
        <div className="info">
          <p className="info-text">Software Developer</p>
          <p className="info-text">owen19campbell@gmail.com</p>
          <p className="info-text">Westerville, OH</p>
        </div>
        <div className="about-desc">
          <p className="bio-text">
            I am a software engineer, learner, and love most things tech. I
            appreciate constructive criticism and am constantly trying to
            improve my development skills.
          </p>
          <p className="bio-text">
            In my freetime enjoy coding, woodworking, spending time outdoors,
            RockBand, reading, board games, and spending time with my wife and
            family
          </p>

          <p>
            Feel free to email me any feedback, or if you are interested in my
            skills!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
