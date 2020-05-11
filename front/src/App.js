import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(undefined);
  const [pages, setPages] = useState(0);
  useEffect(() => {
    fetch("/getUser", { credentials: "include" })
      .then((res) => res.json())
      .then((user) => setUser(user));
    console.log(user);
    // Code review from antoine noreau: Creo que el user no estara updated cuando el console.log le print.
    // Se podria setUser aqui y continuar con en setPages en el segundo, con un [user].
  }, []);

  useEffect(() => {
    fetch("/pagesFeed")
      .then(res => res.json())
      .then(newPages => setPages(newPages));
  },[]);
  // Aca se podria terminar por }, [user]);, para llamar el fetch solamente cuando el user cambia.

  const click = () => {
    console.log("Redirect");
    fetch("/login");
  };

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <div className="container">
          <Switch>
            {!user ? (
              <Route path="/" exact component={() => <Login />} />
            ) : (
              <Route path="/" exact component={() => <Feed pages={pages} setPages={setPages}/>} />
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

            <Route path="/chat" exact component={() => <Chat user={user} setUser={setUser}/>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
