import { useState, useRef } from "react"
import splitStringRegex from "./usregex"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


const getStyles = (mouseEntered) => ({
  transform: `translateY(${mouseEntered ? "-100%" : "0%"})`,
})
const getContactStyles = (contactEntered) => ({
  transform: `translateY(${contactEntered ? "-100%" : "0%"})`,
})
export default function Dup() {
  gsap.registerPlugin(useGSAP)
  const [ mouseEntered, setisMouseEntered ] = useState(false)
  const [ contactEntered, setiscontactEntered ] = useState(false)

  const cursorRef = useRef()
  const xTo = useRef();
  const yTo = useRef();
  const app = useRef();
  
  const { contextSafe } =  useGSAP(() => {
    xTo.current = gsap.quickTo(cursorRef.current, "x", {duration: 0.8, ease: "power3"});
    yTo.current = gsap.quickTo(cursorRef.current, "y", {duration: 0.8, ease: "power3"});
  },{ scope: app } );

  const moveShape = contextSafe((e) => {
    xTo.current(e.clientX);
    yTo.current(e.clientY);
   });

  return (
    <div className='bg-[#0F0F0F] w-full h-[88vh] flex justify-evenly items-center' ref={app} onMouseMove={(e) => moveShape(e)}>
      <div className=' flex flex-col justify-between mt-[-40px]'>
      <div className=" w-5 h-5 rounded-full bg-white" ref={cursorRef}></div>
        <h1 className=' font-Humane text-[12rem] text-[#FBFBFB] mb-[-40px]'>LENNY THE DEV</h1>
      <hr />
      <p className=' font-Humane text-[6rem] text-[#FBFBFB]'>Front-End Developer / Technical Writer</p>
      <div className=' flex gap-5'>
      <button className=' bg-[#FBFBFB] text-[#0F0F0F] font-Humane w-[200px] text-[3rem] rounded-[50px] flex justify-evenly items-center' onMouseEnter={() => setiscontactEntered(true)}
        onMouseLeave={() => setiscontactEntered(false)}><span className="relative flex overflow-hidden">{splitStringRegex('Contact Me').map((character, index) => (<span key={index} className=" relative">
          <span style={getContactStyles(contactEntered)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s]">{character}</span>
          <span style={getContactStyles(contactEntered)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s]">{character}</span>
        </span>))}</span></button>
      <button className=' bg-[#FBFBFB] text-[#0F0F0F] font-Humane w-[230px] text-[3rem] rounded-[50px] flex justify-evenly items-center' onMouseEnter={() => setisMouseEntered(true)}
        onMouseLeave={() => setisMouseEntered(false)}><span className="relative flex overflow-hidden">{splitStringRegex('Download CV').map((character, index) => (<span key={index} className=" relative">
          <span style={getStyles(mouseEntered)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s]">{character}</span>
          <span style={getStyles(mouseEntered)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s]">{character}</span>
        </span>))}</span></button>
      </div>
      </div>
      <div className=' rounded-md'>
        <img src="/lenny.jpg" alt="" className=' object-cover h-[500px] w-[500px] rounded-lg'/>
         
      </div>
    </div>
    
  )
}

