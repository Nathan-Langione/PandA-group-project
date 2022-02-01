
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="form-signin">
          <form >
            < h1 class="h3 mb-3 fw-normal">Register</h1>
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInput" placeholder="John" />
              <label for="floatingInput">First Name</label>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInput" placeholder="Smith"
              />
              <label for="floatingInput">Last Name </label>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Confirm password"
              />
              <label for="floatingPassword">Confirm password</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          </form>
        </div >
      </div>
    </div >
  );
}

export default App;
