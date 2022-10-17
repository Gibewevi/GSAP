import { useState } from 'react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import Animation from './Animation'
import './App.css'

function App() {

  return (
    
    <div className="App w-full h-screen ">
    <Animation />
        <nav  id="navFushia" className=' -translate-y-20 p-4 flex flex-row justify-between items-center opacity-0 bg-gradient-to-b from-fuchsia-900 z-100 overflow-hidden'>
            <img src="barrel.svg" id="barrel" className='w-7 -translate-y-[44px] opacity-1'/>
                <div className='flex flex-row text-white font-light z-100 overflow-hidden'>
                    <ul id="ul_0" className='-translate-y-[20px]'>ACCEUIL</ul>
                    <ul id="ul_1" className='mx-5 -translate-y-[20px]'>LE VIN</ul>
                    <ul id="ul_2" className='-translate-y-[20px]'>CONTACT</ul>
                </div>
            <img src="leaf.svg" id="leaf" className='w-7 -translate-y-[44px] opacity-1'/>
        </nav>

        <div className='absolute top-0 w-full h-screen bg-black bg-opacity-60 -z-10' />
          <video className='absolute top-0 left-0 -z-20 w-full h-screen object-cover' autoPlay={true} muted={true} loop={true}>
            <source src="grappe-video.mp4" type="video/mp4" />
          </video>

          <div className='w-[400px] text-center mx-auto mt-10'>
              <h1 id="h1_vignes" className='text-white font-semibold text-6xl opacity-0 -translate-y-[35px]'>DES VIGNES D'EXCEPTION.</h1>
              <div id="middle-line" className='w-[1px] bg-white mx-auto mt-8'></div>
              <img src="grape.svg" id="grape_logo" className='w-[55px] mx-auto mt-5 opacity-0 -translate-y-[20px]' />
              <button id="button_discover" className='border border-1 border-white rounded-md p-2 px-4 text-white tracking-wider mt-[50px] -translate-y-[30px] opacity-0 '>DECOUVRIR</button>
          </div>

          <div className='w-full absolute bottom-0'>
              <div className='max-w-7xl h-[60px] mx-auto flex items-center relative'>
                  <div id='logo' className='w-[180px]  flex flex-row p-2 items-center absolute right-0 mr-5'>
                      <img src="twitter.svg" id="twitter" className='w-8 opacity-0' />
                      <img src="facebook.svg" id="facebook" className='w-8 mx-5 opacity-0' />
                      <img src="instagram.svg" id="instagram"className='w-8 opacity-0' /> 
                  </div>
                  <span id="copyright" className='text-white font-light opacity-0'>©Copyright 2022 - Tous droits réservés CGV</span>
              </div>
          </div>

    </div>  
    
  )
}

export default App
