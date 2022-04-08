import cropDetailsApi from "../../services/cropDetailsApi";
import { ActionTypes } from "../constants/actionTypes";

export const fetchCropDetails = () => async (dispatch) => {
  const response = await cropDetailsApi.get(
    "/mandi?lat=2844108136&lon=77.0526054&ver=89&lang=hi&crop_id=10"
  );

  dispatch({ type: ActionTypes.FETCH_CROP_DETAILS, payload: response.data });
};
