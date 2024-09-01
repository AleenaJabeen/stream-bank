import React from 'react';
interface SecurityProps{
    securityTypes: string;
    securityDetail:string;
}

export default function SecurityType({securityTypes,securityDetail}: SecurityProps) {
  return (
    <>

      <p className='text-primary font-semibold text-3xl md:w-[30vw] w-[100vw]'>{securityTypes}.<span className='text-3xl text-primary-light font-light'>{securityDetail}</span></p>
    </>
  )
}
