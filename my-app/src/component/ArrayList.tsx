import React from "react";
import { ArrayProp } from "../Types/ArrayList";

const ArrayList = (props: ArrayProp) => {
  const { names } = props;
  return (
    <div>
      {names.map((name) => (
        <li>{name.name}</li>
      ))}
    </div>
  );
};

export default ArrayList;
