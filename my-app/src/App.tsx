import React from "react";
import "./App.css";
import Users from "./component/Users";

function App() {
  return (
    <div className="App">
      <Users name="sushanta" />
      <Users name={1} />
    </div>
  );
}

export default App;
