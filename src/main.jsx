import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

// import App from "./App.jsx";
import "./index.css";

// Page imports
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
