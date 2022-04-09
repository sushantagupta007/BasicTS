import React from "react";

type UserProps = {
  name: number | string;
};
const Users = (props: UserProps) => {
  return (
    <div>
      <h1> {props.name}</h1>
    </div>
  );
};

export default Users;
