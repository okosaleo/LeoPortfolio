import Lottie from "lottie-react"
import kimetsu from "../Lottie/P37yueYwHL.json"
import splitStringRegex from "./usregex"
import { useState } from "react"
import scroll from "../Lottie/uu8WnbdhU0.json"

const getContactStyles = (contactEntered) => ({
  transform: `translateY(${contactEntered ? "-100%" : "0%"})`,
})

export default function Hero() {
  const [ contactEntered, setiscontactEntered ] = useState(false)

 

  return (
    <div className='bg-[#0F0F0F] w-full md:h-[90vh] h-[73vh] flex flex-col items-center'>
      <div className=" flex items-center relative justify-evenly">
        <div className=" md:w-1/3 w-70vh">
        <Lottie animationData={kimetsu}/>
        </div>
        <div className=" z-10 absolute md:mt-0 ">
         <h1 className=" font-Sunage  md:text-[7rem] text-[1.8rem] text-[#fbfbfb]">Lenny The Dev</h1>
         </div>
      </div>
       <div className=" flex w-full justify-evenly items-center md:flex-row flex-col-reverse md:gap-0 gap-7 md:mt-0 mt-[450px">
       <Lottie animationData={scroll} className=" md:w-[11vw] w-24 " />
         <div className=" md:w-2/3 w-4/5"> 
            <hr className=" w-full border-[2px] md:block hidden" />
          </div>
         <div className=" md:w-1/5 w-3/4 md:flex-none flex justify-center items-center">
          <button className=' bg-[#FBFBFB] text-[#0F0F0F] font-Sunage md:w-[270px] w-[260px] md:text-[1.8rem] text-[1.9rem] rounded-lg flex justify-evenly items-center' onMouseEnter={() => setiscontactEntered(true)}
           onMouseLeave={() => setiscontactEntered(false)}><span className="relative flex overflow-hidden">{splitStringRegex('Contact Me').map((character, index) => (<span key={index} className=" relative">
           <span style={getContactStyles(contactEntered)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s]">{character}</span>
           <span style={getContactStyles(contactEntered)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s]">{character}</span>
           </span>))}</span></button>
        </div>
      </div>
    </div>
  )
}
