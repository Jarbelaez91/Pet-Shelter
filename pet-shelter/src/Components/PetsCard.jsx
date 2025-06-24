import React from 'react'
import "../css/home.css"

const defaultPet = "/images/defaultPet.png"

function PetsCard({ pets , darkModeEnabled}) {
  return (
    <div>

    <div className={`cards-box ${darkModeEnabled ? "light-cards-box" : ""} `}>
        <header className=" cards-title">
          <h1>FOR ADOPTION</h1>
        </header>
        <div className="card-container"> 
        {pets.map((pet)=>(
          <div className={`cards ${darkModeEnabled ? "light-cards-box" : ""} `}
 key = {pet.id}>
                <img  className="card-img" src= {pet.image || defaultPet} alt={`${pet.name}`}/>
                <h2> {pet.name} </h2>
                <p> {pet.species} </p>
                <p > {pet.age} </p>
                </div>
        ) )}
        </div>
      
    </div>
    </div>
  )
}

export default PetsCard