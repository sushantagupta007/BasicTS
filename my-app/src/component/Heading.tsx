import React from "react";

type HeadingProp = {
  children: string;
};
const Heading = (props: HeadingProp) => {
  return <div>{props.children}</div>;
};

export default Heading;
