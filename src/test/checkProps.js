import checkPropTypes from "check-prop-types";

/**
 * Return propError from comparison between propTypes and expectedProps.
 * @param {ShallowWrapper} component - Enzyme wrapper.
 * @param {object} expectedProps - Expected props.
 * @returns {object}
 */
export default (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "prop",
    component.name,
  );
  return propError;
};
