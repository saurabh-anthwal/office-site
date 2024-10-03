import React,{useState} from 'react'
import Image from 'next/image'
import { RiRobot2Line } from "react-icons/ri";
import { IoIosArrowRoundUp } from "react-icons/io";

const OurServices = () => {
  const [ourServices,setOurServices] = useState([
    { title: 'Robotic Automation', icon: 'https://storage.googleapis.com/a1aa/image/zoGB57T2YeW0Qiqq5qYNWfHUlj82y0vtKy1isBp7cX5YcfFnA.jpg', description: 'Egestas dui id ornare arcu odio. Euismod lacinia at quis risus sed vulputate odio. tortor vel odio. Vivamus eget malesuada lacus.' },
    { title: 'Metal and Machining', icon: 'https://storage.googleapis.com/a1aa/image/CdhYv1vFkxKyKxWIXmuHB8Xj7OVy9AOHJDJ6VXZvTaqM3v4E.jpg', description: 'Egestas dui id ornare arcu odio. Euismod lacinia at quis risus sed vulputate odio. tortor vel odio. Vivamus eget malesuada lacus.' },
    { title: 'Electronics & Technology', icon: 'https://storage.googleapis.com/a1aa/image/evn41EWfkImf9I5cQO6Jt3tv8Y6fSyeY7stSvvyfGrq7fvfiTA.jpg', description: 'Egestas dui id ornare arcu odio. Euismod lacinia at quis risus sed vulputate odio. tortor vel odio. Vivamus eget malesuada lacus.' },
    { title: 'Predictive Analysis', icon: 'https://storage.googleapis.com/a1aa/image/lwdvK2useKUIT6g8sjtftOGhluqcIefWvTcIuSaZe7cXx7XcC.jpg', description: 'Egestas dui id ornare arcu odio. Euismod lacinia at quis risus sed vulputate odio. tortor vel odio. Vivamus eget malesuada lacus.' },
    { title: 'Machine Learning', icon: 'https://storage.googleapis.com/a1aa/image/IEHkamddCsYVJFoYfzbQ5rvK3ojavKqG1LdW6OzlHR6yrfiTA.jpg', description: 'Egestas dui id ornare arcu odio. Euismod lacinia at quis risus sed vulputate odio. tortor vel odio. Vivamus eget malesuada lacus.' },
    { title: 'Education & Science', icon: 'https://storage.googleapis.com/a1aa/image/D9i6kpUHN4YfSKbhar3X3mttNBtTM7hV98rvxQYKxQexgfFnA.jpg', description: 'Egestas dui id ornare arcu odio. Euismod lacinia at quis risus sed vulputate odio. tortor vel odio. Vivamus eget malesuada lacus.' },
  ]);

  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which card is hovered
  
  // Function to handle mouse enter (hover)
  const handleMouseEnter = (index:any) => {
    setHoveredIndex(index);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="max-w-[90%] m-auto py-12">
      <div>
        <div className='text-center'>
          <button className="border-2 border-gray-200 rounded-full px-4 yellow-text text-base lg:text-lg tracking-normal font-[800] bg-transparent py-1 mb-4">OUR SERVICES</button>
          <h2 className=" mb-8">
            Save your time to choosing our
            <br />
            qualified services
          </h2>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1'>
        {
          ourServices.map((el,i)=>(
              <div 
                key={i} 
                onMouseEnter={() => handleMouseEnter(i)} // Triggered when mouse hovers over the card
                onMouseLeave={handleMouseLeave} // Triggered when mouse leaves the card
                className={`flex flex-col justify-between space-y-4 p-5 hover:bg-white border-[1px] border-white ${(i === 0 || i === 1 || i === 2) && 'border-t-0'} ${(i === 3 || i === 4 || i === 5) && 'border-b-0'} ${(i === 0 || i === 3) && 'border-l-0'} ${(i === 2 || i === 5) && 'border-r-0'}`}
              >
                <div>
                  <div
                    className={`h-16 w-16 rounded-full flex justify-center items-center text-white text-3xl transition-all duration-300 ease-in-out
                    ${hoveredIndex === i ? 'absolute hidden' : 'block'}`}
                  >
                    <Image 
                      src={el.icon}
                      alt={el.title}
                      height={70}
                      width={70}
                      className="rounded-full"
                    />
                  </div>
                  <h2 className='text-2xl font-[400]'>{el.title}</h2>
                  <p >{el.description}</p>
                </div>
                <div className={`flex justify-center items-center h-12 w-12 ${hoveredIndex === i ? 'bg-[#6000FF] text-white':'border-2'} rounded-full rotate-45 text-2xl`}>
                  <IoIosArrowRoundUp/>
                </div>
              </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default OurServices