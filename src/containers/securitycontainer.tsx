import React from 'react';
import SecurityType from '@/components/securitytype';
import Security from '@/components/security'

export default function SecurityContainer() {
  return (
    <>
    <div id='security'>
        <Security/>
      <div className='h-[70vh] mx-4 mt-5 flex flex-wrap md:flex-nowrap justify-around items-center gap-1 md:gap-8'>
      <SecurityType securityTypes='Superior Security' securityDetail='Security and fraud prevention is at the core of our business.'/>
      <SecurityType securityTypes='Fraud Protection' securityDetail='Our fraud tools can help your business minimize lost sales.'/>
      </div>
    </div>
    </>
  )
}
