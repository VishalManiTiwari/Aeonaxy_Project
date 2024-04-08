import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";


const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className=" top-4 border  border-gray-300 w-[70%] relative">
        <p className='border border-green-500 w-[100%]'></p>
      </div>
       <Link to="/mathcomfort">
      <p className='text-[gray] text-[20px] relative top-[4px] xl:mr-[68rem] mr-[17rem] md:mr-[45rem]'><FaAngleLeft /></p>
      </Link>
      <div className="xl:flex md:flex gap-[5rem] items-center">
        <div className="relative mt-7 ml-5 mb-8 md:mb-0">
          <img
            className="xl:w-[20rem] md:w-[20rem] w-[18rem] rounded-full shadow-lg"
            src="https://i.pinimg.com/originals/57/d3/15/57d31534002544a467d3876188b313ec.jpg"
            alt=""
          />
          <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 bg-yellow-400 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.885l-3.367 4.658-1.718-1.262a.75.75 0 00-1.03 1.097l2.5 1.832a.75.75 0 00.974-.073l4-5.367z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="text-center mb-8 md:text-left">
          <h2 className="text-[2.4rem] font-bold mb-2">You're on your way!</h2>
          <div className="flex justify-center md:justify-start mb-4">
            <div className="text-yellow-400 text-[2rem] mr-1">★</div>
            <div className="text-yellow-400 text-[2rem] mr-1">★</div>
            <div className="text-yellow-400 text-[2rem] mr-1">★</div>
            <div className="text-yellow-400 text-[2rem] mr-1">★</div>
            <div className="text-yellow-400 text-[2rem]">★</div>
          </div>
          <p className="text-gray-600 xl:w-[28rem] w-[22rem] mb-2">
            "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real-world problem-solving situations."
          </p>
          <p className="text-gray-600 font-semibold">– Jacob S.</p>
        </div>
      </div>
      <Link to="/loading">
        <button className="mt-8 px-8 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300">
          Continue
        </button>
      </Link>
    </div>
  );
};

export default SuccessPage;
