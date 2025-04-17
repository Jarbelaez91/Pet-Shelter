import { Link } from "react-router-dom";
import "../css/nav.css"

function Navbar(){
    
    return (
        <nav className="navbar-box">
          <Link to=  "/" className="nav-links"> Home </Link>
          <Link to= "/about"className="nav-links"> About </Link>
          <Link to= "/login"className="nav-links"> Login </Link>
          <Link to="/donate"className="nav-links"> Donate </Link>
        </nav>
    )
}

export default Navbar