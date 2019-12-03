// import React from "react";
// import { shallow } from "enzyme";
import Form from "layouts/form/Form";
import checkProps from "test/checkProps";

/**
 * Factory function to create a ReactWrapper for the App component.
 * @function setup
 * @param {object} state - Initial state for this setup.
 * @returns {ReactWrapper}
 */
// const setUp = (state = {}) => {
//   // const store = storeFactory(initialState);
//   const wrapper = shallow(<Form />);
//   return wrapper;
// };

describe("Form Component", () => {
  describe("Checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        0: {
          priv_key:
            "Lzhp9LopCHc5baafRVrffRsdjvHq89ZZKYAftuU4DtouF7T9sYjAJrBnVf7ZskfpGrHNQCd2KFyUsLJEtNoGgNGPJyaWt45aaAESN5DhmdGRCX2s3FzuUauumkiHANkL8TWXmeR1i4g5qwhA4LEDJGdxxS8t5A49z",
          pub_key:
            "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCyDaiKS5fSGUQS8Eh8kFP4mZWBoEcA83BFo3j6v44irm5T2ttgV65UmRTnGxnjzbTQsh4MMWSpdYvWeunNYKe9HJL",
          address: "VAJfKcgCfmtFTeK7o3nURWQk18t3RoibSf",
        },
        1: {
          priv_key:
            "Lzhp9LopCCVE7eG3FtcDW1oSzKWmo1tG46vgdmsC5eKd1XGF3Rjxi1bUfnoZTi512YR2FW2Af28SFbjhWGGa3ErrLd78PNdVqvmSKttVvLXGFYqMJSLhABhEjdzvuEBNPo93Dxnxsi3z8Ga3ZkrTi9GDiWrTP1Xy9",
          pub_key:
            "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCxxJyh5TWLNMppcDDRYLwL9ekisD9NP6dqxYE9WEfYGoPxwL35UGQWrCmT6FzaTBFAC285NhbdtTEy3GiD4oLdY3q",
          address: "gYQJW2D2RhiCvDUsVQioTXLDEAkqwccu9R",
        },
      };
      const propsError = checkProps(Form, expectedProps, "props", Form.name);
      expect(propsError).toBeUndefined();
    });
  });
});
