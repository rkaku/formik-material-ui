import types from "actionTypes";
import * as actions from "actionCreators/blockchain";

describe("getWallet", () => {
  it("has the correct type", () => {
    const action = actions.getWallet(null);
    expect(action.type).toEqual(types.GET_WALLET);
  });
});
describe("sendMoney", () => {
  it("has the correct type", () => {
    const action = actions.sendMoney(null);
    expect(action.type).toEqual(types.POST_SEND_MONEY);
  });
});
describe("getPool", () => {
  it("has the correct type", () => {
    const action = actions.getPool(null);
    expect(action.type).toEqual(types.GET_POOL);
  });
});
describe("getMine", () => {
  it("has the correct type", () => {
    const action = actions.getMine(null);
    expect(action.type).toEqual(types.GET_MINE);
  });
});
describe("getChain", () => {
  it("has the correct type", () => {
    const action = actions.getChain(null);
    expect(action.type).toEqual(types.GET_CHAIN);
  });
});
