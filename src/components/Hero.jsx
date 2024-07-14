import Lottie from "lottie-react"
import kimetsu from "../Lottie/P37yueYwHL.json"

export default function Hero() {
 

  return (
    <div className='bg-[#0F0F0F] w-full h-[100vh]'>
      <div className=" flex items-center relative justify-evenly">
       <div className=" md:w-1/3 w-50vh">
        <Lottie animationData={kimetsu}/>
        </div>
        <div className=" z-10 absolute ">
         <h1 className=" font-Sunage  md:text-[7rem] text-[1.5rem] text-[#fbfbfb]">Lenny The Dev</h1>
         </div>
        </div>
    </div>
  )
}
