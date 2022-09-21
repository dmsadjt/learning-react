const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Beagle",
    }),
    React.createElement(Pet, {
      name: "Scooby",
      animal: "Wolf",
      breed: "Himalayan",
    }),
    React.createElement(Pet, {
      name: "Snoopy",
      animal: "Tiger",
      breed: "Indonesian",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
