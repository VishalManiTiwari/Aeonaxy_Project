// import React from 'react';

// const LearningPathsPage = () => {
//   const learningPaths = [
//     {
//       id: 1,
//       title: 'Foundational Math Build',
//       description: 'Build your foundational skills in algebra, geometry, and probability.',
//       popular: true,
//     },
//     {
//       id: 2,
//       title: 'Mathematical Thinking',
//       description: 'Build your foundational skills in algebra, geometry, and probability.',
//       popular: false,
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white">
//       <h2 className="text-2xl font-bold mb-4">Learning paths based on your answers</h2>
//       <p className="text-gray-600 mb-8">Choose one to get started. You can switch anytime.</p>

//       <div>
//         {learningPaths.map((path) => (
//           <div key={path.id} className="flex items-center mb-4">
//             <div className="bg-gray-200 p-4 rounded-lg mr-4">
//               <img src="/robot-icon.png" alt="Robot Icon" className="w-16 h-16" />
//             </div>
//             <div>
//               <h3 className="text-lg font-bold">{path.title}</h3>
//               <p className="text-gray-600">{path.description}</p>
//               {path.popular && <span className="text-yellow-500">MOST POPULAR</span>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LearningPathsPage;