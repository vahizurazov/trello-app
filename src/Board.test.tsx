import React from "react";
import ReactDOM from "react-dom";
import Board from "./Components/Board/Board";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Board />, div);
  ReactDOM.unmountComponentAtNode(div);
});
