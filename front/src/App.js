import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    fetch("/getUser", { credentials: "include" })
      .then((res) => res.json())
      .then((user) => setUser(user));
    console.log(user);

  }, []);

  const click = () => {
    console.log("Redirect");
    fetch("/login");
  };

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <div className="container">
          <h1>Hello {user ? user.name : "World"}!</h1>
          <button onClick={click}>Click here</button>
          <Switch>
            {!user ? (
              <Route path="/" exact component={() => <Login />} />
            ) : (
              <Route path="/" exact component={() => <Feed />} />
            )}
            <Route
              path="/login"
              exact
              component={() => <Login user={user} setUser={setUser} />}
            />
            <Route path="/register" exact component={() => <Register />} />
            {!user ? (
              <Route path="/profile" exact component={() => <Login />} />
            ) : (
              <Route path="/profile" exact component={() => <Profile user={user}/>} />
            )}
            <Route path="/logout" exact component={() => <Logout setUser={setUser}/>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
