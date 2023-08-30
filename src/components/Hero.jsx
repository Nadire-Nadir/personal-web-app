import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoNodejs
} from "react-icons/bi";

const Hero = () => {

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Web Developer</h1>
                <p>
                  Hi, I'm Nadire Yimamu. A passionate Web
                  Developer based in Tampere, Finland. 
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/nadire-yimamu-0975bb152/"
                  >
                    <FaLinkedin color="#0a66c2" />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Nadire-Nadir"
                  >
                    <FaGithub />
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            <div className="skills">
              <p>Tech Stack</p>
              <div>
                <ul>
                  <li hover-text="Javacript">
                    <BiLogoJavascript className="skills-icon" color="#fbbc04" />
                  </li>
                  <li hover-text="React">
                    <BiLogoReact className="skills-icon" color="#61dafb" />
                  </li>
                  <li hover-text="Typescript">
                    <BiLogoTypescript className="skills-icon" color="#3178c6" />
                  </li>
                  <li hover-text="HTML">
                    <BiLogoHtml5 className="skills-icon" color="#E44D26" />
                  </li>
                  <li hover-text="CSS">
                    <BiLogoCss3 className="skills-icon" color="#2B73BA" />
                  </li>
                  <li hover-text="Tailwind CSS">
                    <BiLogoTailwindCss className="skills-icon" color="#3FBDF8" />
                  </li>
                  <li hover-text="Node.js">
                    <BiLogoNodejs className="skills-icon" color="#83CD29" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
