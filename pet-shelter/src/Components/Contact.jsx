import { useState } from "react";

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
    <div>
      <h1>Contact us</h1>
      <h2>Tell us more about the pet!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name</label>
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
        <label htmlFor="about-pet"> Tell us about them!</label>
        <textarea
          className="inputs"
          id="about-pet"
          placeholder="tell us about the critter "
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
      {submitted && <p> The form has successfully been submitted, Thank you!</p>}
    </div>
  );
}

export default Contact;
