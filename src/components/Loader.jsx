import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Loader() {
    const container = useRef()
    gsap.registerPlugin(useGSAP)
    const letter1 = useRef()
    const letter2 = useRef()
    const letter3 = useRef()
    const opening = useRef()
  

    useGSAP(
        () => {gsap.from([letter1.current, letter2.current, letter3.current], {
          top: "100px",
          ease: "power4.inOut",
          duration: 2,
          stagger: {
            amount: 0.5,
          },
         })}, {scope: container}
      )
      useGSAP(() => {
        gsap.to (opening.current, {
          duration: 2,
          delay: 3.6,
          y: -2700,
          ease: "circ.inOut"
        })
      })
  return (
    <div className=" bg-[#0f0f0f]" ref={opening}>
    <div className=" relative w-full h-[70vh] md:h-screen overflow-hidden bg-[#0f0f0f]"  ref={container}>
      <div className=" relative w-full h-[70vh] md:h-screen flex justify-center items-center font-Sunage text-[1rem] md:text-[2rem] text-[#fbfbfb]" >
        <div className=" relative">
          <div className=" relative top-0" ref={letter1} id='letter'><span className="">LEONARD&nbsp;</span>
        </div>
          <div className=" before:content before:absolute before:top-[100px] before:left-[-40px] before:w-[500px] before:h-[120px] before:bg-[#0f0f0f] before:animate-fadeOut animation-delay-2000"></div>
        </div>
        <div className=" relative">
          <div className=" relative top-0" ref={letter2}><span>THE&nbsp;</span>
          </div>
          <div className=" bg-[#0f0f0f] before:content before:absolute before:top-[100px] before:left-[-40px] before:w-[500px] before:h-[100px] before:bg-[#0f0f0f] before:animate-fadeOut animation-delay-2000"></div>
        </div>
        <div className=" relative">
          <div className="relative top-0" ref={letter3}><span>DEVELOPER&nbsp;</span>
          </div>
          <div className="bg-[#0f0f0f] before:content before:absolute before:top-[100px] before:left-[-40px] before:w-[500px] before:h-[100px] before:bg-[#0f0f0f] before:animate-fadeOut animation-delay-2000"></div>
        </div>
      </div>
    </div>
    </div>
  )
}
