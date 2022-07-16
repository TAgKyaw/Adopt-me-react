const Pet = ({ name, animal, breed }) => {
  // this is a stamp/ a component
  // props can be replaced with destructuring variables so we don't need to call them with props.name, etc.
  // const {name,animal,breed} = props;
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  // creating a html element from react called a component.
  // React.createElement("elementName",{element_attributes},"[array of children elements] OR child1, child2")
  return React.createElement(
    "div",
    {
      id: "something important",
    },
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Mutt" }),
      React.createElement(Pet, {
        name: "Buggs",
        animal: "Dog",
        breed: "Retriever",
      }),
      React.createElement(Pet, {
        name: "Kinko",
        animal: "Cat",
        breed: "Mixed",
      }),
    ]
  );
};
// Rendering components from App container into the document
ReactDOM.render(React.createElement(App), document.getElementById("root"));
