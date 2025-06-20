import React from 'react'
import "../css/home.css"

const defaultPet = "/images/defaultPet.png"

function PetsCard({ pets }) {
  return (
    <div>

    <div className="cards-box">
        <header className=" cards-title">
          <h1>FOR ADOPTION</h1>
        </header>
        <div className="card-container"> 
        {pets.map((pet)=>(
            <div className='cards' key = {pet.id}>
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