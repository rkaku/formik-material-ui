import React from "react";
import { shallow } from "enzyme";
import findByTestAttr from "test/findByTestAttr";
// import testStore from "test/testStore";
import Blockchain from "pages/Blockchain";
import Store from "store";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setUp = (initialState = {}) => {
  const wrapper = shallow(
    <Store>
      <Blockchain />
    </Store>,
  );
  return wrapper;
};

describe("Blockchain Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("renders box without errors", () => {
    const box = findByTestAttr(component, "box");
    // expect(box.length).toEqual(1);
    console.log(component.debug());
    console.log(box.debug());
  });

  it("renders chain without errors", () => {
    const chain = findByTestAttr(component, "chain");
    expect(chain.length).toEqual(0);
  });
});
