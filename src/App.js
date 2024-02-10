import React from "react";
import Header from "./common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Footer from "./common/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Features />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
