import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-[7vw] md:px-[7vw] lg:px-[20vw]">
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Tej</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">patel</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
