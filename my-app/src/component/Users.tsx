import React from "react";
import UserProps from "../Types/UserProps";

const Users = (props: UserProps) => {
  return (
    <div>
      <h1> Name Is {props.name}</h1>
      <p> Age is {props.age}</p>
    </div>
  );
};

export default Users;
