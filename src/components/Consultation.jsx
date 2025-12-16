import React from 'react'
import image from '../assets/ConsultationMan.png'

const Consultation = () => {
  return (
    <div className="w-full bg-green-700 flex flex-col items-center justify-center mt-10 py-10 px-4 gap-6">
      
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans text-white">
        Consultation Form
      </h2>

      {/* Wrapper */}
      <div className="relative w-full md:w-[70%] lg:w-[50%] max-w-275">

        {/* Glass Card */}
        <div className="w-full bg-white/20 backdrop-blur-2xl rounded-2xl p-5 sm:p-8 md:p-10">
          <form className="w-full flex flex-col gap-6 text-white">

            <input
              type="text"
              placeholder="Enter your name"
              className="bg-transparent border-b border-white/60 py-2 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-b border-white/60 py-2 focus:outline-none"
            />

            <input
              type="number"
              placeholder="Enter your mobile number"
              className="bg-transparent border-b border-white/60 py-2 focus:outline-none"
            />

            <textarea
              rows="4"
              placeholder="Enter your description"
              className="bg-transparent border-b border-white/60 py-2 focus:outline-none resize-none"
            />

            <button className="mt-4 bg-white text-green-700 py-2 rounded-lg font-medium hover:bg-green-100 transition">
              Submit
            </button>

          </form>
        </div>

        {/* Side Image (Desktop only) */}
        <img
          src={image}
          alt="man"
          className="hidden lg:block absolute bottom-0 -right-38.5 w-[45%] max-h-112.5 object-contain"
        />

      </div>
    </div>
  )
}

export default Consultation
