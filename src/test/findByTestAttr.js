/**
 * Return Wrapper containing node(s) with the given data-test attribute.
 * @param {ShallowWrapper} component - Enzyme wrapper to search within.
 * @param {string} attr - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export default (component, attr) => {
  const wrapper = component.find(`[data-test="${attr}"]`);
  return wrapper;
};
