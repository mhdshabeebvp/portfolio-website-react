import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          footerRef.current.classList.add("animate");
        } else {
          footerRef.current.classList.remove("animate");
        }
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(footerRef.current);
    return () => observer.unobserve(footerRef.current);
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="left-section">
        <h2 className="footer-heading">Let's make something </h2>
        <p className="footer-text">amazing together.</p>
      </div>
      <div className="right-section">
        <ul className="social-links">
          <li className="social-link">
            <a href="https://github.com/mhdshabeebvp">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
          </li>
          <li className="social-link">
            <a href="https://www.linkedin.com/in/muhamed-shabeeb-vp-a24917229">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          </li>

          <li className="social-link">
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
          </li>
          <li className="social-link">
            <a href="https://instagram.com/shutterbee_boy?igshid=ZDdkNTZiNTM=">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
          </li>

          <li className="social-link">
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
