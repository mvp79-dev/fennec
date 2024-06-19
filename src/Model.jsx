import React, { useEffect, useRef } from "react";
import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import SplitType from 'split-type'
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin)

export default function Model(props) {

  const { camera, scene } = useThree()

  const icon = useRef()
  const phone = useRef()
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
    // Existing code

    const cont = document.querySelector(".carousel");
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((char,i) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      const text = new SplitType(char, { types: 'chars'});

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top bottom',
          end: 'bottom center',
          scrub: true,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });

    // Adding the new GSAP animation code
    const words = ["Discover", "Connect", "Elevate", "Simplify"];

    let masterTl = gsap.timeline({repeat: -1}).pause();
    
    words.forEach(word => {
      let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1});
      tl.to('.typewriter-text', {duration: 1, text: word});
      masterTl.add(tl);
    });
    
    masterTl.play();


    // Media match logic
    const mm = gsap.matchMedia();
    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      const tl = gsap.timeline();

      // FIRST
      tl.to(".one-content", {
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
        z: Math.PI * 1,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(phone.current.scale, {
        x: isMobile ? 1.25 : 0.85,
        y: isMobile ? 1.25 : 0.85,
        z: isMobile ? 1.25 : 0.85,
        scrollTrigger: {
          trigger: ".two",
          start: "top 50%",
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
        y: 4,
        x: 4,
        z: 4,
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
      });
    });
  }, []);

  const { nodes, materials } = useGLTF('./fennec.glb')
  return (
    <>
    <OrbitControls  ref={controls} target={ [ 0, 0, 0 ] } minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ false } enablePan={ false } />
    <group {...props} dispose={null}>
      <Float rotationIntensity={ 0.5 } floatIntensity={ 0.5 } speed={ 2 } >
      <mesh
        ref={icon}
        castShadow
        receiveShadow
        geometry={nodes.path1.geometry}
        material={nodes.path1.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={9}
      >
        <meshStandardMaterial metalness={ 0.1 } roughness={ 0.1 } color={ "#e5b751" } />
      </mesh>
      </Float>
      <group ref={phone} scale={ 0 } position={[0, 0, -5]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ttmRoLdJipiIOmf.geometry}
          material={materials.hUlRcbieVuIiOXG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AdjkxvMXIDEHBMM.geometry}
          material={materials.eShKpuMNVJTRrgg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AwsQCWysocWlYzN.geometry}
          material={materials.xNrofRCqOXXHVZt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.drpRvcOgsocXGbn.geometry}
          material={materials.PpwUTnTFZJXxCoE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FFAjDZTPwYrUKAV.geometry}
          material={materials.xNrofRCqOXXHVZt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KXVnYLSfTdVnSOf.geometry}
          material={materials.jlzuBkUzuJqgiAK}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nnqwwoLVdMJlHIF.geometry}
          material={materials.fkUApOHLQsMUdfd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SRYqzKwamLGuEGm.geometry}
          material={materials.EszxgwYUTxbhBrC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wJqHahKxdxecSAC.geometry}
          material={materials.EuTsEfyoAnyJIih}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.xtMgDHhPqFLAHyB.geometry}
          material={materials.hUlRcbieVuIiOXG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.yxqQUnbopbiRvZr.geometry}
          material={materials.yQQySPTfbEJufve}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IkoiNqATMVoZFKD.geometry}
          material={materials.hiVunnLeAHkwGEo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.npMJxzurVJQlumk.geometry}
          material={materials.JJvGZqtXqnnFakR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rqgRAGHOwnuBypi.geometry}
          material={materials.HGhEhpqSBZRnjHC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eWbcqPskBBXuZDe.geometry}
          material={materials.fkUApOHLQsMUdfd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FjtgRCsnzEoHpCy.geometry}
          material={materials.xNrofRCqOXXHVZt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gJeeYWdxrKsnsVD.geometry}
          material={materials.xNrofRCqOXXHVZt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gTmqYtKthFeRVJL.geometry}
          material={materials.xNrofRCqOXXHVZt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hGKQDeRmDnGNdjb.geometry}
          material={materials.eShKpuMNVJTRrgg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KOgQmlOdVEyKocf.geometry}
          material={materials.jlzuBkUzuJqgiAK}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lfXEACUihtLFGfq.geometry}
          material={materials.hUlRcbieVuIiOXG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obVkazjvaXyXFtA.geometry}
          material={materials.EuTsEfyoAnyJIih}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ooeiSEXgcJckXsp.geometry}
          material={materials.yQQySPTfbEJufve}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.oOTDgAlTGbFYzBo.geometry}
          material={materials.PpwUTnTFZJXxCoE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PRPzbUhYhabBDYt.geometry}
          material={materials.jlzuBkUzuJqgiAK}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.XRoKUoMkItkzNYL.geometry}
          material={materials.jlzuBkUzuJqgiAK}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zFlMfSCaOdRDBFx.geometry}
          material={materials.EszxgwYUTxbhBrC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fdZyCEcqJDKBWVW.geometry}
          material={materials.hUlRcbieVuIiOXG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pXBNoLiaMwsDHRF.geometry}
          material={materials.yiDkEwDSyEhavuP}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SCoTCDlNLPQMMyt.geometry}
          material={materials.yiDkEwDSyEhavuP}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bpqFtgUKAOOPYpk.geometry}
          material={materials.yQQySPTfbEJufve}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bxjlJpbNESedyat.geometry}
          material={materials.xNrofRCqOXXHVZt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CdalkzDVnwgdEhS.geometry}
          material={materials.jlzuBkUzuJqgiAK}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dxVZiHfQBLkPYHO.geometry}
          material={materials.hUlRcbieVuIiOXG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ehFpgEdYijLjwka.geometry}
          material={materials.xNrofRCqOXXHVZt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.guvLdFXlBjMoNra.geometry}
          material={materials.fkUApOHLQsMUdfd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IXWuqsIeTqBFLIy.geometry}
          material={materials.EuTsEfyoAnyJIih}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NtjcIgolNGgYlCg.geometry}
          material={materials.PpwUTnTFZJXxCoE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.qlwPlhojsxIgqwa.geometry}
          material={materials.EszxgwYUTxbhBrC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zOPceDOPdLNSscX.geometry}
          material={materials.eShKpuMNVJTRrgg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IykfmVvLplTsTEW.geometry}
          material={materials.dwrMminMXjXXeek}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TakBsdEjEytCAMK.geometry}
          material={materials.ZQfGMLaFcpPaLMU}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cibcwsZWGgGfpme.geometry}
          material={materials.ZQfGMLaFcpPaLMU}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DCLCbjzqejuvsqH.geometry}
          material={materials.vhaEJjZoqGtyLdo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dkQXkqysxzfHFiP.geometry}
          material={materials.hUlRcbieVuIiOXG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FscwyiLIVNWUuKe.geometry}
          material={materials.fkUApOHLQsMUdfd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WJwwVjsahIXbJpU.geometry}
          material={materials.yhcAXNGcJWCqtIS}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wLfSXtbwRlBrwof.geometry}
          material={materials.oZRkkORNzkufnGD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.YfrJNXgMvGOAfzz.geometry}
          material={materials.bCgzXjHOanGdTFV}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buRWvyqhBBgcJFo.geometry}
          material={materials.eHgELfGhsUorIYR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DjsDkGiopeiEJZK.geometry}
          material={materials.iCxrnlRvbVOguYp}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KVYuugCtKRpLNRG_0.geometry}
          material={materials.mvjnAONQuIshyfX}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MrMmlCAsAxJpYqQ_0.geometry}
          material={materials.dxCVrUCvYhjVxqy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wqbHSzWaUxBCwxY_0.geometry}
          material={materials.MHFGNLrDQbTNima}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zraMDXCGczVnffU.geometry}
          material={materials.hUlRcbieVuIiOXG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CfghdUoyzvwzIum.geometry}
          material={materials.jpGaQNgTtEGkTfo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MHfUXxLdYldKhVJ_0.geometry}
          material={materials.dxCVrUCvYhjVxqy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pvdHknDTGDzVpwc.geometry}
          material={materials.xdyiJLYTYRfJffH}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TxLQyfBdakwBPHu_0.geometry}
          material={materials.eShKpuMNVJTRrgg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TvgBVmqNmSrFVfW.geometry}
          material={materials.pIhYLPqiSQOZTjn}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.evAxFwhaQUwXuua.geometry}
          material={materials.KSIxMqttXxxmOYl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fjHkOQLEMoyeYKr.geometry}
          material={materials.AhrzSsKcKjghXhP}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MGPAkjCLsByKXcN.geometry}
          material={materials.kUhjpatHUvkBwfM}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.QvGDcbDApaGssma.geometry}
          material={materials.kUhjpatHUvkBwfM}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RvfXLdAOBoQdZkP.geometry}
          material={materials.hUlRcbieVuIiOXG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.USxQiqZgxHbRvqB.geometry}
          material={materials.mcPrzcBUcdqUybC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.vFwJFNASGvEHWhs.geometry}
          material={materials.RJoymvEsaIItifI}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.VTXyqxbrBeQSTEt.geometry}
          material={materials.eHgELfGhsUorIYR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cnreaSmJRdAuFia.geometry}
          material={materials.eShKpuMNVJTRrgg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOjZomXdJsbbvcr.geometry}
          material={materials.eShKpuMNVJTRrgg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eYSJBzbqIfsHPsw.geometry}
          material={materials.hUlRcbieVuIiOXG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GuYJryuYunhpphO.geometry}
          material={materials.eShKpuMNVJTRrgg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KbMHiTYyrBmkZwz.geometry}
          material={materials.dxCVrUCvYhjVxqy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sVqcZvpZKhwSmoN.geometry}
          material={materials.dxCVrUCvYhjVxqy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.xJhdvBbfHMKCBPl.geometry}
          material={materials.dxCVrUCvYhjVxqy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HKHhmqmAZAOaaKY.geometry}
          material={materials.dxCVrUCvYhjVxqy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IZQgEjTfhbNtjHR.geometry}
          material={materials.eShKpuMNVJTRrgg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DjdhycfQYjKMDyn.geometry}
          material={materials.ujsvqBWRMnqdwPx}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.usFLmqcyrnltBUr.geometry}
          material={materials.sxNzrmuTqVeaXdg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IZbjANwSMLfgcvD.geometry}
          material={materials.hUlRcbieVuIiOXG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SysBlPspVQNIcce.geometry}
          material={materials.ujsvqBWRMnqdwPx}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.vELORlCJixqPHsZ.geometry}
          material={materials.zFdeDaGNRwzccye}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.xXDHkMplTIDAXLN.geometry}
          material={materials.pIJKfZsazmcpEiU}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AQkWXGdRSkSZMav.geometry}
          material={materials.ujsvqBWRMnqdwPx}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aGrbyjnzqoVJenz.geometry}
          material={materials.xNrofRCqOXXHVZt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EbQGKrWAqhBHiMv.geometry}
          material={materials.TBLSREBUyLMVtJa}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EddVrWkqZTlvmci.geometry}
          material={materials.xNrofRCqOXXHVZt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IMPDFDiRXhPIUMV.geometry}
          material={materials.hUlRcbieVuIiOXG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KSWlaxBcnPDpFCs.geometry}
          material={materials.yQQySPTfbEJufve}
        />
      </group>
    </group>
    </>
  )
}

useGLTF.preload('./fennec.glb')