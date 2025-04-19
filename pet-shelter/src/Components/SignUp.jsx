import "../css/login"

function SignUp (){
    return (

        <div class="login-container">
        <div class ="login-container-container">
      <h1 class="login-title">SIGNUP</h1>
      <form>
        <div class="form-container-container">
        <div class="form-container">
        <div class="form-lines">
          <label for="email"> Email Address </label>
          <input class="inputs" type="email" name="email" id="email" placeholder="email" />
        </div>
        <div class="form-lines">
          <label for="password"> Password </label>
          <input
            class="inputs"
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </div>
        </div>
        </div>
        <div class="submit-button-container">
        <div class="submit-button-div">
          <button class="submit-button">Submit</button>
          <a href="signup.html">Already have an account click here to Login</a>
        </div>
        </div>
      </form>
      </div>
      </div>
    

    )
}

export default SignUp