// import React from "react";
// import { shallow } from "enzyme";
import PoolDisplay from "layouts/lists/PoolDisplay";
import checkProps from "test/checkProps";

/**
 * Factory function to create a ReactWrapper for the App component.
 * @function setup
 * @param {object} state - Initial state for this setup.
 * @returns {ReactWrapper}
 */
// const setUp = (state = {}) => {
//   // const store = storeFactory(initialState);
//   const wrapper = shallow(<ChainDisplay />);
//   return wrapper;
// };

describe("ChainDisplay Component", () => {
  describe("Checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        transaction: {
          recipient_address: "2hTpb6dPuGehb3d73y6LqRkdguBLe1aRjEf",
          sender_address: "2LEgdLLaUnoS5yqmPPxXpq7BCPtmMPdw1jV",
          value: 100,
        },
      };
      const propsError = checkProps(
        PoolDisplay,
        expectedProps,
        "props",
        PoolDisplay.name,
      );
      expect(propsError).toBeUndefined();
    });
  });
});
