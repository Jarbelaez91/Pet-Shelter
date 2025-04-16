import petNames from '../Data/petNames.json'

function Home() {
  return (
    <div>
      <div class="body-container">
        <header class="body-title">
          <h1>WINGS, TAILS, AND SCALES</h1>
        </header>
        <p class="body-about">
          Welcome to Wings, Tails & Scales - Where Every Animal Finds a Second
          Chance! 🐾✨ From wagging tails and gentle hooves to fluttering wings
          and slithering scales, we're a sanctuary for animals of all kinds. At
          Wings, Tails & Scales, we rescue, rehabilitate, and rehome cats, dogs,
          rabbits, farm animals, birds, reptiles, and more—because every
          creature deserves love and a place to call home. Whether you’re
          looking to adopt, foster, or support our mission, you’re in the right
          place. Join us in making a difference—one paw, hoof, or feather at a
          time! 🐕🐱🐍🦜🐴{" "}
        </p>
      </div>

      <div class="cards-box">
        <header class=" cards-title">
          <h1>FOR ADOPTION</h1>
        </header>
        
        {petNames.map((pets)=>(
            <div key = {pets.id}>
                <h2> {pets.name} </h2>
                <p> {pets.species} </p>
                <p> {pets.age} </p>
                <img src= {pets.image} alt={`${pets.name}`}/>
                </div>
        ) )}

        
      <div class="display-more-button">
        <button>DISPLAY MORE</button>
      </div>
    </div>
    </div>
  );
}

export default Home;
