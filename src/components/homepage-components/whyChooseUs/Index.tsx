import AnimatedText from '@/components/animation/AnimatedTextSteps'
import React,{useState} from 'react'

const WhyChooseUs = () => {
     {/* why choose us */}
     const [tab,setTab]=useState(0)
     const tabData=[
      {id:"01",heading:"Partnership & Support",details:"A web app title is the name or title of a web application that is displayed in the web browser's title bar, tab, or bookmark list."},
      {id:"02",heading:"New Technology",details:"A web app title is the name or title of a web application that is displayed in the web browser's title bar, tab, or bookmark list."},
      {id:"03",heading:"Expertise & Innovation",details:"A web app title is the name or title of a web application that is displayed in the web browser's title bar, tab, or bookmark list."},
     ]
  return (
    <div className='bg-[#D2E0EA] my-10'>
    <div className="max-w-[80%] m-auto py-12 text-center">
    <div>
    <button className="border-2 border-gray-200 rounded-full px-4 yellow-text text-base lg:text-lg tracking-normal font-[800] bg-transparent py-1 mb-4">WHY CHOOSE US</button>
    <div className='md:w-3/4 m-auto'>
    <AnimatedText text="Revolutionize your business with Al technology" />
    </div>
    <div className='grid md:grid-cols-2 justify-between gap-10 md:gap-20 mb-10'>
      {tabData.map((el, index) => (
        <div className='px-4'>
          <div
          key={el.id}
          onClick={() => setTab(index)} // Set the active tab on click
          className={`p-4 text-center space-y-5 cursor-pointer transition-all duration-300 ${
            tab === index
              ? ' border-b-4 border-[#6000FF]'
              : ''
          }`}
          >
            <h1 className={`${ tab === index ? "text-[#000]" : "text-gray-400"}`}>{el.id}</h1>
            <h2 className={`font-semibold text-2xl ${ tab === index && "text-[#6000FF]"}`}>{el.heading}</h2>
            <p>{el.details}</p>
          </div>
        </div>
      ))}
    </div>
    <div className='relative py-2 border-t-2 border-gray-300 '>
    </div>
  </div>
  </div>
  <div className="px-4">
        <iframe
          className=" w-full h-screen rounded-3xl"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/blrw3LTAZIE?si=3vcUpSA7VkdLB5ch"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
  </div>
  )
}

export default WhyChooseUs