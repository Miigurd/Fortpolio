import React from "react";


export function ProjectCard({ img, title, desc }) {
    return (
        <div className="col-md-4 mb-4 d-flex justify-content-center">
            <div className="card h-100 shadow-sm">
                <img src={img} className="card-img-top" alt={title} style={{ height: '450px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                </div>
            </div>
        </div>
    );
}