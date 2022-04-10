import React, { useState } from "react";

const Hooke = () => {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    if (value) {
      setValue(false);
    }

    if (!value) {
      setValue(true);
    }
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {" "}
        Change Value
      </button>
      {value ? `True Value ` : `False Value`}
    </div>
  );
};

export default Hooke;

//In simple case, we don't need to write typescript
//But comples state , we need to use typescript
