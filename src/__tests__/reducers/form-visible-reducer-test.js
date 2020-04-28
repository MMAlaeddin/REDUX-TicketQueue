import formVisibleReducer from '../../reducers/form-visible-reducer';

describe("formVisibleReducer", () => {
  test("shoud return default state if no action type is recognized", () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });
});
