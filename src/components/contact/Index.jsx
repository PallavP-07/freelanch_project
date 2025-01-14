import Image from 'next/image'
import React from 'react'

function ContactUs() {
  return (
    <div className="relative h-[30vh] lg:h-[60vh] bg-black">
      <div className="absolute inset-0 flex items-center justify-end">
        <Image 
          src="/contact-banner.png" 
          width={300} 
          height={500} 
          className="object-cover md:w-[280px] lg:w-[530px] h-full hidden md:block" 
          alt="Contact Us Banner" 
          loading="lazy"  // lazy loading for better performance
        />
      </div>
      {/* The gradient overlay on top */}
      <div className="absolute flex justify-start px-10 md:px-20 lg:px-40 items-center inset-0 bg-gradient-to-r from-black via-black to-transparent">
        <div className="border-l-4 border-gray-400 px-4 flex flex-col space-y-2">
          <span className="text-white text-sm md:text-base mt-4">Have any Question?</span>
          <h2 className="text-white  text-3xl md:text-4xl  leading-tight tracking-wide">
            Contact Us Today
          </h2>
          <button className="bg-green-700 w-40 rounded-sm  px-2 py-2 text-lg text-white hover:bg-green-800 transition-all">
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
