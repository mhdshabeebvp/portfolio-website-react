import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./Certificates.css";
import yip from "../../img/certificates/yip.jpg";
import google from "../../img/certificates/google.jpg";
import isro from "../../img/certificates/isro.jpg";

import iit from "../../img/certificates/iit.jpg";
import national3 from "../../img/certificates/national3.jpg";
import national2 from "../../img/certificates/national2.jpg";
import national1 from "../../img/certificates/national1.jpg";
import iit1 from "../../img/certificates/iit1.jpg";
import aicte from "../../img/certificates/aicte.jpg";
import malabar from "../../img/certificates/center.jpg";
import malabar2 from "../../img/certificates/center2.jpg";
import malabar3 from "../../img/certificates/center3.jpg";
import iginite from "../../img/certificates/iginite.jpg";
import ieee1 from "../../img/certificates/ieee1.jpg";
import ieee2 from "../../img/certificates/ieee2.jpg";


import right1 from "../../img/certificates/right1.jpg";
import right2 from "../../img/certificates/right2.jpg";
import google2 from "../../img/certificates/google2.jpg";
import kel from "../../img/certificates/kel.jpg";
import university from "../../img/certificates/university.jpg";
import udemy1 from "../../img/certificates/udemy1.jpg";
import udemy2 from "../../img/certificates/udemy2.jpg";
import nss1 from "../../img/certificates/nss1.jpg";
import nss2 from "../../img/certificates/nss2.jpg";
import sports1 from "../../img/certificates/sports1.jpg";

