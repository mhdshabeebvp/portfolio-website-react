import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Slide.css";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Simple parallax sections",
    imageUrl: "https://picsum.photos/1600/800?random=0",
    linkUrl: "https://chat.openai.com/",
  },
  {
    title: "Hey look, a title",
    imageUrl: "https://picsum.photos/1600/800?random=1",
    linkUrl: "/path2",
  },
  {
    title: "They just keep coming",
    imageUrl: "https://picsum.photos/1600/800?random=2",
    linkUrl: "/path3",
  },
  {
    title: "So smooth though",
    imageUrl: "https://picsum.photos/1600/800?random=3",
    linkUrl: "/path4",
  },
  {
    title: "Nice, right?",
    imageUrl: "https://picsum.photos/1600/800?random=4",
    linkUrl: "/path5",
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
