import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Article.css";
import gpt3 from "../../img/gpt3.webp";
import job from "../../img/job.png";
import gpt4 from "../../img/gpt4.jpg";
import cb from "../../img/cb.jpg";
import skill2023 from "../../img/skills2023.jpg";

const BlogSection = () => {
  return (
    <section id="blog" className="py-5" >
      <Container>
        <h2 className="text-center mb-5" id="Blog-heading">
          Latest Blog Posts
        </h2>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <Card>
              <Card.Img className="Bimg" variant="top" src={gpt3} />
              <Card.Body>
                <h5 className="text-left Date">
                  {" "}
                  Design &#x2022; April 9 2023{" "}
                </h5>
                <Card.Title>Revolutionizing Communication:The ChatGpt3</Card.Title>
                {/* <Card.Text id="Bparagraph">
                  GPT-3 has limitations including biases learned from data and
                  high energy consumption from requiring significant computing
                  power.
                  
                </Card.Text> */}
                <a
                  href="https://codemindiq.blogspot.com/2023/04/introduction-modern-ai-language-model.html"
                  className="button"
                  style={{ textDecoration: "none", marginTop:"2.4rem" }}
                  rel="noreferrer"
                  target="_blank"
                >
                  Read More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <Card>
              <Card.Img className="Bimg" variant="top" src={job} />
              <Card.Body>
                <h5 className="text-left Date">
                  {" "}
                  Design &#x2022; April 9 2023{" "}
                </h5>

                <Card.Title>
                Which Jobs Are at Risk of Automation and How to Prepare for It
                </Card.Title>
                {/* <Card.Text>
                  Continuous learning and alignment with values lead to
                  fulfilling careers and job security in 2023.
                </Card.Text> */}
                <a
                  href="https://codemindiq.blogspot.com/2023/04/the-future-of-work-which-jobs-are-at.html"
                  className="button"
                  style={{ textDecoration: "none" , marginTop:"1rem" }}
                  rel="noreferrer"
                  target="_blank"
                >
                  Read More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <Card>
              <Card.Img className="Bimg" variant="top" src={skill2023} />
              <Card.Body>
                <h5 className="text-left Date">
                  {" "}
                  Design &#x2022; April 10 2023{" "}
                </h5>

                <Card.Title>
                  The Most Lucrative High-Paid Skills for 2023
                </Card.Title>
                {/* <Card.Text>
                  Continuous learning and alignment with values lead to
                  fulfilling careers and job security in 2023.
                </Card.Text> */}
                <a
                  href="https://codemindiq.blogspot.com/2023/04/the-skills-that-pay-bills-most.html"
                  className="button"
                  style={{ textDecoration: "none" , marginTop:"2.5rem" }}
                  rel="noreferrer"
                  target="_blank"
                >
                  Read More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <Card>
              <Card.Img className="Bimg" variant="top" src={gpt4} />
              <Card.Body>
                <h5 className="text-left Date">
                  {" "}
                  Design &#x2022; April 10 2023{" "}
                </h5>

                <Card.Title>
                  GPT-4: Advanced Language Processing Benefits
                </Card.Title>
                {/* <Card.Text>
                  AI advances enhance communication, creativity, and
                  problem-solving, with ethical considerations.
                </Card.Text> */}
                <a
                  href="https://codemindiq.blogspot.com/2023/04/unleashing-power-of-natural-language.html"
                  className="button"
                  style={{ textDecoration: "none",marginTop:"1rem"  }}
                  rel="noreferrer"
                  target="_blank"
                >
                  Read More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <Card>
              <Card.Img className="Bimg" variant="top" src={cb} />
              <Card.Body>
                <h5 className="text-left Date">
                  {" "}
                  Design &#x2022; April 10 2023{" "}
                </h5>

                <Card.Title>
                  ChatGPT vs BART: A Battle of AI Chatbot Titans
                </Card.Title>
                {/* <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  auctor, libero vel tincidunt tristique, ipsum nulla cursus
                  dui, in bibendum ex eros id mi.
                </Card.Text> */}
                <a
                  href="https://codemindiq.blogspot.com/2023/04/chatgpt-vs-bart-comparison-of-two.html"
                  className="button"
                  style={{ textDecoration: "none" ,marginTop:"1rem"}}
                  rel="noreferrer"
                  target="_blank"
                >
                  Read More
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
