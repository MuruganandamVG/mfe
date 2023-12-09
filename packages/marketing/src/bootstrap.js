import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log("bootstrap called");
const mount = (el) => {
  console.log("mount called");
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector(".marketing");
  console.log(devRoot);

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
