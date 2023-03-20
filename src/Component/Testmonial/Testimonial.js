import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
const Testimonial = () => {
  const clinets = [
    {
      img: profilePic1,
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, vero molestias cum vel totam officia inventore sequi architecto perferendis alias aut laudantium quae temporibus quis incidunt a exercitationem culpa iusto.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, vero molestias cum vel totam officia inventore sequi architecto perferendis alias aut laudantium quae temporibus quis incidunt a exercitationem culpa iusto.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, vero molestias cum vel totam officia inventore sequi architecto perferendis alias aut laudantium quae temporibus quis incidunt a exercitationem culpa iusto.",
    },
    {
      img: profilePic4,
      review:
        " kfdbgjkdfgk dkjkf skdf  kdfksd ifhifdkj hfksdkfjisdfk fksdfiu ikdfiksdii sd gikjsdgisdibisdiisdksiksdhijsd bkiijsdisdbgisdisdiubksdijgiif",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur t-blur2"
          style={{ background: "var(--skyblue)" }}
        ></div>
      </div>
      {/* slider */}
      <Swiper>
        {clinets.map((clinet, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={clinet.img} alt="" />
              <span>{clinet.review}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
