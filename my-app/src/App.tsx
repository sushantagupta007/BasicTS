import React from "react";
import "./App.css";
import ArrayList from "./component/ArrayList";
import Users from "./component/Users";

const nameList = [{ name: "A" }, { name: "B" }, { name: "C" }];
function App() {
  return (
    <div className="App">
      <Users name="sushanta" age={22} />
      <Users name={1} age={23} />
      <ArrayList names={nameList} />
    </div>
  );
}

export default App;
