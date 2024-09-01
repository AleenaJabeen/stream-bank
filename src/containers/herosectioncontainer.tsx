import HeroSection from '@/components/herosection';
import React,{useEffect, useState,useRef} from 'react';

export default function HeroSectionContainer() {
    const [text,setText]=useState<string>('Reimagined');
    const textArray:string[]=['Reimagined','Easy','Fun']
  
useEffect(()=>{
    let index:number=0;
    setInterval(()=>{
setText(textArray[index]);
index++;
if(index==textArray.length){
    index=0;
}
    },2000)

},[])
 
  return (
    <div>
     <HeroSection text={text}/> 
    </div>
  )
}
