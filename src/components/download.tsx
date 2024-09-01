import React from 'react';
import { FaApple } from 'react-icons/fa';
import { FaGooglePlay } from "react-icons/fa6";
export default function Download() {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
    <div className='h-full m-[10rem] w-[95vw]'>
      <h3 className='text-center font-bold text-3xl md:text-7xl text-primary'>Download the App <br />to get Started</h3>
    </div>
    <div className='flex justify-center items-center gap-4'>
    <button className='border-2 border-blue-100 bg-transparent text-xl text-primary-light  font-bold py-4 px-6 rounded-2xl'><span className="px-2 "> <FaApple className='inline text-3xl' /></span> Soon on Apple Store</button>
    <button className='border-2 border-blue-100 bg-transparent text-xl text-primary-light  font-bold py-4 px-6 rounded-2xl'> <span className="px-2 "> <FaGooglePlay className='inline text-3xl' /></span>Soon on Google Play</button>
    </div>
    </div>
    </>
  )
}
