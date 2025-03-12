import React, { useContext, useRef, useState,useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validate form inputs
  const validateForm = () => {
    const errors = {};
    const formData = new FormData(form.current);

    // Check name
    if (!formData.get("user_name")) {
      errors.user_name = "Name is required";
    }

    // Check email
    if (!formData.get("user_email")) {
      errors.user_email = "Email is required";
    } else if (!validateEmail(formData.get("user_email"))) {
      errors.user_email = "Invalid email address";
    }

    // Check message
    if (!formData.get("message")) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form before sending
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    setIsSending(true);
    emailjs
      .sendForm(
        "service_azo1x7u",
        "template_5duf397",
        form.current,
        "_eeJ5GlwDQSCf3xve"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setIsSending(false);
          form.current.reset();

          setTimeout(() => {
            setDone(false);
          }, 3000); // hide the message after 3 seconds
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };
  // Trigger vibration animation when errors change
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({}); // Clear errors after vibration
      }, 300); // Match the duration of the vibration animation
      return () => clearTimeout(timer);
    }
  }, [errors]);


  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className={`user ${errors.user_name ? "invalid vibrate" : ""}`}
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className={`user ${errors.user_email ? "invalid vibrate" : ""}`}
            placeholder="Email"
          />

          <textarea name="message" className={`user ${errors.message ? "invalid vibrate" : ""}`} placeholder="Message" />


          <div className="button-container">
            <button type="submit" className="button button-c" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {done && (
              <div className="tick-animation">
                <span className="tick"></span>
              </div>
            )}
          </div>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
