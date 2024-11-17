import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./screens/about";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<div>Home</div>} />
          <Route path="profile" element={<div>Profile</div>} />
          <Route path="settings" element={<div>Settings</div>} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
