import ProBox from "./ProBox";
import CarRental from "../images/car-rental.png";
import CityBike from "../images/city-bike.png";

const Projects = () => {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>projects</p>
            <h3>I take each project as a commitment to serious development and continuous learning</h3>
            <div className="projects-grid">
              <ProBox
                title="Car Rental"
                img={CarRental}
                description="Car Rental is a fullstack web application. It is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                frontend="React, HTML, Tailwind CSS"
                backend="Javacript, Node.js, Express.js, MongoDb"
                code="https://github.com/Nadire-Nadir/car-rental"
                demo="https://car-rental-duf6.onrender.com/"
                scrollY="-63%"
                icon="🚗"
              />

              <ProBox
                title="City Bike App"
                img={CityBike}
                description="City Bike App is a fullstack web application, It provides a plateform to display data from journeys made with city bikes in the Helsinki Capital area, and display all existing city bicycle staions data, and also display related datas of each station."
                frontend="React, HTML, CSS, TestCafe"
                backend="Javacript, Node.js, Typescript, Express.js, PostgreSQL, Prisma, Jest"
                code="https://github.com/Nadire-Nadir/city-bike-app"
                demo="https://helsinki-city-bike-281t.onrender.com/"
                scrollY="-75%"
                icon="🚴"
                cName="reversed-proj"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
