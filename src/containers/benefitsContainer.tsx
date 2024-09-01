import React, { useEffect, useRef } from 'react';
import  gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Benefits from '@/components/benefits';
gsap.registerPlugin(ScrollTrigger);

// Define the TypeScript interface for the benefits section
export interface BenefitSection {
  id: number;
  description: string;
}

// Define and export the component
function BenefitsContainer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (sectionRef.current && triggerRef.current) {
      const animation = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "450 top",
            scrub: true,
            pin: true,
            onLeave: () => {
              if (scrollTriggerRef.current) {
                scrollTriggerRef.current.kill();
                scrollTriggerRef.current = null; // Clean up the reference
              }
              animation.kill();
              console.log("Animation and ScrollTrigger killed as the ScrollTrigger has left the viewport.");
            },
          },
        }
      );

      // Ensure the scrollTrigger reference is valid and set
      scrollTriggerRef.current = animation.scrollTrigger ?? null;

      return () => {
        // Clean up the ScrollTrigger and GSAP animation on component unmount
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
          scrollTriggerRef.current = null; // Clean up the reference
        }
        animation.kill();
      };
    }
  }, []);
  // Define sample data for benefits sections
  const sections: BenefitSection[] = [
    { id: 1, description: `No Monthly Service Fees Transaction Fee From 0%` },
    { id: 2, description: 'Anonymous, No Chargebacks' },
    { id: 3, description: 'Simplify Payment Management' },
    { id: 4, description: 'Despite Money, Move Money' },
  ];

  return (
    <section ref={triggerRef} className='scroll-section-outer overflow-hidden'>
      <div>
        <div ref={sectionRef}  className='scroll-section-inner h-screen w-[400vw]  items-center flex flex-row relative'>
          {sections.map((section) => (
            <div key={section.id} className='flex  items-center w-[100vw] md:h-screen'>
              <Benefits sections ={section}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsContainer;
