import React from "react";
type StyleProps = {
  style: React.CSSProperties;
};
const Style = (props: StyleProps) => {
  return (
    <div>
      <h1 style={props.style}> Hello I am Styling </h1>
    </div>
  );
};

export default Style;
