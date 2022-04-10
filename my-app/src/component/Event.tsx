import React from "react";

type EventProps = {
  eventClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

// Instead of writing this way const Event = (props: EventProps)
//we can write in the following way (destructuring props)
//It is the recommended way
const Event = ({ eventClick }: EventProps) => {
  return (
    <div>
      <button type="button" onClick={eventClick}>
        {" "}
        Click Here
      </button>
    </div>
  );
};

export default Event;
