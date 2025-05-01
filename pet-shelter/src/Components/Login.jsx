import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({email, password})
  }

  return (
    <div class="login-container">
      <div class="login-container-container">
        <h1 class="login-title">LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div class="form-container-container">
            <div class="form-container">
              <div class="form-lines">
                <label for="email"> Email Address </label>
                <input
                  class="inputs"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  required
                />
              </div>
              <div class="form-lines">
                <label for="password"> Password </label>
                <input
                  class="inputs"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div class="submit-button-container">
            <div class="submit-button-div">
              <button class="submit-button">Submit</button>
              <Link to="/signUp" >
                Don't have an account click here to sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
