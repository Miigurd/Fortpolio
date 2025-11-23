import React from "react";


export function Skills() {
    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">My Skills</h2>
            <ul className="list-group mx-auto" style={{ maxWidth: "400px" }}>
                <li className="list-group-item">Java</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">HTML & CSS</li>
                <li className="list-group-item">Laravel</li>
                <li className="list-group-item">Git</li>
            </ul>
        </div>
    );
}