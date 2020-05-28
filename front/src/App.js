import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import Chat from "./components/Chat";
import UserProfile from "./components/UserProfile";
import MyProfile from "./components/MyProfile";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(undefined);
  
  
  useEffect(() => {

    fetch("/getUser", { credentials: "include" })
      .then((res) => res.json())
      .then((user) => setUser(user));

  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <div className="container">
          
          <Switch>
            <Route path="/" exact component={()=> <Welcome user={user} setUser={setUser} />}/>
            {!user ? (
              <Route path="/login" exact component={() => <Login />} />
            ) : (
              <Route path="/feed" exact component={() => <Feed user={user} setUser={setUser} />} />
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
            <Route path="/me" exact component={() => <MyProfile user={user} />} />
            <Route path="/logout" exact component={() => <Logout setUser={setUser}/>} />

            <Route path="/chat" exact component={() => <Chat user={user} setUser={setUser}/>} />

            <Route path="/user/:userProfile" component={UserProfile} />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
