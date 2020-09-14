import React from "react";
import ReactDOM from "react-dom";

function Container() {
  return <div>Container</div>;
}

ReactDOM.render(<Container />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept("./views/App", () => {
    ReactDOM.render(<Container />, document.querySelector("#root"));
  });
}
