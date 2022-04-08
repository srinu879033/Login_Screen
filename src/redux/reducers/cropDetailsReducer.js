import { ActionTypes } from "../constants/actionTypes";

let initialState = JSON.parse(localStorage.getItem("crop_data"));
if (initialState === null) {
  initialState = {
    crop_details: [],
  };
} else {
  initialState = {
    crop_details: initialState,
  };
}
export const cropDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_CROP_DETAILS:
      localStorage.setItem("crop_data", JSON.stringify(payload));
      return { ...state, crop_details: payload };
    default:
      return state;
  }
};
