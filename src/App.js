import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import './App.css';

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg.png"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Router>
        <div className="d-flex flex-column" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }} >
          <Header />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}