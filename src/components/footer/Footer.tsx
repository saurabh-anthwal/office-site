import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaSquareVimeo } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#010915] text-gray-300 pt-10">
      <div className="max-w-[85%] mx-auto">
        {/* Highlight Card */}
        <div className="flex justify-center relative">
          <div className="card relative top[-50px] md:top-[-140px] flex flex-col md:flex-row justify-between w-full items-center bg-[#6000FF] p-10 rounded-2xl overflow-hidden text-center md:text-left">
            {/* Background shapes */}
            <div className="absolute inset-0">
              {/* Circle */}
              <div style={{animation: 'scaleSize 2s infinite ease-in-out'}} className="transition-transform duration-500 ease-in-out absolute border-2 border-white opacity-20 rounded-full w-[200px] h-[200px] top-[-50px] left-[-50px] animate-scaleShape"></div>
              {/* Triangle */}
              <div style={{animation: 'scaleSize 2s infinite ease-in-out'}} className="transition-transform duration-500 ease-in-out absolute w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-white opacity-10 bottom-[10px] right-[100px] animate-scaleShape"></div>
              {/* Another Circle */}
              <div style={{animation: 'scaleSize 2s infinite ease-in-out'}} className="transition-transform duration-500 ease-in-out absolute border-2 opacity-20 rounded-full w-[60px] h-[60px] bottom-[0px] left-[100px] animate-scaleShape"></div>
            </div>

            <h6 className="relative z-10 text-3xl text-white font-semibold leading-normal">
              Start your journey with <br />powerful artificial intelligence
            </h6>
            <button className="relative z-10 bg-white text-sm py-2 px-7 rounded-full text-black mt-5 md:mt-0">
              Join Membership
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <img
                src="https://dataclaps.com/wp-content/uploads/2020/09/Screenshot-2023-03-18-at-2.36.25-AM.png"
                alt="Zimis Logo"
                className="w-32 h-10"
              />
            </div>
            <p className="text-[14px] w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <div className="flex space-x-4 mt-5 text-lg">
              <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookSquare/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
              <FaPinterest/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
              <FaSquareVimeo/>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-xl">Company</h3>
            <ul className="space-y-6 text-[16px] text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Team</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-xl">Service</h3>
            <ul className="space-y-6 text-[16px] text-gray-400">
              <li><a href="#" className="hover:text-white">Data Engineering</a></li>
              <li><a href="#" className="hover:text-white">Data & Analytics</a></li>
              <li><a href="#" className="hover:text-white">Object Tracking</a></li>
              <li><a href="#" className="hover:text-white">Prediction System</a></li>
              <li><a href="#" className="hover:text-white">Automations</a></li>
            </ul>
          </div>

          {/* Recent Blogs */}
          <div>
            <h3 className="text-white font-bold mb-6 text-xl">Recent Blogs</h3>
            <ul className="space-y-6">
              <li className="flex space-x-3">
                <img
                  src="https://html.rrdevs.net/zimis/assets/imgs/footer/footer__widget-post-1.jpg"
                  alt="Blog 1"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <p className="text-xs text-gray-400">March 24, 2024</p>
                  <p className="hover:text-white">Demystifying AI: Understanding the Basics</p>
                </div>
              </li>
              <li className="flex space-x-3">
                <img
                  src="https://html.rrdevs.net/zimis/assets/imgs/footer/footer__widget-post-2.jpg"
                  alt="Blog 2"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <p className="text-xs text-gray-400">March 24, 2024</p>
                  <p className="hover:text-white">AI and Creativity: Exploring the Intersection</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-10 py-5 text-center">
          <p className="text-sm">Copyright © 2024 All Rights Reserved by Zimis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
