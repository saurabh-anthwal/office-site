import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const NewsAndBlogs = () => {
  // Our news and blogs
  const newsSlides = [
    {
      id: 1,
      image: 'https://html.rrdevs.net/zimis/assets/imgs/blog/blog-2.jpg',
      alt: 'Slide 1',
      title: 'Through a combination of lectures, readings, and discussions.',
      description: 'Through a combination of lectures, readings, and discussions.',
      date: '23 March 2024',
    },
    {
      id: 2,
      image: 'https://html.rrdevs.net/zimis/assets/imgs/blog/blog-1.jpg',
      alt: 'Slide 2',
      title: 'AI in Everyday Life: How It Impacts You',
      description: 'Through a combination of lectures, readings, and discussions.',
      date: '23 March 2024',
    },
    {
      id: 3,
      image: 'https://html.rrdevs.net/zimis/assets/imgs/blog/blog-2.jpg',
      alt: 'Slide 3',
      title: 'Exploring the AI impacts in the healthcare',
      description: 'This is the third slide Exploring the AI impacts in the healthcare',
      date: '23 March 2024',
    },
    {
      id: 4,
      image: 'https://html.rrdevs.net/zimis/assets/imgs/blog/blog-1.jpg',
      alt: 'Slide 4',
      title: 'AI Revolution in Healthcare',
      description: 'Exploring the AI impacts in the healthcare industry.',
      date: '24 March 2024',
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    // Function to handle resizing
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // Show 1 slide on small screens
      } else {
        setSlidesToShow(2); // Show 2 slides on larger screens
      }
    };

    // Initial check
    handleResize();

    // Listen to window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate visible slides based on screen size
  const visibleSlides = newsSlides.slice(currentIndex, currentIndex + slidesToShow);

  // Manually select the slide via button click
  const selectedSlide = (index: number) => {
    // Ensure index is within the range
    setCurrentIndex(index < 0 ? 0 : index >= newsSlides.length - slidesToShow + 1 ? newsSlides.length - slidesToShow : index);
  };

  return (
    <div className="max-w-[90%] md:max-w-[80%] m-auto py-10 md:py-20">
      <div className="text-center">
        <button className="border-2 border-gray-200 rounded-full px-4 yellow-text text-base lg:text-lg tracking-normal font-[800] bg-transparent py-1 mb-4">
          Our news & Blogs
        </button>
        <h2 className="mb-6">See our latest news</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
        {visibleSlides.map((el) => (
          <div
            key={el.id}
            className="h-auto w-full flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-[1.02]"
          >
            <Image
              height={200}
              width={200}
              src={el.image}
              alt={el.alt}
              className="w-full rounded-lg object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs md:text-sm text-gray-500 mb-2">{el.date}</p>
                <h4 className="text-base md:text-lg leading-tight font-semibold mb-2 md:mb-3 text-gray-800">{el.title}</h4>
                <p className="text-xs md:text-sm">{el.description}</p>
              </div>
              <div className="mt-3 md:mt-0 text-left py-2 rounded-lg self-start">
                <a href="#" className="text-md font-bold text-black">Read More</a> {/* Placeholder href */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-6 md:my-10">
        {newsSlides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => selectedSlide(slideIndex)}
            className={`mx-1 p-2 border-2 rounded-full ${
              currentIndex === slideIndex ? 'bg-gray-300 border-gray-300' : 'border-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsAndBlogs;
