import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="footerc__socials">
              <div className="footerc__socials__item">
               <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/nadire-yimamu-0975bb152/"
                  >
                    <FaLinkedin color="#0a66c2" className="icon-24"/>
                </a>
              </div>
              <div className="footerc__socials__item">
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/Nadire-Nadir"
                >
                  <FaGithub color="black" className="icon-24" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
