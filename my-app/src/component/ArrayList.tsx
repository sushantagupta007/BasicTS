import React from "react";

type ArrayProp = {
  names: {
    name: string;
  }[];
};
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
