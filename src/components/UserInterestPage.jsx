import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";


const UserInterestPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const options = [
    {
      label: 'Learning specific skills to advance my career',
      icon: '📈',
    },
    {
      label: 'Exploring new topics I am interested in',
      icon: '🌍',
    },
    {
      label: 'Refreshing my math foundations',
      icon: '✖️',
    },
    {
      label: 'Exercising my brain to stay sharp',
      icon: '🎯',
    },
    {
      label: 'Something else',
      icon: '👀',
    },
  ];

  return (
    <div className="flex flex-col items-center top-4 relative justify-center min-h-screen px-4">
       <div className=" top-4 border  border-gray-300 w-[70%] relative">
        <p className='border border-green-500 w-[32%]'></p>
      </div>
      <Link to="/">
      <p className='text-[gray] text-[20px] relative top-1 xl:mr-[67rem] mr-[18rem]  md:mr-[42rem]'><FaAngleLeft /></p>
      </Link>
      <h2 className="text-2xl font-bold py-5 mb-4">Which are you most interested in?</h2>
      <p className="text-gray-600 mb-8">Choose just one. This will help us get you started (but won't limit your experience).</p>
      <div className="flex flex-col space-y-4 w-full max-w-md">
        {options.map((option) => (
          <button
            key={option.label}
            onClick={() => handleOptionChange(option.label)}
            className={`flex items-center px-4 py-3 rounded-md transition-colors duration-300 ${
              selectedOption === option.label
                ? 'shadow-2xl bg-green-200 border border-gray-300 text-green-700'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{option.icon}</span>
            <span>{option.label}</span>
            {/* {selectedOption === option.label && <span className="text-green-700 relative ">Selected</span>} */}
          </button>
        ))}
      </div>
      {selectedOption ?
        <Link to="/landing">
        <button className="mt-8 px-4 py-2 bg-black text-white rounded-md">Continue</button>
        </Link>
        : 
        <button className="mt-8 px-4 py-2 bg-gray-400 text-white rounded-md">Continue</button>
      }
    </div>
  );
};

export default UserInterestPage;


