
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const StayHere = () => {
  const [time, setTime] = useState(0);
  useEffect(()=>{
    const id = setInterval(()=> {
      setTime(prev => prev + 1)
    }, 1000)
    return () => clearInterval(id)
  },[])
  return `You've been on this page for ${time} seconds.`
}
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <StayHere/>
    </div>
  )
}

export default App
