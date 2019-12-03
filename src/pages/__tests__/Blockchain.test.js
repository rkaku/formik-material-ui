import React from "react";
import { mount } from "enzyme";
import findByTestAttr from "test/findByTestAttr";
import storeFactory from "test/storeFactory";
import Blockchain from "pages/Blockchain";

/**
 * Factory function to create a ReactWrapper for the App component.
 * @function setup
 * @param {object} state - Initial state for this setup.
 * @returns {ReactWrapper}
 */
const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(<Blockchain store={store} />);
  return wrapper;
};

describe("Blockchain Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  afterEach(() => {
    component.unmount();
  });

  it("renders box without errors", () => {
    const box = findByTestAttr(component, "box");
    expect(box.length).toEqual(2);
  });

  it("renders chain without errors", () => {
    const chain = findByTestAttr(component, "chain");
    expect(chain.length).toEqual(0);
  });
});

// <Connect(Blockchain) store={{...}}>
//   <Blockchain store={{...}} selector={{...}} getChain={[Function]}>
//     <Styled(MuiBox) minHeight="80vh" data-test="box">
//       <div className="MuiBox-root MuiBox-root-2" data-test="box" />
//     </Styled(MuiBox)>
//   </Blockchain>
// </Connect(Blockchain)>