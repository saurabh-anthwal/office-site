import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";

const HomePageBanner = () => {
  return (
    <section className="relative md:h-[50rem] h-[60rem] flex flex-col items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: `url('https://html.rrdevs.net/zimis/assets/imgs/banner/banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div> 
        <div className="relative space-y-8 container mx-auto px-6 md:px-12 z-10 font-Syne">   
          <button className="bg-[#6000FF] hover:bg-white hover:text-black text-white py-2 px-8 rounded-full transition-all duration-300 ease-in-out">
            Solutions for Every Industry
          </button>

          <h1 className="">
            Unlocking the Potential of<br />Artificial Intelligence
          </h1>

          <p className="mb-8 max-w-[60%]">
            Curabitur tempus, urna sed rutrum iaculis, nibh metus pretium elit, quis fermentum leo
            lacus sem potenti. Curabitur faucibus elit fringilla consectetur ipsum.
          </p>

          <div className="flex justify-start space-x-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-4 px-8 rounded-full transition-all duration-300 ease-in-out shadow-lg">
              Get Started Now
            </button>
            <button className="border bg-[#ffffff1a] border-none flex items-center gap-2 border-orange-500 hover:bg-orange-100 text-orange-500 py-4 px-8 rounded-full transition-all duration-300 ease-in-out">
              <FaRegCirclePlay/>
              Watch Demo
            </button>
          </div>
        </div>
    </section>
  )
}

export default HomePageBanner