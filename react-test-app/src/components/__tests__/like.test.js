import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like/>,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Checkbox component", () => {
  it("Defaults to 0 likes value", () => {
    const paragraph = container.querySelector("p");
    expect(paragraph.textContent).toBe("Likes: 0");
  });
});
