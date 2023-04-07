import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Blog.css";

gsap.registerPlugin(ScrollTrigger);
const sections = [
  {
    title: "Simple parallax sections",
    imageUrl: "https://picsum.photos/1600/800?random=0",
  },
  {
    title: "Hey look, a title",
    imageUrl: "https://picsum.photos/1600/800?random=1",
  },
  {
    title: "They just keep coming",
    imageUrl: "https://picsum.photos/1600/800?random=2",
  },
  {
    title: "So smooth though",
    imageUrl: "https://picsum.photos/1600/800?random=3",
  },
  {
    title: "Nice, right?",
    imageUrl: "https://picsum.photos/1600/800?random=4",
  },
];
const ParallaxSections = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.utils.toArray(sectionsRef.current).forEach((section, i) => {
      const bg = section.querySelector(".bg");

      gsap.set(bg, { backgroundImage: `url(${sections[i].imageUrl})` });

      const getRatio = () =>
        window.innerHeight / (window.innerHeight + section.offsetHeight);

      gsap.fromTo(
        bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio()}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio())}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
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
 
      {sections.map((section, i) => (
        <section key={i} ref={(el) => (sectionsRef.current[i] = el)}>
          <div className="bg"></div>
          <h1 Blog-heading>{section.title}</h1>
        </section>
      ))}
    </>
  );
};

export default ParallaxSections;
