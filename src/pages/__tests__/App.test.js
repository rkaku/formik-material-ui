import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "pages/App";
import Wallet from "pages/Wallet";
import Pool from "pages/Pool";
import Blockchain from "pages/Blockchain";
import Top from "pages/Top";
import Store from "store";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setUp = initialEntries => {
  const wrapper = mount(
    <MemoryRouter initialEntries={initialEntries}>
      <Store>
        <App />
      </Store>
    </MemoryRouter>,
  );
  return wrapper;
};

describe("App Component", () => {
  let component;

  it("renders Wallet without errors", () => {
    component = setUp(["/wallet"]);
    expect(component.find(Wallet).length).toEqual(1);
  });

  it("renders Pool without errors", () => {
    component = setUp(["/pool"]);
    expect(component.find(Pool).length).toEqual(1);
  });

  it("renders Blockchain without errors", () => {
    component = setUp(["/chain"]);
    expect(component.find(Blockchain).length).toEqual(1);
  });

  it("renders Top without errors", () => {
    component = setUp(["/"]);
    expect(component.find(Top).length).toEqual(1);
  });
});
