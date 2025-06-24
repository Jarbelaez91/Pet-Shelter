import "../css/about.css"

function About ({darkModeEnabled}) {

    return(
      <>

<div className="about-container-container">
<div className={`about-container ${darkModeEnabled ? "light-cards-box" : ""} `}>
<header className="about-title">  
  <h1> ABOUT WINGS TAILS AND SCALES </h1>
</header>
<div className="about-paragraph-container">
<p className="about-paragraph">
    Founded in 2025, Wings, Tails & Scales is a sanctuary for animals of all kinds, providing care and second chances to those in need. From playful puppies and curious kittens to gentle barn animals, fascinating reptiles, and beautiful birds, we believe every creature deserves love and protection. Our mission is to rescue, rehabilitate, and re-home cats, dogs, rabbits, farm animals, lizards, parrots, and other feathered friends. Through adoption, education, and community outreach, we strive to create a world where animals of all shapes and sizes are valued. Visit us to meet your next furry, feathered, or scaly companion!
</p>
</div>

<div className="adoption-details-container">
<h2 className="adoption-details-title">ADOPTION DETAILS</h2>
<div className="adoption-numbers">
  <p>
    At Wings, Tails & Scales, we have 12 amazing animals currently looking for their forever homes! Whether you're looking for a furry friend, a feathered companion, or a unique scaly sidekick, we have a variety of species waiting to meet you.</p>

<h3 className="available-adoption">Available for Adoption</h3>
<ul className="adoption-available">
<li>🐶 Dogs - Loyal, loving, and ready to be your new best friend.</li>
<li>🐱 Cats - Playful and cuddly companions for every home. </li>
<li>🐴 Horses & Cows - Gentle giants looking for a loving sanctuary.</li>
<li>🦜 Birds - From talkative parrots to chirpy finches, our feathered friends are full of personality.</li>
<li>🦎 Lizards - Unique reptilian companions for exotic pet lovers.</li>
<li>🐭 Mice & Small Critters - Perfect for small-space pet lovers.</li>
</ul>
<p className="donate-here"> Don't have the time or space at the moment you can always <a className="donate-here-link" href="/donate">  Donate here </a> </p>
</div>
</div>
</div>
</div>

  </>
      
    )
}

export default About