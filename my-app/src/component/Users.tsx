import React from "react";

type UserProps = {
  name: number | string;
  age?: number;
};
const Users = (props: UserProps) => {
  return (
    <div>
      <h1> Name Is {props.name}</h1>
      <p> Age is {props.age}</p>
    </div>
  );
};

export default Users;
