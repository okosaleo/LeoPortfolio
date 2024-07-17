import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, memo } from "react"
import SplitType from 'split-type'


const About = memo(function About() {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
    const mmm = useRef()
    const dyy = useRef()
    const reveal = useRef()
    const revealCon = useRef()
    
    useGSAP(() => {
        const hello = dyy.current;
        gsap.fromTo(hello, { backgroundColor: "#bcabae"}, {
            backgroundColor: "#FBFBFB",
            scrollTrigger: {
                trigger: hello,
                scrub: true,
                end: "center"
            }
        })
    }, { scope: mmm.current})
    useGSAP(() => {
        const revealCont = revealCon.current
        const revealCurrent = reveal.current;
        const text = new SplitType(revealCurrent, { types: 'chars' })
        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: revealCont,
                scrub: true,
                end: "center"
            },
            opacity: 0.2,
            stagger: 0.1,
        })
        
    }, { scope: revealCon.current})
    

  return (
        <div ref={mmm} className="w-full" id="mmm">
        <div className=" h-max w-full text-[200px] flex flex-col justify-center items-center" ref={dyy}>
            <div >
            <h1 className=" text-[70px] font-Born">ABOUT ME</h1>
            </div>
            <div className=" h-[80vh] w-full p-[30px] whitespace-pre-line" ref={revealCon}>
            <p ref={reveal} className=" text-[38px] font-Born">A CREATIVE FRONTEND DEVELOPER AND TECHNICAL WRITER FROM LAGOS, NIGERIA. I&apos;m adept at creating user interfaces that leaves a long lasting impression. My skills don&apos;t just end there, I&apos;m also a Technical writer for hire. I love music but the only thing I love more is seeing my code come to life on screens. </p>
            </div>
        </div>
        </div>
  )
})


export default About
