/* eslint-disable no-undef */
const deepFreeze = require('deep-freeze');

const actionTest = (description, actionCreator, data, type) => {
  it(description, () => {
    expect(actionCreator(data)).toEqual(type);
  });
};

const reducerTest = (description, reducer, stateBefore, action, stateAfter) => {
  it(description, () => {
    deepFreeze(action);
    deepFreeze(stateBefore);

    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
};

module.exports = {
  actionTest,
  reducerTest
};
