
import { Routes, Route } from "react-router-dom";
import About from './About'
import Navbar from './Navbar'
import Donate from './Donate';
import Home from './Home';
import Contact from "./Contact"
import SignUp from "./SignUp"
import Login from "./Login"
import Admin from "./Admin"
import React, { useState, useEffect } from "react";
import DarkMode from "./DarkMode";
import ConfirmationPage from "./ConfirmationPage";

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(
    localStorage.getItem("darkModeEnabled") === "true"
  );

  const toggleDarkMode = () => {
    setDarkModeEnabled(prevMode => !prevMode);
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkModeEnabled") === "true";
    setDarkModeEnabled(storedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkModeEnabled", darkModeEnabled);
  }, [darkModeEnabled]);


  return (
    <div className={`App ${darkModeEnabled ? "light-mode" : ""}`}>

      <DarkMode darkModeEnabled={darkModeEnabled} toggleDarkMode={toggleDarkMode} />
 
    <Navbar darkModeEnabled={darkModeEnabled} toggleDarkMode={toggleDarkMode}/>
    <Routes>
      <Route path= "/" element= {<Home darkModeEnabled={darkModeEnabled} />} />
      <Route path= "/about" element= {<About darkModeEnabled={darkModeEnabled}/>} />
      <Route path="/login" element= {<Login darkModeEnabled={darkModeEnabled}/> } />
      <Route path= "/donate" element= {<Donate darkModeEnabled={darkModeEnabled}/>} />
      <Route path= "/contact" element={<Contact darkModeEnabled={darkModeEnabled}/>}/>
      <Route path="/signup" element={<SignUp darkModeEnabled={darkModeEnabled}/>}/>
      <Route path="/admin" element={<Admin darkModeEnabled={darkModeEnabled}/>}/>
      <Route path="/confirmation" element={<ConfirmationPage darkModeEnabled={darkModeEnabled}/>}/>


    </Routes>     
    </div>
  )
}

export default App