const CertificateSection = () => {
  return (
    <section id="Certificate" className="py-5">
      <Container>
        <h2 className="text-center mb-5" id="-heading">
          Certificates
        </h2>
        <p>
        Welcome to my certificates section, where I showcase my achievements and milestones. From earning accolades from IIT, Google, and ISRO to participating in national and state-level competitions, these accomplishments reflect my dedication to learning and innovation. Recognized in programs like YIP, I take pride in these milestones that highlight my passion for growth and excellence.        </p>
        <Scrollbars
          style={{ height: "40rem", }}
          // autoHide
          renderThumbVertical={({ style, ...props }) => (
            <div
              {...props}
              style={{
                ...style,
                backgroundImage: "linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%)", // Corrected to use backgroundImage
                borderRadius: "10px",
                width: "8px",
              }}
            />
          )}
        >
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={yip} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: April 9, 2023 </h5>
                  <Card.Title>
                    YOUNG INNOVATION PROGRMME (YIP)[Distric level winner]
                  </Card.Title>
                  <h5 className="text-left Date">
                    {" "}
                    Kerala Development and Innovation Strategic Council{" "}
                  </h5>

                  {/* <Card.Text>
                  Continuous learning and alignment with values lead to
                  fulfilling careers and job security in 2023.
                </Card.Text> */}
                  <a
                    href={yip}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={google} />
                <Card.Body>
                  <h5 className="text-left Date">
                    {" "}
                    Issue Date: January 27, 2023{" "}
                  </h5>
                  <Card.Title>
                    CRASH COURSE IN PYTHON [Course Certificate]
                  </Card.Title>

                  <h5 className="text-left Date">Google</h5>

                  <a
                    href="https://www.coursera.org/account/accomplishments/verify/8D6KG4KV928C"
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={isro} />
                <Card.Body>
                  <h5 className="text-left Date">
                    {" "}
                    Issue Date: December 03, 2020{" "}
                  </h5>
                  <Card.Title>
                    ISRO ( Global Navigation Satellite System )
                  </Card.Title>
                  <h5 className="text-left Date">
                    Indian Institute of Remote Sensing (IIRS), Indian Space
                    Research Organization (ISRO)
                  </h5>

                  <a
                    href={isro}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={national3} />
                <Card.Body>
                  <h5 className="text-left Date">
                    {" "}
                    Issue Date: February 11, 2020{" "}
                  </h5>
                  <Card.Title>
                    SRISHTI 2020-National Level Project Competition
                  </Card.Title>

                  <h5 className="text-left Date">
                    Saintgits Collage of Engineering
                  </h5>

                  <a
                    href={national3}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={national2} />
                <Card.Body>
                  <h5 className="text-left Date">
                    {" "}
                    Issue Date: February 19, 2019{" "}
                  </h5>
                  <Card.Title>
                    SRISHTI 2019-National Level Project Competition
                  </Card.Title>

                  <h5 className="text-left Date">
                    Saintgits Collage of Engineering
                  </h5>

                  <a
                    href={national2}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={national1} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: April 03, 2019 </h5>
                  <Card.Title>
                    Swastika-National Level Project Competition
                  </Card.Title>
                  <h5 className="text-left Date">
                    Mar Baselious Christian Collage of Engineering & Technology
                  </h5>

                  <a
                    href={national1}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={iit1} />
                <Card.Body>
                  <h5 className="text-left Date">
                    {" "}
                    Issue Date: November 27, 2019{" "}
                  </h5>
                  <Card.Title>HONOUR CODE CERTIFICATE</Card.Title>
                  <h5 className="text-left Date"> Student Solar Ambassadors </h5>

                  {/* <Card.Text>
                  Continuous learning and alignment with values lead to
                  fulfilling careers and job security in 2023.
                </Card.Text> */}
                  <a
                    href={iit1}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={iit} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: July 12, 2018 </h5>
                  <Card.Title>HONOUR CODE CERTIFICATE</Card.Title>

                  <h5 className="text-left Date">
                    This Course offered by <strong>IITBombayX</strong>, an online
                    learning initiative of Indian institution of Technology
                  </h5>

                  <a
                    href={iit}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={aicte} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: March, 2021 </h5>
                  <Card.Title>
                    AICTE Regional Level Chhatra Vishwakarma Awards 2020
                  </Card.Title>
                  <h5 className="text-left Date">AICTE NEAT</h5>

                  <a
                    href={aicte}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={malabar} />
                <Card.Body>
                  <h5 className="text-left Date">
                    {" "}
                    Issue Date: November 15, 2018{" "}
                  </h5>
                  <Card.Title>Design & Challenge Contest</Card.Title>
                  <h5 className="text-left Date">
                    Regional Science Center & Planetarium,Calicut
                  </h5>

                  <a
                    href={malabar}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={malabar2} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: May 14, 2018 </h5>
                  <Card.Title>Design & Challenge Contest</Card.Title>
                  <h5 className="text-left Date">
                    Regional Science Center & Planetarium,Calicut
                  </h5>

                  <a
                    href={malabar2}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={malabar3} />
                <Card.Body>
                  <h5 className="text-left Date">
                    {" "}
                    Issue Date: September 21, 2021{" "}
                  </h5>
                  <Card.Title>Technical Innovation using AI, ML, IoT</Card.Title>
                  <h5 className="text-left Date">
                    Regional Science Center & Planetarium,Calicut
                  </h5>

                  <a
                    href={malabar3}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={iginite} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: April 10, 2021 </h5>
                  <Card.Title>
                    Darshana IGINITE 2021- Project Competition
                  </Card.Title>
                  <h5 className="text-left Date">Darshana</h5>

                  <a
                    href={iginite}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={ieee2} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: May 11, 2019 </h5>
                  <Card.Title>
                    IEEE SB MESCE's Project Competition [CNC Machine Using
                    E-waste]
                  </Card.Title>
                  <h5 className="text-left Date">IEEE SB MESCE</h5>

                  <a
                    href={ieee2}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={ieee1} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: March 11, 2018 </h5>
                  <Card.Title>IEEE SB MESCE's Workshop [RASPBERRY PI]</Card.Title>
                  <h5 className="text-left Date">IEEE SB MESCE</h5>

                  <a
                    href={ieee1}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={right1} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: July 7, 2023 </h5>
                  <Card.Title>Python FullStack with Data Science</Card.Title>
                  <h5 className="text-left Date">Right soft Options, Kochi</h5>

                  <a
                    href={right1}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={right2} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: July 7, 2023 </h5>
                  <Card.Title> Internship in Python FullStack with Data Science</Card.Title>
                  <h5 className="text-left Date">Right soft Options, Kochi</h5>

                  <a
                    href={right2}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={kel} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: July 25, 2018 </h5>
                  <Card.Title> Internship Training [Electrical & Electronics Engineering]</Card.Title>
                  <h5 className="text-left Date">Kerala Electrical & Allied Engineering CO.LTD</h5>

                  <a
                    href={kel}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={university} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: July 5, 2020</h5>
                  <Card.Title> National Level Online Quiz [Digital Electronics]</Card.Title>
                  <h5 className="text-left Date">Kerala Electrical & Allied Engineering CO.LTD</h5>

                  <a
                    href={university}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={google2} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: August 7, 2018</h5>
                  <Card.Title>Google Adwords Fundamentals</Card.Title>
                  <h5 className="text-left Date">Google</h5>

                  <a
                    href={google2}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={udemy1} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: February 24, 2019</h5>
                  <Card.Title> Certificate for Completion [Basics of Electronics]</Card.Title>
                  <h5 className="text-left Date">Udemy</h5>

                  <a
                    href={udemy1}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={udemy2} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: December 5, 2018</h5>
                  <Card.Title> Certificate for Completion [Iot(Internet of Things) automation with ESP8266]</Card.Title>
                  <h5 className="text-left Date">Udemy</h5>

                  <a
                    href={udemy2}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={nss1} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: September, 2018</h5>
                  <Card.Title> POST FLOOD REHABILITATION PROGRAMME</Card.Title>
                  <h5 className="text-left Date">Government of Kerala</h5>

                  <a
                    href={nss1}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={nss2} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: September 14, 2018</h5>
                  <Card.Title> POST FLOOD REHABILITATIONS SURVEY</Card.Title>
                  <h5 className="text-left Date">NSS- Mes Collage of Engineering Kuttippuram</h5>

                  <a
                    href={nss2}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <Card>
                <Card.Img className="Bimg" variant="top" src={sports1} />
                <Card.Body>
                  <h5 className="text-left Date"> Issue Date: August 06, 2011</h5>
                  <Card.Title> District Level Softball Competition</Card.Title>
                  <h5 className="text-left Date">Malappuram District Softball Association </h5>

                  <a
                    href={sports1}
                    className="button"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Credential
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Scrollbars>
      </Container>

    </section>
  );
};

export default CertificateSection;
