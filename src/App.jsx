import React from "react"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer"
import Detection from "./Pages/Detection.jsx"
// import Swap from "./Pages/Swap.jsx"
import Swap2 from "./Pages/Swap2.jsx"
export default function App() {
  return (

   <div className="bg-pp-200 h-screen" >

   

   
    
       <Router>
        
        <Navbar/>
        
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detect' element={<Detection/>} />
        <Route path="/swap" element={<Swap2/>}/>
        </Routes>
        <Footer/>
       </Router>
       </div>
       
      
  )
}