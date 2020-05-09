import React from 'react';
import './App.css';

function App() {

  const click = () =>{
    console.log("Redirect");
    fetch("/login");
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={click}>Click here</button>
    </div>
  );
}

export default App;
