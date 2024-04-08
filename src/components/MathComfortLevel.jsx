import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";


const MathComfortLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const levels = [
    { id: 1, name: 'Introductory', example: '5 × 1/2 = ?' },
    { id: 2, name: 'Foundational', example: '3x + 5 = 4' },
    { id: 3, name: 'Intermediate', example: 'x = (-b ± √(b^2 - 4ac)) / 2a' },
    { id: 4, name: 'Advanced', example: '∫(0^x) x^3dx = ?' },
  ];

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className=" top-4 border  border-gray-300 w-[70%] relative">
        <p className='border border-green-500 w-[64%]'></p>
      </div>
       <Link to="/userinterest">
      <p className='text-[gray] text-[20px] relative xl:mr-[69rem] mr-[19rem] md:top-[4px] top-1 xl:top-[4px] md:mr-[45rem]'><FaAngleLeft /></p>
      </Link>
      <div className="bg-white rounded-md shadow-md p-6 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">What is your math comfort level?</h2>
        <p className="mb-6">Choose the highest level you feel confident in — you can always adjust later.</p>
        <div className="grid grid-cols-2 gap-4">
          {levels.map((level) => (
            <button
              key={level.id}
              className={`py-4 px-6 rounded-md shadow-md ${
                selectedLevel === level.id
                  ? ' border border-red-300 '
                  : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => handleLevelSelect(level.id)}
            >
              <div className="text-sm font-medium">{level.name}</div>
              <div className="text-xl font-bold">{level.example}</div>
            </button>
          ))}
        </div>
        <div className='text-center'>
           {selectedLevel ? 
          <Link to="/success">
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

export default MathComfortLevel;