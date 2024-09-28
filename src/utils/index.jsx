/** @format */

//export const API_BASE_PATH = process.env.REACT_APP_API_BASE_PATH;

export const API_BASE_PATH = "http://127.0.0.1:8000/api/";

export const TOAST_TIMER = 5000;
export const PATHS = {
  SIGNIN: "/",
  DASHBOARD: "/dashboard",
  ROOMS: "/rooms",
  GUESTS: "/guests",
  EXPENSES: "/expenses",
  INVOICES: "/invoices",
  USERS: "/users",
  PERMISSIONS: "/role-permissions",
  GUESTDETAIL: "/guest/:id",
};

export const API_PATHS = {
  SIGNIN: `${API_BASE_PATH}login`,
  GETROOMS: `${API_BASE_PATH}v1/rooms`,
  GETGUESTS: `${API_BASE_PATH}v1/guests`,
  DASHBOARD: `${API_BASE_PATH}v1/dashboard`,
};
