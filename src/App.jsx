import { useEffect, useState } from "react";
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4500)
  }, [])
  if (loading) {
    return <Loader />
}
 
  return (
    
      <div className='bg-[#0F0F0F]'>
    <Navbar />
    <Hero />
    </div>
    
  )
}

export default App
