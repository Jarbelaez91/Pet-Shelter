import NewDonations from "./NewDonations";
import NewMessages from "./NewMessages";
import { useEffect, useState } from 'react';
import PetsCardTwo from "./petCardTwo";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function Admin (){

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
        <div>
            <h1>
                <NewMessages/>
            </h1>
            <h1>
                <NewDonations/>
            </h1>
            <h1>
                Our current Pets
            </h1>
            <PetsCardTwo pets={pets} setPets= {setPets}/>
        </div>
    )
} 

export default Admin;