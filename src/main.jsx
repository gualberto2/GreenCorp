import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/GlobalComponents/Navbar.jsx";

// import App from "./App.jsx";
import "./index.css";

// Page imports
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";

import Footer from "./components/GlobalComponents/Footer.jsx";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
