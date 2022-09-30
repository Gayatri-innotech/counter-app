import * as actionTypes from "./action-types";

export const increaseValue = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decreaseValue = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};
export const restartValue = () => {
  return {
    type: actionTypes.RESTART,
  };
};
