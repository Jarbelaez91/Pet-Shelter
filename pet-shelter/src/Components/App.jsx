
import { Routes, Route } from "react-router-dom";
import About from './About'
import Navbar from './Navbar'
import Donate from './Donate';
import Home from './Home';
import Contact from "./Contact"
import SignUp from "./SignUp"
import Login from "./Login"
import Admin from "./Admin"

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path= "/" element= {<Home/>} />
      <Route path= "/about" element= {<About/>} />
      <Route path="/login" element= {<Login/>} />
      <Route path= "/donate" element= {<Donate/>} />
      <Route path= "/contact" element={<Contact/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/admin" element={<Admin/>}/>


    </Routes>     
    </>
  )
}

export default App
