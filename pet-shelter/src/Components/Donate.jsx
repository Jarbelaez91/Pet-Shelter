import { useState } from "react";
import "../css/donate.css";

function Donate() {
const [name, setName] = useState ("")
const [lastName, setLastName] = useState ("")
const [email, setEmail] = useState ("")
const [donation,setDonation] = useState ("")

const[ submitted, setSubmitted] =useState (false)

const handleSubmit = (e) => {
  e.preventDefault();
  console.log({name, lastName,email,donation})
  setSubmitted(true)
  setName("")
  setLastName("")
  setEmail("")
  setDonation("") 
}

  return (
    <div className="donation-container">
      <div className="donation-grid">
        <div className="donation-price">
          <h1 className=" price-title"> How your donations help</h1>

          <div className="donation-p">
            <h3 className="price"> $50 </h3>
            <p className="donation-description" > - Supplies for a month for any pet</p>
            <p className="donation-description"> - Covers basic vaccinations for a small animal </p>
            <h3 className="price"> $100 </h3>
            <p className="donation-description"> - Fund a veterinary wellness check for a pet</p>
            <p className="donation-description">
              {" "}
              - Supply a cozy bed, toys, and enrichment materials for a fostered
              animal
            </p>
            <h3 className="price"> $150 </h3>
            <p className="donation-description">
              {" "}
              - Cover flea, tick and parasite prevention for a pet for several
              months
            </p>
            <p className="donation-description">
              {" "}
              - Provides heat lamps, enclosures or specialized diets for
              reptiles and exotic pets
            </p>
            <h3 className="price"> $250 </h3>
            <p className="donation-description"> - Pays for a spay/neuter surgery for a dog, cat or rabbit</p>
            <p className="donation-description"> - Covers emergency medical care for an injured or sick pet</p>
            <h3 className="price"> $500 </h3>
            <p className="donation-description"> - Funds a life saving surgery for intensive care treatment</p>
            <p className="donation-description"> - Supplies for about 10 small animals or 5 big animals</p>
          </div>
        </div>
        <div className="donation-container-container">
          <h1 className="donation-title">Donate to Wings, Tails and Scales</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-container-container">
              <div className="form-container">
                <div className="form-lines">

                  <label htmlFor="first-name"> First Name</label>
                  <input
                    className="inputs"
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="first name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-lines">
                  <label htmlFor="last-name"> Last Name </label>
                  <input
                    className="inputs"
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-lines">
                  <label htmlFor="email"> Email </label>
                  <input
                    className="inputs"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-lines">
                  <label htmlFor="last-name"> Donation </label>
                  <input
                    className="inputs"
                    type="number"
                    name="donation"
                    id="donation"
                    placeholder="Donation Amount"
                    value={donation}
                    onChange={(e)=> setDonation (e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="submit-button-container">
                <div className="submit-button-div">
                  <button className="submit-button">Submit</button>
                  {submitted && <p> The form has successfully been submitted, Thank you for your donation!</p>}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donate;
