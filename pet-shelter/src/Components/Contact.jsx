import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../css/contact.css"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function Contact() {
  const [petName, setPetName] = useState("")
  const [species, setSpecies] = useState("")
  const [age, setAge] = useState("");
  const [about, setAbout] = useState("")
  const [submitted, setSubmitted] = useState (false)
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_BASE_URL}/api/pets/create/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify ({
      name: petName,
      species: species,
      age: age,
    }),
    })
    .then ((res) => {
      if (!res.ok) {
        throw new Error ("form not submitted")
      }
      return res.json()
    })

    .then (() => {
      console.log({ petName, species, age, about });
      setSubmitted (true)
      setPetName ("")
      setSpecies ("")
      setAge ("")
      setAbout ("")
      navigate("/confirmation")
    })
    .catch ((error) => {
      console.error ("error with form", error)
    })
  };

  return (
    <div className="contact-page">
    <div className="contact-container">
      <div className="contact">
      <h1 className="contact-header">Contact us</h1>
      <h2 className="contact-subheader">Tell us more about the critter!</h2>
      <form  onSubmit={handleSubmit}>
        <div>
        <div className="contact-form">
        <label className="contact-label"  htmlFor="name"> Name</label>
        <input
          className="inputs"
          type="text"
          name="pet-name"
          id="name"
          placeholder="critters name"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
        />
        </div>
        <div className="contact-form">
        <label className="contact-label" htmlFor="species"> species</label>
        <input
          className="inputs"
          type="text"
          name="species"
          id="species"
          placeholder="critters species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
        />
        </div>
        <div className="contact-form">
        <label className="contact-label" htmlFor="age"> Age</label>
        <input
          className="inputs"
          type="text"
          name="age"
          id="age"
          placeholder="critters age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        </div>
      
        <div className="contact-form">
        <label className="contact-label" htmlFor="about-pet"> Tell us about them!</label>
        <textarea
          id="about-pet"
          placeholder="tell us about the critter "
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          required
        />
        </div>
        </div>

        <button className="contact-button" type="submit">Submit</button>
      </form>
      {submitted && <p> The form has successfully been submitted, Thank you!</p>}
    </div>
    </div>
    </div>
  );
}

export default Contact;
