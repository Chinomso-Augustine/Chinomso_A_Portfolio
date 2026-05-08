import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./About";
import Resume from "./Resume";
import Case1 from "./Case1";
import Refill from "./Refill";
import JobMadeEasy from "./JobMadeEasy";
import LearningRhino8 from "./LearningRhino8";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/case1" element={<Case1 />} />
        <Route path="/refill" element={<Refill />} />
        <Route path="/jobmadeeasy" element={<JobMadeEasy />} />
        <Route path="/learningrhino8" element={<LearningRhino8 />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
