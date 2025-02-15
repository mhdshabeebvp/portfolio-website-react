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
        title: "CNC 3D Printer from Electronic Waste",
        description: " Developed a functional CNC 3D printer using repurposed electronic waste. This project highlights ingenuity and sustainability by transforming discarded materials into a versatile and efficient manufacturing tool.",
        imgSrc: printer,
    },
    {
        title: "Judge at TechFest – AL Huda Central School, Kadampuzha",
        description: " Served as a judge for project evaluations at the TechFest hosted by AL Huda Central School, Kadampuzha. Assessed innovative student projects and provided feedback to inspire creativity and innovation. ",
        imgSrc: alhuda,
    },
    {
        title: "Robotics Class at AMUP School, Ullanam",
        description: " Conducted a robotics class for students at AMUP School, Ullanam. Shared knowledge on robotics, encouraging creativity and fostering technical skills among young, enthusiastic learners.",
        imgSrc: amup,
    },
    {
        title: "Robotics Workshop at SKSBV Residential Camp",
        description: "Conducted a robotics workshop at the SKSBV Residential Camp on May 16-17, 2024. Engaged students with hands-on learning, fostering technical skills and enthusiasm for robotics and innovation. ",
        imgSrc: camp2,
    },
    {
        title: "CNC Plotter Machine from Electronic Waste",
        description: " Built a small CNC plotter machine using repurposed electronic waste. This project emphasizes creativity and sustainability by transforming discarded materials into a functional plotting device for precision drawing and design.",
        imgSrc: cnc,
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
];

const Activities = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 200);
    }, []);

    return (
        <section id="Activities" className="activities-section">
            <h2>My Activities</h2>
            <Scrollbars
                style={{ height: "35rem" }}
                autoHide
                renderThumbVertical={({ style, ...props }) => (
                    <div
                        {...props}
                        style={{
                            ...style,
                            backgroundColor: "#ffffff", // White scrollbar
                            borderRadius: "10px",
                            width: "5px"
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
