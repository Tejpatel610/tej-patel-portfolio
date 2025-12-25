import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });


  return (
    <div
      className="relative bg-[#050414] overflow-hidden"
      onMouseMove={(e) => {
        setMouse({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      {/* GLOBAL MOUSE GLOW */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          style={{
            transform: `translate(${mouse.x - 250}px, ${mouse.y - 250}px)`,
          }}
          className="w-[500px] h-[500px] rounded-full
          bg-purple-400/10 blur-[120px]
          transition-transform duration-150 ease-out"
        />
      </div>

      {/* EXISTING BACKGROUND EFFECTS */}
      /<BlurBlob position={{ top: "35%", left: "20%" }} size={{ width: "30%", height: "40%" }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 pt-20">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
