import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
//This is used for dots under the testimonial section when it slide
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
const Testimonial = () => {
  const clients = [
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
          style={{ background: "skyblue" }}
        ></div>
      </div>
      {/* slider */}
      <Swiper
        //This is used for dots under the testimonial section when it slide
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
