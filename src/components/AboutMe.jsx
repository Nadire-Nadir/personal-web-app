import AboutImg from "../images/about-img.png";

const AboutMe = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A dedicated web Developer
              </h4>
              <p>
                As a skilled Web Developer, I excel in modern UI development using JavaScript,
                ReactJS, and TypeScript. With a passion for solving complex issues and enhancing
                user efficiency, I prioritize clean, high- quality code delivery. My business
                management background enriches my problem-solving approach, resulting in improved
                user experiences. I am also a team player who thrives in collaborating with
                cross-functional teams to produce outstanding web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
