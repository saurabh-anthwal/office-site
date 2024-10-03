import React, { useState } from 'react';

const QuestionAndAnswer = () => {
  // FAQ items
  const faqItems = [
    {
      title: "How Can I Get Started With Power AI's Services?",
      content:
        'Sed interdum ipsum fermentum, condimentum erat eget, egestas est. Etiam vel justo laoreet, efficitur lectus in, tincidunt magna.',
    },
    {
      title: 'Is Power AI Suitable For Small Businesses?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel urna nec turpis gravida luctus.',
    },
    {
      title: 'How Can Power AI Benefit My Business?',
      content:
        'Nulla facilisi. Fusce id libero in justo sagittis tempus et id elit. Sed ut felis in metus pellentesque scelerisque.',
    },
    {
      title: 'What Services Does Power AI Provide?',
      content:
        'Vivamus commodo cursus purus, sed dapibus lacus mollis ut. Nulla facilisi.',
    },
    {
      title: 'What Is Artificial Intelligence (AI)?',
      content:
        'Integer tincidunt, odio ac tincidunt fermentum, urna turpis cursus ante, nec molestie justo libero sit amet libero.',
    },
  ];

  // Track the open item index
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    // Toggle the selected item or close it if it's already open
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-[90%] lg:max-w-[80%] m-auto py-12">
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className="w-[80%]">
          <button className="border-2 border-gray-200 rounded-full px-4 yellow-text text-base lg:text-lg tracking-normal font-[800] bg-transparent py-1 mb-4">
            Question & Answer
          </button>
          <h2 className="font-bold mb-4">Most questions that are asked by people.</h2>
          <p className="mb-6 text-sm lg:text-base">
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour or randomised words which don't
            look even slightly believable. If you are going to use.
          </p>
          <img
            src="https://html.rrdevs.net/zimis/assets/imgs/question-answer/question-answer.png"
            alt="question & answer"
            className="w-full h-auto"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-3 rounded-lg bg-white shadow-md">
                <button
                  className="flex items-center justify-between w-full p-4 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className={`text-md lg:text-lg font-semibold ${openIndex === index ? 'text-purple-600' : 'text-black'}`}>
                    {item.title}
                  </h3>
                  <span className={`text-2xl ${openIndex === index ? 'text-purple-600' : 'text-black'}`}>
                    {openIndex === index ? '-' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="px-4 pb-4 text-sm lg:text-md">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
