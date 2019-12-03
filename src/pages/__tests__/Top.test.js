import React from "react";
import { shallow } from "enzyme";
import findByTestAttr from "test/findByTestAttr";
import Top from "pages/Top";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} state - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setUp = (props = {}, state = null) => {
  const wrapper = shallow(<Top />);
  return wrapper;
};

describe("Top Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("renders wrapper without errors", () => {
    const wrapper = findByTestAttr(component, "wrapper");
    expect(wrapper.length).toEqual(1);
  });

  it("renders box without errors", () => {
    const box = findByTestAttr(component, "box");
    expect(box.length).toEqual(1);
  });

  it("renders backgroundImage without errors", () => {
    const backgroundImage = findByTestAttr(component, "backgroundImage");
    expect(backgroundImage.length).toEqual(1);
  });

  it("renders martianImage without errors", () => {
    const martianImage = findByTestAttr(component, "martianImage");
    expect(martianImage.length).toEqual(1);
  });

  it("renders buttonWrapper without errors", () => {
    const buttonWrapper = findByTestAttr(component, "buttonWrapper");
    expect(buttonWrapper.length).toEqual(1);
  });

  it("renders button without errors", () => {
    const button = findByTestAttr(component, "button");
    expect(button.length).toEqual(1);
  });
});
