import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";


const LandingPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center min-h-screen ">
      <div className=" top-4 border  border-gray-300 w-[70%] relative">
        <p className='border border-green-500 w-[48%]'></p>
      </div>
       <Link to="/userinterest">
      <p className='text-[gray] text-[20px] md:mr-[45rem] relative top-[4px] xl:mr-[69rem] mr-[18rem] '><FaAngleLeft /></p>
      </Link>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold py-4 text-green-600">Welcome to Brilliant</h1>
      </div>
      <div className='items-center w-full justify-center gap-8 p-7  xl:flex md:flex xl:gap-[6rem]  md:gap-[3rem] p-7 '>
        <div className="w-64">
          <img className='w-[22rem] h-[17rem] rounded' src="https://media.wired.com/photos/5af0e757d9c6661e97c8d36f/master/w_1600%2Cc_limit/circleswingdiagram.png" alt="Illustration" />
        </div>
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-4">You're in the right place</h2>
          <p className="text-gray-600 xl:w-[28rem] w-[22rem] text-lg">
            Brilliant helps you improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.
          </p>
        </div>
      </div>
      <Link to="/mathcomfort">
        <button className="mt-8 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900">Continue</button>
      </Link>
    </div>
  );
};

export default LandingPage;
