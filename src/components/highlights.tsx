import React from 'react';
interface HeaderProps{
  header:string;
  paragraph:string;

}

export default function Highlights({header}:HeaderProps) {
  return (
    <>
    <div className='pt-16 text-center bg-blue-100 flex justify-center flex-col items-center md:h-screen'>
      <span className='text-3xl md:block hidden absolute left-[15%] mt-[-12rem] '>&#128076;</span>
      <span className='text-3xl  md:block hidden  absolute left-[35%] mt-[-25rem]'>&#128091;</span>
      <span className='text-3xl  md:block hidden absolute left-[63%] mt-[-25rem]'>&#128176;</span>
      <h1 className='text-primary md:text-7xl text-4xl font-bold py-7'>{header.substring(0,18)} <br /> {header.substring(18)}</h1>
      <p className='text-primary text-2xl font-normal mb-10'>Fee Free Banking is possible</p>
      <span className='text-3xl  md:block hidden  absolute right-[15%] mt-[-12rem]'>&#128181;</span>
      <span className='text-3xl  md:block hidden absolute left-[15%] mt-[17rem]'>&#128176;</span>
      <span className='text-3xl  md:block hidden absolute left-[35%] mt-[25rem]'>&#128181;</span>
      <span className='text-3xl  md:block hidden absolute left-[63%] mt-[25rem]'>&#128076;</span>
      <span className='text-3xl  md:block hidden absolute right-[15%] mt-[17rem]'>&#128091;</span>
    </div>
    </>
  )
}
