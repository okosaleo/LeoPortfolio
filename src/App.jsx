import { useEffect, useState } from "react";
import './App.css'
import Loader from './components/Loader'
import Home from "./Pages/Home";


function App() {
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
    <div className='bg-[#0F0F0F]'>
    <Home />
    </div>
    
  )
}

export default App
