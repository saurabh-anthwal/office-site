import React, { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: '“I have really enjoyed the course and the course content in doing my Advanced Certificate in Nutritional Counselling. The support that I received, especially due to a medical health issue and having to pause for a little while, was accommodated by them.”',
      name: 'Bodrum Salvador',
      position: 'AI & ML Engineer',
      image: 'https://html.rrdevs.net/zimis/assets/imgs/testimonial/testimonial__item-2.jpg',
    },
    {
      id: 2,
      quote: '“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words which dont look even slightly believable. If you are going to”',
      name: 'Saurabh',
      position: 'Backend Developer',
      image: 'https://html.rrdevs.net/zimis/assets/imgs/testimonial/testimonial__item-1.jpg',
    },
    {
      id: 3,
      quote: '“I have really enjoyed the course and the course content in doing my Advanced Certificate in Nutritional Counselling. The support that I received, especially due to a medical health issue and having to pause for a little while, was accommodated by them.”',
      name: 'John Doe',
      position: 'App Developer',
      image: 'https://html.rrdevs.net/zimis/assets/imgs/testimonial/testimonial__item-3.jpg',
    },
    {
      id: 4,
      quote: '“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words which dont look even slightly believable. If you are going to”',
      name: 'Salvador',
      position: 'Web Developer',
      image: 'https://html.rrdevs.net/zimis/assets/imgs/testimonial/testimonial__item-4.jpg',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='bg-[#D2E0EA]'>
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto py-8">
        <section className="py-10 md:py-20">
          <div className="text-center">
            <button className="border-2 border-gray-200 rounded-full px-4 yellow-text text-base lg:text-lg tracking-normal font-[800] bg-transparent py-1 mb-4">
              Testimonials
            </button>
          </div>
          <div className="text-center">
            <h2 className="mb-8">
              What our customers say <br/>about us
            </h2>

            {/* Testimonial Card */}
            <div className="p-4 md:px-0">
              <div className="bg-white space-y-10 rounded-3xl shadow-lg p-6 md:p-12 hover:shadow-xl transform transition duration-300 ease-in-out">
                <p className="mb-6 text-base md:text-2xl text-gray-900 md:leading-10">
                  {testimonials[activeIndex].quote}
                </p>
                <div className="flex items-center justify-center">
                  <div className="mr-4">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm md:text-lg font-semibold text-gray-900">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-xs md:text-base text-gray-600">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-8 md:mt-12 px-4 md:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {testimonials.map((el, index) => (
                <div
                  key={el.id}
                  className={`flex items-center p-2 cursor-pointer border-t-2 ${
                    activeIndex === index ? 'border-indigo-500' : 'border-gray-200'
                  }`}
                  onClick={() => setActiveIndex(index)} // Clicking a thumbnail sets the activeIndex
                >
                  <img
                    src={el.image}
                    alt={el.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                  />
                  <div className="text-left ml-2">
                    <h3 className="text-xs md:text-sm font-semibold text-gray-600">{el.name}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{el.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
