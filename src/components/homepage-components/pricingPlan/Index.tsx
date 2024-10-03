import React, { useState } from 'react';
import { RiToggleLine } from 'react-icons/ri';
import { BiSolidToggleLeft } from 'react-icons/bi';

const PricingPlan = () => {
  const pricingPlans = [
    {
      planName: 'Standard Plan',
      price: 50,
      features: [
        { label: 'Priority email & chat support', enabled: true },
        { label: 'Access 12+ use-cases', enabled: true },
        { label: 'Generate 1,000 AI Words / month', enabled: true },
        { label: 'Google Docs style editor', enabled: false },
        { label: 'Compose & command features', enabled: false },
      ],
    },
    {
      planName: 'Personal Plan',
      price: 30,
      features: [
        { label: 'Priority email & chat support', enabled: true },
        { label: 'Access 12+ use-cases', enabled: true },
        { label: 'Generate 1,000 AI Words / month', enabled: true },
        { label: 'Google Docs style editor', enabled: false },
        { label: 'Compose & command features', enabled: false },
      ],
      isHighlighted: true,
    },
    {
      planName: 'Premium Plan',
      price: 50,
      features: [
        { label: 'Priority email & chat support', enabled: true },
        { label: 'Access 12+ use-cases', enabled: true },
        { label: 'Generate 1,000 AI Words / month', enabled: true },
        { label: 'Google Docs style editor', enabled: false },
        { label: 'Compose & command features', enabled: false },
      ],
    },
  ];

  const [activePlan, setActivePlan] = useState(0);
  const [payTime, setPayTime] = useState('year');

  const togglePayTime = () => {
    setPayTime((prevTime) => (prevTime === 'year' ? 'month' : 'year'));
  };

  const selectPlan = (index:number) => {
    setActivePlan(index);
  };

  return (
    <div className="max-w-[80%] m-auto py-12">
      <div className="text-center">
        <button className="border-2 border-gray-200 rounded-full px-4 yellow-text text-base lg:text-lg tracking-normal font-[800] bg-transparent py-1 mb-4">
          Pricing Plan
        </button>
        <h2 className="mb-8">
          Choose the best plan that <br />
          you want
        </h2>
      </div>
      <div className="flex p-4 text-lg justify-center items-center gap-2">
        <span>Pay Monthly</span>
        <span onClick={togglePayTime} className="cursor-pointer">
          {payTime === 'year' ? (
            <BiSolidToggleLeft className="text-indigo-500 text-5xl" />
          ) : (
            <RiToggleLine className="text-indigo-500 text-5xl" />
          )}
        </span>
        <span>Pay Yearly</span>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              onClick={() => selectPlan(index)}
              className={`p-8 rounded-lg shadow-lg transition-transform duration-300 cursor-pointer
              ${activePlan === index ? 'scale-105 bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
              style={{
                height: activePlan === index ? 'auto' : 'initial',
              }}
            >
              <h2 className="text-xl font-semibold mb-4">{plan.planName}</h2>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-bold mb-2">
                  ${payTime === 'year' ? plan.price * 12 : plan.price}
                </p>
                <p className="text-sm mb-4">/ {payTime}</p>
              </div>
              <p className="text-sm mb-6">
                Duis aute irure dolor in reprehenderit voluptate dolore eu fugiat nulla
                pariatur.
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span
                      className={`${
                        feature.enabled ? 'text-purple-500' : 'text-gray-400'
                      } mr-3`}
                    >
                      {feature.enabled ? '✔' : '✖'}
                    </span>
                    <span className={`${feature.enabled ? '' : 'text-gray-400'}`}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 ${
                  activePlan === index ? 'bg-white text-black' : 'bg-gray-900 main-button'
                } hover:opacity-90`}
              >
                Start Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
