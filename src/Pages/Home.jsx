import Navbar from '../components/Navbar';
import Next from '../components/Next';
import Loader from '../components/Loader'
import { useEffect, useState, memo, Suspense, lazy } from "react";
const About = lazy(() => import('../components/About'));
const Hero = lazy(() => import('../components/Hero'));

const Home = memo(function Home() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  if (loading) {
    return <Loader />
}
  return (
    <Suspense fallback={<Loader />}>
      <Suspense fallback={<div className=' bg-[#0f0f0f]'></div>}>
    <Navbar />
    </Suspense>
    <Suspense fallback={<div className=' bg-[#0f0f0f] h-[100vh] w-full text-[#fbfbfb] flex justify-center items-center'><p className=' font-Sunage'>Loading...</p></div>}>
    <Hero />
    </Suspense>
    <Suspense fallback={<div>Loading</div>}>
    <About />
    </Suspense>
    <Next />
    </Suspense>
  )
})

export default Home

