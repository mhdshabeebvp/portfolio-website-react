import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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

const CertificateSection = () => {
  return (
    <section id="Certificate" className="py-5">
      <Container>
        <h2 className="text-center mb-5" id="Certificate-heading">
          Certificates
        </h2>
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
        </Row>
      </Container>
    </section>
  );
};

export default CertificateSection;
