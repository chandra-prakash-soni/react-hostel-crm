/** @format */

import { API_PATHS } from "../../utils";
import { getAxios, getUnauthedAxios } from "../../utils/helper";
export const userSignup = (formData) => async (dispatch) => {
  try {
    const instance = getUnauthedAxios();
    const { data } = await instance.post(`${API_PATHS.SIGNIN}`, formData);
    localStorage.setItem("access_token", data?.data?.token);

    dispatch({ type: "USER_SIGNUP", payload: data });
    return data;
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const responseFailure = (data) => async (dispatch) => {
  if (data?.response?.data?.message) {
    dispatch({
      type: "RESPONSE_FAILURE",
      payload: data?.response?.data?.message,
    });
  } else {
    dispatch({ type: "RESPONSE_FAILURE", payload: data?.message });
  }
};

export const getRooms = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(`${API_PATHS.GETROOMS}`);
    dispatch({ type: "GET_ROOMS", payload: data });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getGuests = (type) => async (dispatch) => {
  try {
    if (type) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.GETGUESTS}?type=` + type
      );
      dispatch({ type: "GET_GUESTS", payload: data });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getDashboard = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(`${API_PATHS.DASHBOARD}`);
    dispatch({ type: "DASHBOARD", payload: data });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
