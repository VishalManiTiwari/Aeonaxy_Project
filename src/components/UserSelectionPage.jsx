import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSelectionPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: 'Student or soon to be enrolled', icon: '👨‍🎓' },
    { label: 'Professional pursuing a career', icon: '👩‍💼' },
    { label: 'Parent of a school-age child', icon: '👨‍👧' },
    { label: 'Lifelong learner', icon: '👴' },
    { label: 'Teacher', icon: '🧑‍🏫' },
    { label: 'Other', icon: '👤' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className=" top-4 border  border-gray-300 w-[70%] relative">
        <p className='border border-green-500 w-[16%]'></p>
      </div>
      <div className="max-w-md w-full p-8 bg-white rounded-lg ">
        <h2 className="text-3xl font-bold xl:text-[1.8rem] mb-4">Which describes you best?</h2>
        <p className="text-gray-600 mb-8">This will help us personalize your experience.</p>
        <div className="flex flex-col space-y-4">
          {options.map((option) => (
            <button
              key={option.label}
              onClick={() => handleOptionChange(option.label)}
              className={`flex items-center xl:text-[1.3rem] justify-between px-4 xl:w-[33rem]  py-2 xl:py-3 rounded-md transition-colors duration-300 ${
                selectedOption === option.label
                  ? ' shadow-2xl bg-green-200 border border-gray-300 text-green-700'
                  : ' border border-gray-300 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="flex items-center ">
                <span className="mr-2">{option.icon}</span>
                <span>{option.label}</span>
              </span>
              {selectedOption === option.label && <span className="text-green-700">Selected</span>}
            </button>
          ))}
        </div>
        <div className='text-center xl:ml-[10rem]'>
         {selectedOption ? 
          <Link to="/userinterest">
          <button className="mt-8 px-8 py-2 bg-black text-white rounded-md">Continue</button>
          </Link>
          : 
          <button className="mt-8 px-8 py-2 bg-gray-300 text-white rounded-md">Continue</button>
        }
        </div>
      </div>
    </div>
  );
};

export default UserSelectionPage;




