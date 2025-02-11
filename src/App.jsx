import { useState } from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
 

function App() {
   

  return (
    <>
    <Navbar />
     <Homepage />
    <Footer />
      {/* <h1 className='text-3xl text-red-400 font-bold'>Hello word</h1> */}
     
    </>
  )
}

export default App
