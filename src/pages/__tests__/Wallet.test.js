import React from "react";
import { mount } from "enzyme";
import findByTestAttr from "test/findByTestAttr";
import storeFactory from "test/storeFactory";
import Wallet from "pages/Wallet";

/**
 * Factory function to create a ReactWrapper for the App component.
 * @function setup
 * @param {object} state - Initial state for this setup.
 * @returns {ReactWrapper}
 */
const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(<Wallet store={store} />);
  return wrapper;
};

describe("Wallet Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  afterEach(() => {
    component.unmount();
  });

  it("renders form without errors", () => {
    const form = findByTestAttr(component, "form");
    expect(form.length).toEqual(1);
  });
});
