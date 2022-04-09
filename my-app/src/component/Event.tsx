import React from "react";

type EventProps = {
  eventClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Event = (props: EventProps) => {
  return (
    <div>
      <button type="button" onClick={props.eventClick}>
        {" "}
        Click Here
      </button>
    </div>
  );
};

export default Event;
