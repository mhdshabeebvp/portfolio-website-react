import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../../Component/Project/ProjectCard";
import projImg1 from "../../img/img2/project-img1.png";
import projImg2 from "../../img/img2/project-img2.png";
import projImg3 from "../../img/img2/project-img3.png";
import colorSharp2 from "../../img/img2/color-sharp2.png";
import "animation.css";
import "./Projects.css";
import TrackVisibility from "react-on-screen";
import "bootstrap/dist/css/bootstrap.min.css";
import techassistap from "../../img/techAssistaP.png";
import car from "../../img/skillp/car.jpg";
import covid from "../../img/skillp/covid.jpg";
import humenf from "../../img/skillp/humenf.jpg";
import cnc from "../../img/skillp/CNC.jpg";
import linefollower from "../../img/skillp/linefollower.webp";
import mvg from "../../img/skillp/mvg.jpg";
import project2 from "../../img/project2.jpg";
import project3 from "../../img/project3.png";
import lp1 from "../../img/LP/lp1.png";
import lp2 from "../../img/LP/lp2.png";
import lp3 from "../../img/LP/lp3.png";
import lp4 from "../../img/LP/lp4.png";

export const Projects = () => {
  const projects = [
    {
      title: "Education department Website",
      description: "Multipage-Education-School-Startup-website",
      imgUrl: techassistap,
    },
    {
      title: "Web Application",
      description: "Blood Donation information Application",
      imgUrl: project2,
    },
    {
      title: "Personal Portfolio Website [React]",
      description: "Personal Portfolio Website using Reactjs",
      imgUrl: project3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  const projects2 = [
    {
      title: "QUARDRIVE",
      description: "the 4 wheel E-bike that look like a car",
      imgUrl: car,
    },
    {
      title: "ROBO-19 ",
      description: "Nursing cum Deliver robot for pandemic situations",
      imgUrl: covid,
    },

    {
      title: " HUMAN FOLLOWING ROBOT",
      description:
        "The Arduino-powered robot utilizes sensors to detect and track human movement, while motor control allows it to follow.",
      imgUrl: humenf,
    },
    {
      title: "CNC Plotter MACHINE",
      description:
        "Arduino-powered CNC plotter machine creates accurate and intricate designs with ease.",
      imgUrl: cnc,
    },
    {
      title: "LINE FOLLOWER ROBOT",
      description:
        "Arduino-based line following robot navigates a path using sensors and motor control.",
      imgUrl: linefollower,
    },
    {
      title: "3 in 1 ROBO",
      description:
        "This refers to a device that can avoid obstacles, be controlled via Bluetooth, and respond to voice commands",
      imgUrl: mvg,
    },
  ];
  const projects3 = [
    {
      title: "Ecommerce Website",
      description:
        "Building a fully functional ecommerce website requires a lot of planning, development, and testing",
      imgUrl: lp1,
    },
    {
      title: "Giftopia: Personalized Gifts Delivered",
      description:
        "Seamless user experience for personalized gifting, easy checkout, and exceptional service.",
      imgUrl: lp2,
    },
    {
      title: "The Cosmetics Corner: Discover Your Perfect Look",
      description: "shopping Website using Reactjs",
      imgUrl: lp3,
    },
    {
      title: "Ecommerce Website",
      description:
        "Building a fully functional ecommerce website requires a lot of planning, development, and testing",
      imgUrl: lp4,
    },

    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Welcome to my project section, where I showcase some of my
                    most exciting and innovative work. Each project represents a
                    unique challenge and an opportunity to learn, grow and
                    innovate. Here are a few examples of the projects that I am
                    most proud of:
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Software</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Hardware</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Launchpad</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {/* <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p> */}
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Portfolio project section showcases my upcoming
                          fully functional website. It describes its purpose,
                          features, and goals, as well as the technologies used
                          to develop it, highlighting my technical skills.
                        </p>
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  );
};
