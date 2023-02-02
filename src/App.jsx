import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="container">
      <Introduction />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
