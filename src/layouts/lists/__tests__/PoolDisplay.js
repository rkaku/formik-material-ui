import PoolDisplay from "layouts/lists/PoolDisplay";
import checkProps from "test/checkProps";

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
