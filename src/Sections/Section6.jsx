import { useState, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Bounds, useGLTF, PerspectiveCamera, OrthographicCamera, OrbitControls, ContactShadows, PivotControls, Environment } from '@react-three/drei'
import Model2 from '../Model2'

export const Section6 = () => {

    const view1 = useRef()
    const ref = useRef()
    const perspectiveCamera= useRef()

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
        <section className='six' >
        <div ref={ref} className='container six' >
        <div ref={view1} className='view' style={ { height: "100%", width: "100%" } } />
        <div className='mobile-scroll' />
        <Canvas eventSource={ref} className='canvas' >
          <View track={ view1 }>
            <Model2 position={ [ 0, 0, 0 ] } scale={ isMobile ? 0.4 : 0.75 } />
            <OrbitControls makeDefault enableZoom={ false } enablePan={ false } enableRotate={ false } />
            <Environment preset='city' />
            <ambientLight intensity={ 0.7 } />
            <PerspectiveCamera ref={ perspectiveCamera } makeDefault fov={40} position={[0, 5, 5]} />
          </View>
        </Canvas>
      </div>
      </section>
    )
}