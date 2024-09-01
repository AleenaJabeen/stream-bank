import React from 'react'
import Image from 'next/image'

export default function GetPaid() {
  return (
    <>
    <section className='flex flex-wrap items-center justify-center gap-4'>
    <Image
      src="/getPaid.webp"
      width={400}
      height={400}
      alt="Picture og getting paid"
    priority={true}
    />
    <div className="flex text-primary flex-col justify-start items-start w-full md:w-[30vw] gap-4 m-4">
<h3 className='text-4xl font-bold'>Get Paid Early</h3>
<p className='text-3xl py-2'>Your paycheck will be automatically deposited up to two days early</p>
<button className='border-2 border-primary  hover:bg-primary hover:text-white text-xl text-primary  font-bold py-4 px-6 rounded-2xl'>Download</button>
    </div>
    </section>
      
    </>
  )
}
