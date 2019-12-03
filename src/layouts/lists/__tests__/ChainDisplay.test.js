// import React from "react";
// import { shallow } from "enzyme";
import ChainDisplay from "layouts/lists/ChainDisplay";
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
        chain: {
          nonce: 10374,
          previous_hash:
            "2358632ad548aec8f6736120a9f5230072607756b1286c00765b22d77a42417e",
          timestamp: "2019-11-12 10:41:41 +0900",
          transactions: [
            {
              recipient_address: "2hTpb6dPuGehb3d73y6LqRkdguBLe1aRjEf",
              sender_address: "2LEgdLLaUnoS5yqmPPxXpq7BCPtmMPdw1jV",
              value: 100,
            },
          ],
        },
      };
      const propsError = checkProps(
        ChainDisplay,
        expectedProps,
        "props",
        ChainDisplay.name,
      );
      expect(propsError).toBeUndefined();
    });
  });
});
