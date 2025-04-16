import '../css/App.css'
import { Routes, Route } from "react-router-dom";
import About from './About'
import Navbar from './Navbar'
import Donate from './Donate';
import Home from './Home';
// import Login from "./Login"

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path= "/" element= {<Home/>} />
      <Route path= "/about" element= {<About/>} />
      {/* <Route path="/login" element= {<Login/>} /> */}
      <Route path= "/donate" element= {<Donate/>} />
    </Routes>     
    </>
  )
}

export default App
