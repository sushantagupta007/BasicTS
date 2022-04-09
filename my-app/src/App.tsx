import React from "react";
import "./App.css";
import AdvancedProps from "./component/AdvancedProps";
import ArrayList from "./component/ArrayList";
import Users from "./component/Users";

const nameList = [{ name: "A" }, { name: "B" }, { name: "C" }];
function App() {
  return (
    <div className="App">
      <Users name="sushanta" age={22} />
      <Users name={1} age={23} />
      <ArrayList names={nameList} />
      <AdvancedProps status="completed" />
    </div>
  );
}

export default App;
