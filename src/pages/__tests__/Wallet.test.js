import React from "react";
import { mount } from "enzyme";
import findByTestAttr from "test/findByTestAttr";
import storeFactory from "test/storeFactory";
import Wallet from "pages/Wallet";

/**
 * Factory function to create a ReactWrapper for the App component.
 * @function setup
 * @param {object} state - Initial state for this setup.
 * @returns {ReactWrapper}
 */
const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(<Wallet store={store} />);
  return wrapper;
};

describe("Wallet Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  afterEach(() => {
    component.unmount();
  });

  it("renders Form Component without errors", () => {
    const wrapper = findByTestAttr(component, "FormComponent");
    expect(wrapper.length).toEqual(1);
  });

  it("renders Formik without errors", () => {
    const wrapper = findByTestAttr(component, "Formik");
    expect(wrapper.length).toEqual(1);
  });

  it("renders Form without errors", () => {
    const wrapper = findByTestAttr(component, "Form");
    expect(wrapper.length).toEqual(2);
  });

  it("renders SenderPrivateKey without errors", () => {
    const wrapper = findByTestAttr(component, "SenderPrivateKey");
    expect(wrapper.length).toEqual(6);
  });

  it("renders SenderPublicKey without errors", () => {
    const wrapper = findByTestAttr(component, "SenderPublicKey");
    expect(wrapper.length).toEqual(6);
  });

  it("renders SenderAddress without errors", () => {
    const wrapper = findByTestAttr(component, "SenderAddress");
    expect(wrapper.length).toEqual(6);
  });

  it("renders InputRecipientAddress without errors", () => {
    const wrapper = findByTestAttr(component, "InputRecipientAddress");
    expect(wrapper.length).toEqual(6);
  });

  it("renders InputAmount without errors", () => {
    const wrapper = findByTestAttr(component, "InputAmount");
    expect(wrapper.length).toEqual(6);
  });

  it("renders SendDialogButton without errors", () => {
    const wrapper = findByTestAttr(component, "SendDialogButton");
    expect(wrapper.length).toEqual(1);
  });

  it("renders RecipientPrivateKey without errors", () => {
    const wrapper = findByTestAttr(component, "RecipientPrivateKey");
    expect(wrapper.length).toEqual(6);
  });

  it("renders RecipientPublicKey without errors", () => {
    const wrapper = findByTestAttr(component, "RecipientPublicKey");
    expect(wrapper.length).toEqual(6);
  });

  it("renders RecipientAddress without errors", () => {
    const wrapper = findByTestAttr(component, "RecipientAddress");
    expect(wrapper.length).toEqual(6);
  });

  it("renders ClipboardButton without errors", () => {
    const wrapper = findByTestAttr(component, "ClipboardButton");
    expect(wrapper.length).toEqual(5);
  });

  it("renders Box without errors", () => {
    const wrapper = findByTestAttr(component, "Box");
    expect(wrapper.length).toEqual(2);
  });
});
