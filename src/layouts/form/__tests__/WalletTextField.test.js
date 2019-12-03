// import React from "react";
// import { shallow } from "enzyme";
import WalletTextField from "layouts/form/WalletTextField";
import checkProps from "test/checkProps";

/**
 * Factory function to create a ReactWrapper for the App component.
 * @function setup
 * @param {object} state - Initial state for this setup.
 * @returns {ReactWrapper}
 */
// const setUp = (state = {}) => {
//   // const store = storeFactory(initialState);
//   const wrapper = shallow(<WalletTextField />);
//   return wrapper;
// };

describe("WalletTextField Component", () => {
  describe("Checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        props: {
          error: undefined,
          fullWidth: true,
          label: "Recipient Address",
          margin: "normal",
          name: "recipient_address",
          placeholder: "Address",
          required: true,
          type: "text",
          variant: "outlined",
        },
      };
      const propsError = checkProps(
        WalletTextField,
        expectedProps,
        "props",
        WalletTextField.name,
      );
      expect(propsError).toBeUndefined();
    });
  });
});
