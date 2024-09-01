import React from 'react';

const Animations: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden z-[-1]">
      <div className="absolute inset-0 flex items-end justify-center space-x-4 overflow-hidden pointer-events-none">
        <div className="ball absolute bg-orange-400"></div>
        <div className="ball absolute bg-blue-100 "></div>
        <div className="ball absolute bg-primary"></div>
        <div className="ball absolute bg-orange-200"></div>
        <div className="ball absolute bg-green-300" ></div>
        <div className="ball absolute bg-yellow-400" ></div>
        <div className="ball absolute bg-primary"></div>
        <div className="ball absolute bg-yellow-200"></div>
      </div>
    </div>
  );
};

export default Animations;
