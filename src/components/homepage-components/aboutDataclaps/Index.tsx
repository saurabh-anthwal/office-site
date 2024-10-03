import React from 'react';
import Image from 'next/image';
import { GiCheckMark } from 'react-icons/gi';

const AboutDataclaps = () => {
  return ( 
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center max-w-[95%] lg:max-w-[90%] mx-auto py-12">
      <div className="mb-20 relative top-0 flex justify-center items-center h-full">
        <Image
          src="https://html.rrdevs.net/zimis/assets/imgs/about/about-zimis-1.jpg"
          alt="about-img"
          height={400} // Adjusted for mobile
          width={400}
          className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute left-4 lg:left-8 bottom-[-3rem] lg:bottom-[-4rem]">
          <Image
            src="https://html.rrdevs.net/zimis/assets/imgs/about/about-zimis-2.jpg"
            alt="about-img"
            height={400} // Adjusted for mobile
            width={400}
            className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="py-10 lg:py-20">
        <button className="border-2 border-gray-200 rounded-full px-4 yellow-text text-base lg:text-lg tracking-normal font-[800] bg-transparent py-1 mb-4">
          About Dataclaps
        </button>
        <h2 className="mb-6 font-bold">
          Artificial Intelligence is not a matter of science fiction.
        </h2>
        <p className="mb-8 text-[0.9rem] lg:text-[1rem]">
          Egestas dui id ornare arcu odio. Euismod lacinia at quis risus sed vulputate odio. tortor vel odio. Vivamus eget malesuada lacus. Cras bibendum ligula at rutrum ornare. Donec malesuada eros et enim volutpat, id tempus nibh malesuada.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {['Content Services', 'Strategy Planning', 'AI Development', 'Data Analysis'].map((service, index) => (
            <div key={index} className="w-[48%]">
              <div className="bg-white px-2 py-2 rounded-full border-2 border-gray-100 shadow">
                <div className="flex items-center gap-2">
                  <GiCheckMark className="text-2xl text-[#6000FF]" style={{ transform: 'rotate(15deg)' }} />
                  <span className="ml-2 text-[0.9rem] lg:text-lg">{service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="main-button" style={{ padding: '0.8rem 2.8rem' }}>
          Explore More
        </button>
      </div>
    </div>
  );
};

export default AboutDataclaps;
