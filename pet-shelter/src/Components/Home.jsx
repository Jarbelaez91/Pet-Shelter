// import petNames from '../Data/petNames.json'
import PetsCard from "./PetsCard";
import "../css/home.css"
import { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function Home({darkModeEnabled}) {

const [pets, setPets] = useState ([])

  useEffect(() => {
  fetch(`${API_BASE_URL}/api/pets`)
    .then(res => res.json())
    .then(data => {
      setPets(data.data.pets); 
    })
    .catch(error => {
      console.error("try again", error);
    });
}, []);

  return (
    <div className="wrapper">
      <div className= {`body-container ${darkModeEnabled ? "light-mode-body" : ""} `} >
        <header className="body-title">
          <h1>WINGS, TAILS, AND SCALES</h1>
        </header>
        <p className="body-about">
          Welcome to Wings, Tails & Scales - Where Every Animal Finds a Second
          Chance! 🐾✨ From wagging tails and gentle hooves to fluttering wings
          and slithering scales, we're a sanctuary for animals of all kinds. At
          Wings, Tails & Scales, we rescue, rehabilitate, and rehome cats, dogs,
          rabbits, farm animals, birds, reptiles, and more—because every
          creature deserves love and a place to call home. Whether you’re
          looking to adopt, foster, or support our mission, you’re in the right
          place. Join us in making a difference—one paw, hoof, or feather at a
          time! 🐕🐱🐍🦜🐴{" "}
        </p>
      </div>
      <PetsCard pets={pets} darkModeEnabled={darkModeEnabled} />
        
      <div className="display-more-button">
        <button>DISPLAY MORE</button>
      </div>
    </div>
  );
}

export default Home;
