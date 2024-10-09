import React,{useState,useEffect} from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import Image from 'next/image';
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
import AnimatedText from '@/components/animation/AnimatedTextSteps';

const OurPortfolio = () => {
    //our portfolio slider
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animating, setAnimating] = useState(false);
  
      const slides = [
        {
          title: "Bilder – Gutenberg Post Blocks",
          description: "Egestas dui id ornare arcu odio. Euismod lacinia at quis risus sed vulputate odio. tortor vel odio. Vivamus eget malesuada lacus.",
          features: [
            " Advanced Query Builder",
            " Dynamic Post Slider",
            " Ajax Powered Post Filter",
            " Pagination and Load More",
          ],
          image: "https://html.rrdevs.net/zimis/assets/imgs/our-portfolio/our-portfolio__item-1.jpg",
        },
        {
          title: "SEO Optimization Tools",
          description: "Boost your website's visibility with advanced SEO tools. Reach the top rankings with our easy-to-use and customizable features.",
          features: [
            "Keyword Analysis",
            "Page Speed Optimization",
            "Meta Tag Generator",
            "SEO-Friendly URLs",
          ],
          image: "https://html.rrdevs.net/zimis/assets/imgs/our-portfolio/our-portfolio__item-2.jpg",
        },
      ];    
  
  
    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);
      return () => clearInterval(interval);
    }, [currentSlide]);
  
    const handleNext = () => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setAnimating(false);
      }, 500); 
    };
  
    const handlePrev = () => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
        setAnimating(false);
      }, 500);
    };
  
    const handleDotClick = (index:number) => {
      setCurrentSlide(index);
    };
    
  return (
    <div className="max-w-[90%] m-auto py-12">
    <div className='text-center my-10'>
    <button className="border-2 border-gray-200 rounded-full px-4 yellow-text text-base lg:text-lg tracking-normal font-[800] bg-transparent py-1 mb-4">Our Portfolio</button>
    <AnimatedText text="Explore Our Products" />
    <div className='relative'>
          <div
            className={`relative overflow-hidden text-left space-y-5 p-10 md:p-20 shadow-lg bg-[#D2E0EA] rounded-3xl transition-transform duration-500 ease-out ${
              animating ? "opacity-80" : "opacity-100"
            }`}
            style={{
              transform: `translateX(0)`,
            }}
          >

        <div className='absolute top-[-15rem] right-[-5rem] border-[8rem] border-gray-50 bg-[#D2E0EA] p-40 rounded-full h-1/2 transition-transform duration-500 ease-in-out'
          style={{
            animation: 'scaleSize 2s infinite ease-in-out', // Add scale animation
          }}
        ></div>
        <h2 className='my-4' style={{ zIndex: 10, position: 'relative' }}>{slides[currentSlide].title}</h2>
        <p className='my-4'>{slides[currentSlide].description}</p>
        <ul className='py-4 font-semibold grid grid-cols-2 gap-5 md:w-[60%]'>
          {slides[currentSlide].features.map((feature, index) => (
            <li key={index} className='flex items-center gap-1'>
              <IoIosCheckmarkCircle className="w-7 h-7 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="main-button">More Details</button>
        <div className='flex justify-center md:w-[50%] m-auto'>
          <Image
            src={slides[currentSlide].image}
            alt="Slide image"
            width={500}
            height={300}
            layout="responsive"
            className="rounded-3xl"
          />
        </div>
      </div>
          
      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 text-3xl p-4 bg-[#D2E0EA] border-[1px] border-gray-400 rounded-full shadow-lg hover:bg-gray-100"
        style={{ width: "70px", height: "70px", display: "flex", justifyContent: "center", alignItems: "center" }}
        onClick={handlePrev}
      >
        <FaAngleLeft/>
      </button>
          
      {/* Next Button */}
      <button
        className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 text-3xl p-4 bg-[#D2E0EA] border-[1px] border-gray-400 rounded-full shadow-lg hover:bg-gray-100"
        style={{ width: "70px", height: "70px", display: "flex", justifyContent: "center", alignItems: "center" }}
        onClick={handleNext}
      >
        <FaAngleRight />
      </button>

        {/* Dots for Slide Navigation */}
        <div className="absolute bottom-[-4rem] left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${index === currentSlide ? 'bg-[#6000FF]' : 'border-[0.5px] border-black'}`}
                style={{ cursor: 'pointer' }}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
    </div>

  </div>
  </div>
  )
}

export default OurPortfolio