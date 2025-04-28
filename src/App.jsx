import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [time, setTime] = useState("");

  const [date, setDate] = useState("");
  const fullTime = new Date();
  const option = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  useEffect(() => {
    const inter = setInterval(() => {
      setTime(fullTime.toLocaleTimeString());
      setDate(fullTime.toLocaleDateString('en-us', option));
    }, 1000);
    return () => clearInterval(inter);
  })


  return (
    <>
      <div className='h-screen bg-gray-600 flex justify-center items-center'>
        <div className='w-2/3 bg-white rounded-lg'>
          <h1 className='p-4 text-center text-5xl font-semibold text-orange-500' >Digital Clock</h1>
          <h1 className='text-center p-4  text-6xl font-bold '>{time}</h1>
          <h4 className="text-center text-gray-500 text-2xl p-4">{date}</h4>
        </div>
      </div>
    </>
  )
}

export default App
