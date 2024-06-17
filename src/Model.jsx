import React, { useEffect, useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import SplitType from 'split-type'

export default function Model(props) {

  const { camera, scene } = useThree()

  const icon = useRef()
  const controls = useRef()

  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();

  const cameraLoads = () => {
    const isMobile = window.innerWidth <= 799;
    const cameraPosition = isMobile ? { x: 0, y: 0, z: 25 } : { x: 0, y: 0, z: 15 };

    gsap.to(camera.position, {
      duration: 5,
      x: cameraPosition.x,
      y: cameraPosition.y,
      z: cameraPosition.z,
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

      tl

      // FIRST

      .to(".one-content", {
        opacity: 0,
        yPercent: -50,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom", // Adjust start to start later
          end: "bottom 100%",
          scrub: true,
          immediateRender: false,
        },
      })


      .to(icon.current.rotation, {
        y: Math.PI * 1,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(controls.current.target, {
        x: isMobile ? 0 : 4,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(icon.current.scale, {
        y: 0.3,
        x: 0.3,
        z: 0.3,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(".experience", {
        position: "absolute",
        scrollTrigger: {
          trigger: ".three",
          start: "top bottom",
          end: "bottom 100%",
          scrub: true,
          immediateRender: false,
        },
      })

      

    })
    

  }, [])

  const { nodes, materials } = useGLTF('./vmodel.glb')
  return (
    <>
    <OrbitControls  ref={controls} target={ [ 0, 0, 0 ] } minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ false } enablePan={ false } />
    <group ref={icon} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.path1.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={9}
      >
        <meshStandardMaterial metalness={ 0.1 } roughness={ 0.1 } color={ "#e5b751" } />
      </mesh>
    </group>
    </>
  )
}

useGLTF.preload('./vmodel.glb')