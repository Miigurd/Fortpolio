import React from "react";
import { ProjectCard } from "./ProjectCard";


export function Projects() {
    const projectList = [
        {
            img: "/images/override.png",
            title: "Override Cafe",
            desc: "A java project for ordering food products, managing customer orders, and managing product inventory.",
        },
        {
            img: "/images/clinic.png",
            title: "Clinic Management System",
            desc: "A terminal-based clinic management system.",
        },
        {
            img: "/images/bell.png",
            title: "The Last Bell",
            desc: "Game built in HTML.",
        },
    ];


    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">My Projects</h2>
            <div className="row">
                {projectList.map((p, i) => (
                    <ProjectCard key={i} img={p.img} title={p.title} desc={p.desc} />
                ))}
            </div>
        </div>
    );
}