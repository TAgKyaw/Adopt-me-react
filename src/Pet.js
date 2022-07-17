import React from "react";

export default function Pet({ name, animal, breed }) {
  // this is a stamp/ a component
  // This is JSX - javascript react
  //Javascript can return only 1 element therefore all elements are wrapped in <div>
  const hello = 2 / 2 == 1 ? "Hello" : null;
  return (
    <div>
      <h1>{hello + " " + name.toUpperCase()}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}

// props can be replaced with destructuring variables so we don't need to call them with props.name, etc.
// const {name,animal,breed} = props;
// return React.createElement("div", {}, [
//   React.createElement("h1", {}, name),
//   React.createElement("h2", {}, animal),
//   React.createElement("h2", {}, breed),
// ]);
