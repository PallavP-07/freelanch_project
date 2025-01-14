import Image from 'next/image'
import React from 'react'
import NavigationMenuDemo from '@/components/navbar/index'
const HeroBanner = () => {
  return (
    <>
      <NavigationMenuDemo />
      <div className="relative w-full h-[60vh] md:h-[40vh] lg:h-[75vh]">

        <Image
          className="w-full h-100 object-contain"
          src="/hero-banner.png"
          alt="hero-banner"
          layout="fill"
          objectFit="cover"
        />


        <div className="bg-gradient-to-r  from-zinc-600 via-black opacity-90 to-zinc-600 absolute inset-0 flex items-center justify-center text-white text-center">
          <div className="flex flex-wrap w-[600px] p-3 sm:w-[600px] md:w-[700px]  xl:w-[800px] flex-col items-center justify-center">

            <h1 className="border-b font-normal tracking-[5px] border-white w-full pb-8 text-[55px] md:text-[76px] leading-[65px] sm:text-3xl md:text-4xl ">
              Functions
            </h1>


            <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px] font-light leading-6 text-wrap text-center mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, maiores,
              incidunt ipsam dolor alias architecto ea quis magnam amet natus voluptatem autem quae,
              tempora id. Nostrum dolorum nihil tenetur iusto.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
