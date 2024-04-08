import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserSelectionPage from './components/UserSelectionPage';
import UserInterestPage from './components/UserInterestPage';
import LandingPage from './components/LandingPage';
import SuccessPage from './components/SuccessPage';
import LoadingPage from './components/LoadingPage';
import MathComfortLevel from './components/MathComfortLevel';

const App = () => {
  return (
    
     <Router>
      <Routes>
        <Route path="/" element={<UserSelectionPage/>} />
        <Route path="userinterest" element={ <UserInterestPage/>} />
        <Route path="landing" element={ <LandingPage/>} />
        <Route path="success" element={<SuccessPage />} />
        <Route path="loading" element={<LoadingPage />} />
        <Route path="mathcomfort" element={<MathComfortLevel />} />
      </Routes>
     </Router> 
  );
};

export default App;






