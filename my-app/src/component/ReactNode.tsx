import React from "react";

type ReactProps = {
  children: React.ReactNode;
};
const ReactNode = (props: ReactProps) => {
  return <div>{props.children}</div>;
};

export default ReactNode;
