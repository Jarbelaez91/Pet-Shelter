import React from "react";
import "../css/confirmation.css"
import { useNavigate } from "react-router-dom"


function ConfirmationPage ({darkModeEnabled}) {

    const navigate = useNavigate()


return(
    <div className= {`confirmation ${darkModeEnabled ? "light-mode-confirmation" : ""}`} >
    <h2>
        Thank you for submitting a new pet for adoption!
    </h2>
    <h3>
        We will make sure that we find it a loving new home!
    </h3>
    <button onClick={() => navigate("/")}>Back to home</button>
    </div>


)
}


export default ConfirmationPage