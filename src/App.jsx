import { Analytics } from '@vercel/analytics/react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './comonents/Landing_page/Footer'
import Header from './comonents/Landing_page/Header'
import Logo from './comonents/Landing_page/Logo'
import Navbar from './comonents/Landing_page/Navbar'
import Projects from './comonents/Landing_page/Projects'
import Service_heading from './comonents/services/Service_heading'
import Services from './comonents/services/Services'
import Form from './comonents/Landing_page/Form';
import About from './comonents/About';

function App() {


  return (
    <>
      <Analytics />
     <BrowserRouter>
     <div className='flex flex-col'>
    <Navbar/>
    
      <Routes>
   
    <Route path='/about' element={<About/>}></Route>
    <Route path='/' element= {
      <>
      <Header/>
      <Logo/>
      </>
      }></Route>
      <Route path='/Techstack' element={<Logo/>}/>

     <Route path='/projects' element= {<Projects/>}></Route>
    <Route path='/Form' element= {    <Form/>}></Route>
    
    
    </Routes>
  
    {/* <Service_heading/> */}
    {/* <Services/> */}
    <Footer/>
     </div>
       </BrowserRouter>
   

    </>
  )
}

export default App
