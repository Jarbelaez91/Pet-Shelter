function Donate (){

    return(
        <div class="donation-container">
        <div class="donation-grid">
        <div class="donation-price">
            <h1 class=" price-title"> How your donations help</h1>
            
            
            <div class="donation-p">
            <h3 > $50 </h3>
            <p> - Supplies for a month for any pet</p>
            <p> - Covers basic vaccinations for a small animal </p>
            <h3> $100 </h3>
            <p> - Fund a veterinary wellness check for a pet</p>
            <p> - Supply a cozy bed, toys, and enrichment materials for a fostered animal</p>
            <h3> $150 </h3>
            <p> - Cover flea, tick and parasite prevention for a pet for several months</p>
            <p> - Provides heat lamps, enclosures or specialized diets for reptiles and exotic pets</p>
            <h3> $250 </h3>
            <p> - Pays for a spay/neuter surgery for a dog, cat or rabbit</p>
            <p> - Covers emergency medical care for an injured or sick pet</p>
            <h3> $500 </h3>
            <p> - Funds a life saving surgery for intensive care treatment</p>
            <p> - Supplies for about 10 small animals or 5 big animals</p>
        </div>
        </div>
      <div class ="donation-container-container">
    <h1 class="donation-title">Donate to Wings, Tails and Scales</h1>
    <form class="form">
      <div class="form-container-container">
      <div class="form-container">
      <div class="form-lines">
        <label for="first-name"> First Name</label>
        <input class="inputs" type="name" name="first-name" id="first-name" placeholder="first name" />
      </div>
      <div class="form-lines">
        <label for="last-name"> Last Name </label>
        <input class="inputs" type="name" name="last-name" id="last-name" placeholder="last name"/>
      </div>
      <div class="form-lines">
        <label for="email"> Email Address </label>
        <input class="inputs" type="email" name="email" id="email" placeholder="email" />
      </div>

      <div class="form-lines">
        <label for="last-name"> Donation Amount </label>
        <input class="inputs" type="number" name="donation" id="donation" placeholder="Donation Amount"/>
      </div>

      </div>
      <div class="submit-button-container">
        <div class="submit-button-div">
          <button class="submit-button">Submit</button>
        </div>
      </div>
      </div>
    </form>
    </div>
    </div>
    </div>
    )
}

export default Donate