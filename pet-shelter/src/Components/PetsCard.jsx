import React from 'react'

export default function PetsCard({ pets }) {
  return (
    <div>

    <div className="cards-box">
        <header className=" cards-title">
          <h1>FOR ADOPTION</h1>
        </header>
        
        {pets.map((pet)=>(
            <div key = {pet.id}>
                <h2> {pet.name} </h2>
                <p> {pet.species} </p>
                <p> {pet.age} </p>
                <img src= {pet.image} alt={`${pet.name}`}/>
                </div>
        ) )}
      
    </div>
    </div>
  )
}
