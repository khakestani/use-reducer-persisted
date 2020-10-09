import SET_FULL_STATE from './constant';

const middleware = reducer => {
  const modifiedReducer = (state, { type, payload }) => {
    if (type === SET_FULL_STATE) {
      return payload;
    }
    return reducer(state, { type, payload });
  };

  return modifiedReducer;
};

export default middleware;
