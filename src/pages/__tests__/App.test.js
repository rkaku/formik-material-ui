import React from "react";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";
// import findByTestAttr from "test/findByTestAttr";
import App from "pages/App";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setUp = (props = {}, state = null) => {
  const wrapper = shallow(
    <BrowserRouter>
      <App {...props} />
    </BrowserRouter>,
  );
  return wrapper;
};

describe("App Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("renders App without errors", () => {
  });
});
