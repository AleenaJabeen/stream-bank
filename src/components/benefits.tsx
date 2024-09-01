import React,{useEffect} from 'react';

export default function Benefits({sections}:any) {
   
    
  return (
    <>
        <h3 className='text-primary text-center mx-[20px] w-[100vw] md:text-6xl text-3xl'>
         {sections.description}
        </h3>
      
  
    </>
  );
}
