import Image from 'next/image'
import React from 'react'

function ContactUs() {
  return (
    <div className="relative h-[30vh]  md:h-[316px] lg:h-[300px] bg-black">
      <div className="absolute inset-0 flex items-center justify-end">
        <Image 
          src="/contact-banner.png" 
          width={300} 
          height={500} 
          className="object-cover opacity-50 md:w-[500px]   lg:w-[530px]  h-full hidden md:block" 
          alt="Contact Us Banner" 
          loading="lazy"  // lazy loading for better performance
        />
      </div>
      {/* The gradient overlay on top */}
      <div className="absolute flex justify-start px-10 md:px-20 lg:px-40 items-center inset-0 bg-gradient-to-r from-[#131313] via-[#131313] to-transparent">
        <div className="border-l-4 border-white px-4 flex flex-col space-y-2">
          <span className="text-white font-light text-lg leading-5 md:text-base ">Have any Question?</span>
          <h2 className="text-white  text-3xl lg:text-[44px] leading-[54px]  tracking-[2px]">
            Contact Us Today
          </h2>
          <button className="bg-green-700 w-40 rounded-sm text-xl px-5 py-3 leading-6 font-semibold tracking-widest text-white hover:bg-green-800 transition-all">
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
