type StatusProps = {
  status: "working" | "completed" | "stucked";
};
const AdvancedProps = (props: StatusProps) => {
  let message;

  //1. If I declare the type of message variable the following error comes.
  //2. Variable 'message' is used before being assigned.

  //3. If I dnn't declare the type of message then, no error occur.

  if (props.status === "working") {
    message = "Count time";
  } else if (props.status === "completed") {
    message = "Labeled as Green";
  } else if (props.status === "stucked") {
    message = " Need Solution";
  }
  return <h1> Status- {message}</h1>;
};

export default AdvancedProps;
