import React from "react";

export function Home() {
    return (
        <div className="container mt-5 text-center" style={{ paddingBottom: "80px" }}>
            <div className="mb-5">
                <img
                    src="/images/walaakongmatinongpic.png"
                    alt="Profile"
                    className="rounded-circle mb-3"
                    style={{ width: "200px", height: "200px", objectFit: "cover" }}
                />
                <h1>Kirt Asia S. Mag-usara</h1>
                <p className="lead">Unemployed 3rd Year Computer Science Student | Aspiring Developer</p>
            </div>

            <div className="my-5">
                <h3>Get to Know Me</h3>
                <p className="mx-auto" style={{ maxWidth: "600px" }}>
                    I'm an unemployed passionate Computer Science student who loves creating meaningful
                    and functional applications. I enjoy exploring new technologies,
                    improving my problem-solving skills, and building projects that help me
                    grow as a developer.
                </p>
            </div>

            <div className="my-5">
                <h3>Contact Me</h3>
                <p>Email: <strong>kirtmagusara94@gmail.com</strong></p>
                <p>Facebook: <strong>fb.com/miigurd</strong></p>
            </div>
        </div>
    );
}