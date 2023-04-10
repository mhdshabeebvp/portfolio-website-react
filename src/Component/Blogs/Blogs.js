import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Blogs.css";
import gpt3 from "../../img/gpt3.webp";
import job from "../../img/job.png";
import gpt4 from "../../img/gpt4.jpg";
import cb from "../../img/cb.jpg";
import skill2023 from "../../img/skills2023.jpg";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Exploring ChatGpt3",
    imageUrl: gpt3,
    linkUrl:
      "https://codemindiq.blogspot.com/2023/04/introduction-modern-ai-language-model.html",
  },
  {
    title: "The Most Lucrative High-Paid Skills for 2023",
    imageUrl: skill2023,
    linkUrl: "https://codemindiq.blogspot.com/2023/04/the-skills-that-pay-bills-most.html",
  },
  {
    title: "GPT-4: Advanced Language Processing Benefits",
    imageUrl: gpt4 ,
    linkUrl: "https://picsum.photos/1600/800?random=2",
  },
  {
    title: "ChatGPT vs BART: A Battle of AI Chatbot Titans",
    imageUrl:cb,
    linkUrl: "https://codemindiq.blogspot.com/2023/04/chatgpt-vs-bart-comparison-of-two.html",
  },
  {
    title: "The Future of Work: Which Jobs Are at Risk of Automation",
    imageUrl: job,
    linkUrl:
      "https://codemindiq.blogspot.com/2023/04/the-future-of-work-which-jobs-are-at.html",
  },
];

const ParallaxSections = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.utils.toArray(sectionsRef.current).forEach((sectionslide, i) => {
      const box = sectionslide.querySelector(".box");

      gsap.set(box, { backgroundImage: `url(${sections[i].imageUrl})` });

      const getRatio = () =>
        window.innerHeight / (window.innerHeight + sectionslide.offsetHeight);

      gsap.fromTo(
        box,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio()}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio())}px`,
          ease: "none",
          scrollTrigger: {
            trigger: sectionslide,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true, // to make it responsive
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section>
        <h1 className="b-heading">Blogs</h1>
      </section>
      {sections.map((sectionslide, i) => (
        <sectionslide
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          id="ParallaxSections"
        >
          <a
            href={sectionslide.linkUrl}
            target="_blank"
            rel="noreferrer"
            className="box"
            style={{
              borderRadius:
                i === 0
                  ? "20px 20px 0 0"
                  : i === sections.length - 1
                  ? "0 0 20px 20px"
                  : "none",
              textDecoration: "none",
            }}
          >
            <div
              className="bgm"
              style={{ backgroundImage: `url(${sections[i].imageUrl})` }}
            />
            <h1 className="Blog-heading">{sectionslide.title}</h1>
          </a>
        </sectionslide>
      ))}
    </>
  );
};

export default ParallaxSections;
