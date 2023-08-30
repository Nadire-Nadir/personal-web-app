import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProBox = ({
  title,
  img,
  description,
  backend,
  frontend,
  code,
  demo,
  scrollY,
  cName,
  icon,
}) => {
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <div className={`pro pro__1 ${cName}`}>
        <div className="pro__img">
          <a target="_blank" href={demo} rel="noreferrer">
            <img
              src={img}
              alt="website"
              style={{
                transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                transition: "transform 10s ease-in-out",
              }}
              onMouseEnter={() => setScroll(true)}
              onMouseLeave={() => setScroll(false)}
            />
          </a>
        </div>
        <div className="pro__text">
          <h3>
            {title} {icon}
          </h3>
          <p>{description}</p>
          <div className="stack">
            <p className="stack-title">Stacks</p>
            <div><p>{backend}</p><p>{frontend}</p></div>
          </div>
          <div className="links">
            <a target="_blank" href={code} rel="noreferrer">
              Code 
              <FaGithub className="icon-24" />
            </a>
            <a target="_blank" href={demo} rel="noreferrer">
              Live Demo
              <FiExternalLink className="icon-24" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProBox;
