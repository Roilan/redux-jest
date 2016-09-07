const asyncReducerTest = require('../../index').asyncReducerTest;

const SET_NAME = 'SET_NAME';

const setName = (name) => Promise.resolve({
  type: SET_NAME,
  name
});

function reducer(state, action) {
  switch (action.type) {
    case SET_NAME:
      return {
        name: action.name
      };

    default:
      return state;
  }
}

asyncReducerTest(
  'should change your name and return a new state object',
  reducer,
  { name: 'foo' },
  setName('bar'),
  { name: 'bar' }
);
