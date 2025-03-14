import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import "./Cards.css";

import competitionImage from "../../img/activitiesimg/robotclass.jpeg";
import yip from "../../img/activitiesimg/yip.jpeg";
import printer from "../../img/activitiesimg/3d.jpg";
import alhuda from "../../img/activitiesimg/alhuda.jpeg";
import amup from "../../img/activitiesimg/amup.jpeg";
import camp2 from "../../img/activitiesimg/camp2.jpeg";
import cnc from "../../img/activitiesimg/cnc.jpeg";
import farookstate from "../../img/activitiesimg/farookstate.jpeg";
import malabar from "../../img/activitiesimg/malabar.jpg";
import poly from "../../img/activitiesimg/polytechnic.jpeg";
import mbot from "../../img/activitiesimg/mbot1.png";
import srishti1 from "../../img/activitiesimg/srishti.jpg";
import supra from "../../img/activitiesimg/supra.jpg";
import fund from "../../img/activitiesimg/fund.jpeg";
import srishtti2 from "../../img/activitiesimg/srishtti2.jpeg";
import diksha from "../../img/activitiesimg/diksha.jpeg";

class MyCarousel extends Component {
  render() {
    const cards = [
      { image: competitionImage, text: "Robot Class" },
      { image: yip, text: "YIP" },
      { image: printer, text: "3D Printing" },
      { image: alhuda, text: "Al Huda" },
      { image: amup, text: "AMUP" },
      { image: camp2, text: "Camp 2" },
      { image: cnc, text: "CNC Workshop" },
      { image: farookstate, text: "Farook State" },
      { image: malabar, text: "Malabar Event" },
      { image: poly, text: "Polytechnic Event" },
      { image: mbot, text: "Mbot Project" },
      { image: srishti1, text: "Srishti 1" },
      { image: supra, text: "Supra" },
      { image: fund, text: "Funding Program" },
      { image: srishtti2, text: "Srishti 2" },
      { image: diksha, text: "Diksha" },
    ];

    return (
      <div className="carousel-container">
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          {cards.map((card, index) => (
            <div key={index} className="carousel-card">
              <img src={card.image} alt={card.text} className="carousel-image" />
              <div className="carousel-text">{card.text}</div>
            </div>
          ))}
        </ReactCardCarousel>
      </div>
    );
  }
}

export default MyCarousel;
