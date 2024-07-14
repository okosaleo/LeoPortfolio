import Lottie from "lottie-react"
import kimetsu from "../Lottie/P37yueYwHL.json"

export default function Hero() {
 

  return (
    <div className='bg-[#0F0F0F] w-full h-[100vh]'>
      <div className=" flex items-center relative justify-evenly">
       <div className=" w-1/3">
        <Lottie animationData={kimetsu}/>
        </div>
        <div className=" z-10 absolute">
         <h1 className=" font-Sunage text-[7rem] text-[#fbfbfb]">Lenny The Dev</h1>
         </div>
        </div>
    </div>
  )
}
