import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { useLayoutEffect } from "react";

export default function Model2(props) {

  const coin = useRef()

  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();

  useLayoutEffect(() => {

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;


      // FIRST TO SECOND


      tl
      .to(coin.current.rotation, {
        y: Math.PI / 0.75,
        scrollTrigger: {
          trigger: ".six",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })

      

    })
    

  }, [])
  const { nodes, materials } = useGLTF('./eth.glb')
  return (
    <group ref={coin} rotation={ [ Math.PI * -0.15, Math.PI * 0.2, 0 ] } {...props} dispose={null}>
      <group position={[-2.998, 0, 0.987]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials['Material.007']}
            position={[2.998, 0, -0.99]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.409}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials['Material.003']}
            position={[2.998, 0, -0.99]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.409}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials['Material.006']}
            position={[2.998, 0, -0.99]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.409}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./eth.glb')