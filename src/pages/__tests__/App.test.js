import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "pages/App";
import Wallet from "pages/Wallet";
import Pool from "pages/Pool";
import Blockchain from "pages/Blockchain";
import Top from "pages/Top";
import Navigation from "layouts/navigation/Navigation";
import Footer from "layouts/navigation/Footer";
import Store from "store";

/**
 * Factory function to create a ReactWrapper for the App component.
 * @function setup
 * @param {Array} initialEntries - An array of location(s) in the history stack.
 * @returns {ReactWrapper}
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
  afterEach(() => {
    component.unmount();
  });

  it("renders Wallet, Navigation, and Footer without errors", () => {
    component = setUp(["/wallet"]);
    expect(component.find(Wallet).length).toEqual(1);
    expect(component.find(Navigation).length).toEqual(1);
    expect(component.find(Footer).length).toEqual(1);
  });

  it("renders Pool, Navigation, and Footer without errors", () => {
    component = setUp(["/pool"]);
    expect(component.find(Pool).length).toEqual(1);
    expect(component.find(Navigation).length).toEqual(1);
    expect(component.find(Footer).length).toEqual(1);
  });

  it("renders Blockchain, Navigation, and Footer without errors", () => {
    component = setUp(["/chain"]);
    expect(component.find(Blockchain).length).toEqual(1);
    expect(component.find(Navigation).length).toEqual(1);
    expect(component.find(Footer).length).toEqual(1);
  });

  it("renders Top, no Navigation, and no Footer without errors", () => {
    component = setUp(["/"]);
    expect(component.find(Top).length).toEqual(1);
    expect(component.find(Navigation).length).toEqual(0);
    expect(component.find(Footer).length).toEqual(0);
  });
});
