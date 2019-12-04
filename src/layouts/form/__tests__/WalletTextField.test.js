import WalletTextField from "layouts/form/WalletTextField";
import checkProps from "test/checkProps";

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
