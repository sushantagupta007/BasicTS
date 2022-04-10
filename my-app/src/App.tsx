import React from "react";
import "./App.css";
import AdvancedProps from "./component/AdvancedProps";
import ArrayList from "./component/ArrayList";
import Event from "./component/Event";
import Heading from "./component/Heading";
import ReactNode from "./component/ReactNode";
import Style from "./component/Style";
import Users from "./component/Users";

const nameList = [{ name: "A" }, { name: "B" }, { name: "C" }];
function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("hell from button", e);
  };
  return (
    <div className="App">
      <Users name="sushanta" age={22} />
      <Users name={1} age={23} />
      <ArrayList names={nameList} />
      <AdvancedProps status="completed" />

      <ReactNode>
        <Heading> Hello Children of React Component</Heading>
      </ReactNode>
      <Event eventClick={(e) => handleClick(e)} />
      <Style style={{ backgroundColor: "red", border: "1px solid black" }} />
    </div>
  );
}

export default App;
