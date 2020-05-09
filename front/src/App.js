import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const click = () => {
    console.log("Redirect");
    fetch("/login");
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <h1>Hello World!</h1>
          <button onClick={click}>Click here</button>
          <Switch>
            <Route
              path="/login"
              exact
              component={() => (
                <Login/>
              )}
            />
            <Route 
              path="/register"
              exact
              component={() => (
                <Register />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
