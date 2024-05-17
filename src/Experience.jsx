import { Suspense, useEffect, useState } from 'react'
import { OrbitControls, Environment, Float, SoftShadows } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Model from './Model'
gsap.registerPlugin(ScrollTrigger)

export default function Experience() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile device on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isMobile)
  

  return (
    <>
      <SoftShadows intensity={ 20 } />
      <Suspense fallback >
        <Float rotationIntensity={ 0.5 } floatIntensity={ 0.5 } speed={ 2 } >
          <Model position={ [ 0, isMobile ? -0.5 : 0, 0 ] } scale={ 0.6 } />
        </Float>
      </Suspense>  
      <Environment preset='lobby' />
      </>
  )
}