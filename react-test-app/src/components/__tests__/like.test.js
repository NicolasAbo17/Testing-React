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

describe("Testing Likes component", () => {
  it("Defaults to 0 likes value", () => {
    const paragraph = container.querySelector("p");
    expect(paragraph.textContent).toBe("Likes: 0");
  });
});


describe("Testing Like's +1 button", () => {
  it("Likes status and label changes when clicked", () => {
    const btn = document.getElementById("increment");
    const paragraph = container.querySelector("p");
    act(() => {
      btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(paragraph.textContent).toBe("Likes: 1");
  });
});

describe("Testing Like's -1 button", () => {
  it("Likes status and label changes when clicked", () => {
    const btn = document.getElementById("decrement");
    const paragraph = container.querySelector("p");
    act(() => {
      btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(paragraph.textContent).toBe("Likes: -1");
  });
});