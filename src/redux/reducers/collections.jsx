/** @format */

const initialState = {
  isAuth: localStorage.getItem("access_token") ? true : false,
  loading: false,
  error: null,
};

// changed to arrow function
const collections = (state = initialState, action) => {
  switch (action.type) {
    case "USER_SIGNUP":
      return {
        ...state,
        signinresponse: action.payload,
        loading: true,
        isAuth: true,
      };
    case "RESPONSE_FAILURE":
      return { ...state, responseError: action.payload, isAuth: false };
    case "GET_ROOMS":
      return { ...state, roomsObj: action.payload, isAuth: true };
    case "GET_GUESTS":
      return { ...state, guestObj: action.payload, isAuth: true };
    case "DASHBOARD":
      return { ...state, dashboardObj: action.payload, isAuth: true };
    default:
      return { ...state };
  }
};

export default collections;
