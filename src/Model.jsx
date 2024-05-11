import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import SplitType from 'split-type'

export default function Model(props) {

  const { camera, scene } = useThree()

  const icon = useRef()

  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();

  const cameraLoads = () => {
    gsap.to(camera.position, {
      duration: 5,
      x: 0,
      y: 0,
      z: 15,
      ease: 'power3.out',
    });
  };

  useEffect(() => {
      cameraLoads();
  }, []);

  useLayoutEffect(() => {

    const cont = document.querySelector(".carousel");
    const splitTypes = document.querySelectorAll('.reveal-type')

    splitTypes.forEach((char,i) => {

      const bg = char.dataset.bgColor
      const fg = char.dataset.fgColor

      const text = new SplitType(char, { types: 'chars'})

      gsap.from(text.chars, {
              scrollTrigger: {
                  trigger: char,
                  start: 'top bottom',
                  end: 'bottom center',
                  scrub: true,
              },
              opacity: 0.2,
              stagger: 0.1,
      })
  })

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;


      // FIRST TO SECOND


      tl
      .to(icon.current.rotation, {
        y: Math.PI * 2,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      

    })
    

  }, [])

  const { nodes, materials } = useGLTF('./vmodel.glb')
  return (
    <group ref={icon} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.path1.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10}
      >
        <meshStandardMaterial metalness={ 0.1 } roughness={ 0.1 } color={ "#e5b751" } />
      </mesh>
    </group>
  )
}

useGLTF.preload('./vmodel.glb')