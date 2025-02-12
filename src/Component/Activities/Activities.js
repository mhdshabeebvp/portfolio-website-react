import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./Activities.css";
import competitionImage from "../../img/activities/1689792545900.jpeg";
const activities = [
    {
        title: "Competitions",
        description: " I had the privilege of attending a robotics class at the prestigious KNM English School in Ponnani. ",
        imgSrc: competitionImage,
    },
    {
        title: "Competitions",
        description: " I had the privilege of attending a robotics class at the prestigious KNM English School in Ponnani. ",
        imgSrc: competitionImage,
    },
    {
        title: "Competitions",
        description: " I had the privilege of attending a robotics class at the prestigious KNM English School in Ponnani. ",
        imgSrc: competitionImage,
    },

    {
        title: "Competitions",
        description: " I had the privilege of attending a robotics class at the prestigious KNM English School in Ponnani. ",
        imgSrc: competitionImage,
    },
    {
        title: "Competitions",
        description: " I had the privilege of attending a robotics class at the prestigious KNM English School in Ponnani. ",
        imgSrc: competitionImage,
    },
    {
        title: "Competitions",
        description: " I had the privilege of attending a robotics class at the prestigious KNM English School in Ponnani. ",
        imgSrc: competitionImage,
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
