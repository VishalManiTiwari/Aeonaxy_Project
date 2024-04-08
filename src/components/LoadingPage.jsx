import React, { useState, useEffect } from 'react';

const LoadingPage = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  return showLoading ? (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex items-center mb-8">
        <div className="border-[7px] border-yellow-500 rounded-full w-[3.5rem] h-[3.5rem] animate-spin"></div>
      </div>
      <p className=" font-bold text-[22px] text-center">
        Finding learning path recommendations for you based on your responses
      </p>
    </div>
  ) : (
    <LearningPathsPage />
  );
};



const LearningPathsPage = () => {
  

  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen bg-white">
      <h2 className="text-2xl xl:text-[3rem] ml-[1rem] font-bold mb-4">
        Learning paths based on your answers
      </h2>
      <p className="text-gray-600 xl:text-[1.5rem] ml-[1rem] mb-8">
        Choose one to get started. You can switch anytime.
      </p>

      <p className='relative text-[13px] font-semibold top-2 ml-[1rem] lg:ml-[-24rem] md:ml-[-17rem]  bg-yellow-500 rounded-full px-3 h-[1.5rem]'>MOST POPULAR</p>
       <div className='flex xl:flex md:flex grid sm: gap-4 xl:gap-[12px]'>
        <div className='flex xl:w-[25rem] xl:h-[8rem] xl:items-center shadow-md border rounded-md border-gray-300 p-4'>
          
         <p className='w-[10rem] xl:w-[16.3rem]'> <span className='font-bold'>Foundation Math </span> Build your foundation skills in algebra, geometry, and probability </p>
         <img className='w-[80px] xl:w-[7rem] ' src="https://static.wixstatic.com/media/d7f743_3dd21b3a9b2248acb617af2fc159abc4~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/d7f743_3dd21b3a9b2248acb617af2fc159abc4~mv2.jpg" alt="" />
        </div>
        <div className='flex xl:w-[25rem] xl:h-[8rem] xl:items-center shadow-md border rounded-md border-gray-300 p-4'>
          <p className='w-[10rem] xl:w-[15rem]'><span className='font-bold'>Mathematical Thinking</span> Build your foundation skills in algebra, geometry, and probability.</p>
        <img className='w-[80px] xl:w-[7rem]' src="https://static.wixstatic.com/media/d7f743_3dd21b3a9b2248acb617af2fc159abc4~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/d7f743_3dd21b3a9b2248acb617af2fc159abc4~mv2.jpg" alt="" />
        </div>
       </div>
     
    </div>
  );
};

export default LoadingPage;



