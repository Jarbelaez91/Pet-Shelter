import { useState } from "react";
import "../css/contact.css"

function Contact() {
  const [petName, setPetName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  const [about, setAbout] = useState("");
  const [submitted, setSubmitted] = useState (false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ petName, species, age, about });
    setSubmitted (true)
    setPetName ("")
    setSpecies ("")
    setAge ("")
    setAbout ("")
  };

  return (
    <div className="contact-container">
      <div className="contact">
      <h1>Contact us</h1>
      <h2>Tell us more about the pet!</h2>
      <form  onSubmit={handleSubmit}>
        <div>
        <div className="contact-form">
        <label  htmlFor="name"> Name</label>
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
        <label htmlFor="species"> species</label>
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
        <label htmlFor="age"> Age</label>
        <input
          className="inputs"
          type="number"
          name="age"
          id="age"
          placeholder="critters age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        </div>
      
        <div className="contact-form">
        <label htmlFor="about-pet"> Tell us about them!</label>
        <textarea
          id="about-pet"
          placeholder="tell us about the critter "
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          required
        />
        </div>
        </div>

        <button type="submit">Submit</button>
      </form>
      {submitted && <p> The form has successfully been submitted, Thank you!</p>}
    </div>
    </div>
  );
}

export default Contact;
