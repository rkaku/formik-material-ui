import * as actions from "actionCreators";

describe("getWallet", () => {
  it("returns Async Function", () => {
    const asyncFunc = actions.getWallet();
    console.log({ asyncFunc });
    expect(asyncFunc).toBeInstanceOf(Function);
  });
});

describe("sendMoney", () => {
  it("returns Async Function", () => {
    const values = {};
    const asyncFunc = actions.sendMoney(values);
    console.log({ asyncFunc });
    expect(asyncFunc).toBeInstanceOf(Function);
  });
});

describe("getPool", () => {
  it("returns Async Function", () => {
    const asyncFunc = actions.getPool();
    console.log({ asyncFunc });
    expect(asyncFunc).toBeInstanceOf(Function);
  });
});

describe("getMine", () => {
  it("returns Async Function", () => {
    const asyncFunc = actions.getMine();
    console.log({ asyncFunc });
    expect(asyncFunc).toBeInstanceOf(Function);
  });
});

describe("getChain", () => {
  it("returns Async Function", () => {
    const asyncFunc = actions.getChain();
    console.log({ asyncFunc });
    expect(asyncFunc).toBeInstanceOf(Function);
  });
});
