import './App.css'
import Footer from './comonents/Landing_page/Footer'
import Header from './comonents/Landing_page/Header'
import Logo from './comonents/Landing_page/Logo'
import Navbar from './comonents/Landing_page/Navbar'
import Projects from './comonents/Landing_page/Projects'
import Service_heading from './comonents/services/Service_heading'
import Services from './comonents/services/Services'
function App() {


  return (
    <>
    <div className='flex flex-col'>
    <Navbar/>
    <Header/>
    <Logo/>
    <Projects/>
    <Footer/>
    {/* <Service_heading/> */}
    {/* <Services/> */}
    </div>

    </>
  )
}

export default App
