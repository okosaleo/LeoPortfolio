import { useState } from "react"
import splitStringRegex from "./usregex"

export default function Navbar() {
  const [ projectsEntered, isProjectsEntered ] = useState(false)
  const [ articlesEntered, isArticlesEntered ] = useState(false)

  const getHomeStyles = (homeEntered) => ({
    transform: `translateY(${homeEntered ? "-100%" : "0%"})`,
  })
  return (
    <div className=" flex items-center justify-between ">
      <div className=" flex items-center justify-center relative p-2 cursor-pointer " >
        <span className=" font-Sunage md:text-[1.2rem] text:[0.9rem] text-[#fbfbfb]">LennyTheDev</span>
      </div>
        <div  className=" text-[#fbfbfb] p-2">
        <ul className=" flex justify-between font-Sunage md:text-[1.2rem] text-[0.9rem] font-light gap-6">
            <li  
            onMouseEnter={() => isProjectsEntered(true)}
            onMouseLeave={() => isProjectsEntered(false)} className=" cursor-pointer">
              <span className="relative flex overflow-hidden">{splitStringRegex('Projects').map((character, index) => (<span key={index} className=" relative">
              <span style={getHomeStyles(projectsEntered, index)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s]">{character}</span>
              <span style={getHomeStyles(projectsEntered, index)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s] text-[#BCABAE]">{character}</span>
            </span>))}</span></li>
            <li 
             onMouseEnter={() => isArticlesEntered(true)}
             onMouseLeave={() => isArticlesEntered(false)}
            className=" cursor-pointer">
               <span className="relative flex overflow-hidden">{splitStringRegex('Blog').map((character, index) => (<span key={index} className=" relative">
              <span style={getHomeStyles(articlesEntered, index)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s]">{character}</span>
              <span style={getHomeStyles(articlesEntered, index)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s] text-[#BCABAE]">{character}</span>
            </span>))}</span>
            </li>
        </ul>
        </div>
    </div>
  )
}
