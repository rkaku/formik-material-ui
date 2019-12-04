import React from "react";
import { mount } from "enzyme";
import Store from "store";
import Pool from "pages/Pool";
import Box from "@material-ui/core/Box";
import MineButton from "layouts/buttons/MineButton";

/**
 * Factory function to create a ReactWrapper for the App component.
 * @function setup
 * @param {object} state - Initial state for this setup.
 * @returns {ReactWrapper}
 */
const setUp = (initialState = {}) => {
  const wrapper = mount(
    <Store>
      <Pool />
    </Store>,
  );
  return wrapper;
};

describe("Pool Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  afterEach(() => {
    component.unmount();
  });

  it("renders MineButton without errors", () => {
    expect(component.find(MineButton).length).toEqual(1);
  });

  it("renders Box without errors", () => {
    expect(component.find(Box).length).toEqual(2);
  });
});