import React from 'react'
import "../css/home.css"
import { useState } from 'react';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const defaultPet = "/images/defaultPet.png"

function PetsCardTwo({ pets, setPets }) {
  const [editId, setEditId] = useState(null);
  const [newAge, setNewAge] = useState("");

  const handleEdit = (pet) => {
    setEditId(pet._id);
    setNewAge(pet.age);
  };

  const handleSave = (id) => {
  fetch(`${API_BASE_URL}/api/pets/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ age: newAge }),
  })
   .then(res => res.json())

.then((response) => {
  console.log("Update response:", response);

  if (!response.data || !response.data.updatePet) {
    throw new Error("Invalid response structure or update failed");
  }

  const updatedPet = response.data.updatePet;
  setPets(prev => prev.map(p => (p._id === id ? updatedPet : p)));
  setEditId(null);
})
    .catch(err => console.error("Update failed", err));
};

  const handleAdopt = (id) => {
    fetch(`${API_BASE_URL}/api/pets/delete/${id}`, {
      method: "DELETE",
    })
      .then(res => {
        if (!res.ok) throw new Error("Delete failed");
        setPets(prev => prev.filter(p => p._id !== id));
      })
      .catch(err => console.error("Delete error", err));
  };


  return (
    <div className="cards-box">
      <header className="cards-title">
        <h1>FOR ADOPTION</h1>
      </header>

      <div className="card-container">
        {pets.map((pet) => (
          <div className="cards" key={pet._id}>
            <img
              className="card-img"
              src={pet.image || defaultPet}
              alt={pet.name}
            />

            <h2>{pet.name}</h2>
            <p>{pet.species}</p>

            {editId === pet._id ? (
              <>
                <input
                  type="text"
                  value={newAge}
                  onChange={(e) => setNewAge(e.target.value)}
                />
                <button onClick={() => handleSave(pet._id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <p>Age: {pet.age}</p>
                <button onClick={() => handleEdit(pet)}>Edit</button>
              </>
            )}

            <button onClick={() => handleAdopt(pet._id)}>Adopted</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetsCardTwo;