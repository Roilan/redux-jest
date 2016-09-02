const actionTest = require('../../index').actionTest;

const setAge = (age) => ({
  type: 'SET_AGE',
  age
});

actionTest(
  'should handle setAge',
  setAge,
  2,
  { type: 'SET_AGE', age: 2 }
);
