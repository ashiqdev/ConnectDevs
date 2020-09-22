import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";

function Container() {
  return <App />;
}

ReactDOM.render(<Container />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept("./views/App", () => {
    ReactDOM.render(<Container />, document.querySelector("#root"));
  });
}
