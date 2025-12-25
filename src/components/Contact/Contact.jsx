import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me 🚀
        </h3>

        <form className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
