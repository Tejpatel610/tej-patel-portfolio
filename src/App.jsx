import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="relative bg-[#050414] overflow-hidden">
      <div className="relative z-10 pt-20">
        <Navbar />
        <Footer />
      </div>
    </div>
  );
};

export default App;
