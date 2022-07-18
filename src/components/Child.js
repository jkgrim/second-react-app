import { nameFormatter, capitalizeFirst } from "../nameFormatter";

export default function Child(props) {
  return (
    <h1>
      Hello, my name is{" "}
      {nameFormatter(
        capitalizeFirst(props.fName),
        capitalizeFirst(props.lName)
      )}
    </h1>
  );
}
