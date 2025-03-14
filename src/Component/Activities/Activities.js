import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./Activities.css";
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
// import { Robot } from "react-bootstrap-icons";
const activities = [
    {
        title: "Robotics Class at KNM English School, Ponnani",
        description: " I had the privilege of attending a robotics class at the prestigious KNM English School in PonnaniConducted a robotics class for talented 6th to 10th-grade students, sharing knowledge and inspiring their passion for technology. Their enthusiasm and grasp of robotics showcased their potential to become future innovators. ",
        imgSrc: competitionImage,
    },
    {
        title: "Young Innovation Programme (YIP) – District Level Winner",
        description: " Awarded a prize of ₹25,000 and selected for the state-level competition in July 2023. This prestigious program, organized by the Kerala Development and Innovation Strategic Council, recognizes innovative solutions and promotes creative problem-solving skills.",
        imgSrc: yip,
    },
    {
        title: "Robotics Workshop at Malabar Polytechnic College, Kadampuzha",
        description: " Conducted a one-day robotics workshop at Malabar Polytechnic College, Kadampuzha. Engaged students with hands-on activities, fostering technical skills and encouraging innovation in robotics.",
        imgSrc: poly,
    },
    {
        title: "College Fund for Future Projects and R&D",
        description: "Received funding from the college, granted by Principal Dr. A. S. Varadarajan, to support future project developments and research & development (R&D) activities. This funding aims to foster innovation and enhance technical expertise.",
        imgSrc: fund,
    },
    {
        title: "SRISHTI 6th National Level Technical Project Exhibition & Competition",
        description: "Participated in the SRISHTI 6th National Level Technical Project Exhibition & Competition at Saintgits College of Engineering (Autonomous) in February 2019. Showcased innovative technical projects and engaged with industry experts and peers.",
        imgSrc: srishtti2,
    },
    {
        title: "SRISHTI 7th National Level Technical Project Exhibition & Competition",
        description: " Participated in the SRISHTI 7th National Level Technical Project Exhibition & Competition at Saintgits College of Engineering (Autonomous). Showcased innovative technical projects and engaged with peers and industry experts.",
        imgSrc: srishti1,
    },
    {
        title: "Robotics Workshop at AMUP School, Ullanam",
        description: " Conducted a robotics class for students at AMUP School, Ullanam. Shared knowledge on robotics, encouraging creativity and fostering technical skills among young, enthusiastic learners.",
        imgSrc: amup,
    },
    {
        title: "Robotics Workshop at SKSBV Residential Camp",
        description: "Conducted a robotics workshop at the SKSBV Residential Camp on May 16-17, 2024. Engaged students with hands-on learning, fostering technical skills and enthusiasm for robotics and innovation. ",
        imgSrc: camp2,
    },
    {
        title: "DIKSHA'20 Project Expo – CUIET",
        description: "Participated in the DIKSHA'20 Project Expo at Calicut University Institute of Engineering and Technology (CUIET). Presented innovative projects and engaged in knowledge-sharing with peers and industry professionals.",
        imgSrc: diksha,
    },
    {
        title: "Judge at TechFest – AL Huda Central School, Kadampuzha",
        description: " Served as a judge for project evaluations at the TechFest hosted by AL Huda Central School, Kadampuzha. Assessed innovative student projects and provided feedback to inspire creativity and innovation. ",
        imgSrc: alhuda,
    },


    {
        title: "Judge at TechFest – Farook English Medium School Kottakka",
        description: "Served as a judge for project evaluations at the TechFest hosted by Farook English Medium School. Assessed innovative student projects, offering feedback to inspire creativity and technical excellence. ",
        imgSrc: farookstate,
    },

    {
        title: "Malabar Innovation Festival 2018 – Special Prize Winner",
        description: " Participated in the Design & Challenge Contest at Malabar Innovation Festival 2018, hosted by the Innovation Hub (Regional Science Centre & Planetarium). Won a special prize in the Innovation Project category for a CNC machine project.",
        imgSrc: malabar,
    },

    {
        title: "Entertaining Robot for Suprabhatham Newspaper",
        description: " Successfully designed and developed an entertaining robot for Suprabhatham, a leading Malayalam newspaper, for their marketing and advertising purposes during the Kerala School Kalolsavam. The robot was installed at their stall, effectively attracting and engaging audiences. ",
        imgSrc: supra,
    },

    {
        title: "CNC 3D Printer from Electronic Waste",
        description: " Developed a functional CNC 3D printer using repurposed electronic waste. This project highlights ingenuity and sustainability by transforming discarded materials into a versatile and efficient manufacturing tool.",
        imgSrc: printer,
    },
    {
        title: "M-BOT: Autonomous Medical Cum Delivery Robot",
        description: "Completed as my final-year project, M-BOT is an autonomous medical and delivery robot designed for efficient healthcare assistance. This project won ₹25,000 as a district-level winner in the Young Innovators Programme (YIP) and was selected for the state-level competition.",
        imgSrc: mbot,
    },
    {
        title: "CNC Plotter Machine from Electronic Waste",
        description: " Built a small CNC plotter machine using repurposed electronic waste. This project emphasizes creativity and sustainability by transforming discarded materials into a functional plotting device for precision drawing and design.",
        imgSrc: cnc,
    },




];

const Activities = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 200);
    }, []);

    return (
        <section id="Activities" className="activities-section">
            <h2>My Activities</h2>
            <p>
                Welcome to my activities section, where I highlight my involvement in technical and innovative endeavors. From conducting robotics classes and workshops to participating in competitions and judging at TechFests, these experiences have honed my skills and allowed me to contribute to the tech community. Here are some key moments I cherish:
            </p>
            <Scrollbars
                style={{ height: "40rem" }}
                // autoHide
                renderThumbVertical={({ style, ...props }) => (
                    <div
                        {...props}
                        style={{
                            ...style,
                            backgroundImage: "linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%)", // Corrected to use backgroundImage
                            borderRadius: "10px",
                            width: "8px",

                        }}
                    />
                )}
            >
                <div className="activities-container">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            className="activity-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                        >
                            <img src={activity.imgSrc} alt={activity.title} />
                            <h3>{activity.title}</h3>
                            <p>{activity.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Scrollbars>
        </section>
    );
};

export default Activities;
