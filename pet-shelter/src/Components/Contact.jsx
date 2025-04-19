function Contact (){
    return(
      <div>
        <h1>
            Contact us
        </h1>
        <h2>
            Tell us more about the pet!
        </h2>
        <form>
            <label htmlFor="name"> Name</label>
            <input className="inputs" type="name" name="pet-name" id="name" placeholder="critters name"/>
            <label htmlFor="species"> species</label>
            <input className="inputs" type="name" name="species" id="species" placeholder="critters species"/>
            <label htmlFor="age"> Age</label>
            <input className="inputs" type="number" name="age" id="age" placeholder="critters age"/>
            <label htmlFor="about-pet"> Tell us about them!</label>
            <textarea>
            <input className="inputs" type="name" name="species" id="species" placeholder="critters species"/>
            </textarea>
        </form>
      </div>
    )
}

export default Contact