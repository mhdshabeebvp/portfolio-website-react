import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Certificates.css";
import yip from "../../img/certificates/yip.jpg";
import google from "../../img/certificates/google.jpg";
import isro from "../../img/certificates/isro.jpg";
import skill2023 from "../../img/skills2023.jpg";

const BlogSection = () => {
  return (
    <section id="blog" className="py-5" >
      <Container>
        <h2 className="text-center mb-5" id="Blog-heading">
          Certificates
        </h2>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <Card>
              <Card.Img className="Bimg" variant="top" src={yip} />
              <Card.Body>
                <h5 className="text-left Date">
                  {" "}
                  Issue Date: April 9, 2023{" "}
                </h5>
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
                  href={yip} className="button"
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
                  Issue Date: January 27, 2023
                  {" "}
                </h5>
                <Card.Title>
                  CRASH COURSE IN PYTHON
                  [Course Certificate]
                </Card.Title>

                <h5 className="text-left Date">
                  Google
                </h5>

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
                  Issue Date: December 03, 2020
                  {" "}
                </h5>
                <Card.Title>
                  ISRO ( Global Navigation Satellite System )
                </Card.Title>
                <h5 className="text-left Date">
                  Indian Institute of Remote Sensing (IIRS), Indian Space Research Organization (ISRO)

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

        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
