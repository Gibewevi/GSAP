import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className="App w-full h-screen">

      <header className='w-full h-[40px] flex'>
        <nav className='w-full h-[40px] flex flex-row justify-between items-center bg-gradient-to-b from-purple-300 z-10 p-2'>
          <img src='./barrel.svg' className='w-6 z-10'/>
            <div className='text-white font-light flex flex-row'>
              <ul>ACCEUIL</ul>
              <ul className='mx-4'>LE VIN</ul>
              <ul>CONTACT</ul>
            </div>
          <img src='./leaf.svg' className='w-6 z-10'/>
        </nav>
      </header>

      <div className='w-full h-screen border border-2 border-red-800 absolute top-0 z-0'>
        <video className='object-cover w-full h-full' autoplay muted loop>
            <source className='' src="./grappe-video.mp4" type="video/mp4"/>
        </video>
      </div>
      
    </div>  
  )
}

export default App
