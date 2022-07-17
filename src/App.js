import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Buggs" animal="Dog" breed="Retriever" />
      <Pet name="Kinko" animal="Cat" breed="Mixed" />
    </div>
  );
  // creating a html element from react called a component.
  // React.createElement("elementName",{element_attributes},"[array of children elements] OR child1, child2")
  // return React.createElement(
  //   "div",
  //   {
  //     id: "something important",
  //   },
  //   [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Mutt" }),
  //     React.createElement(Pet, {
  //       name: "Buggs",
  //       animal: "Dog",
  //       breed: "Retriever",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Kinko",
  //       animal: "Cat",
  //       breed: "Mixed",
  //     }),
  //   ]
  // );
};
// Rendering components from App container into the document
render(<App />, document.getElementById("root"));
