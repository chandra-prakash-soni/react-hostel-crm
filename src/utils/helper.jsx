/** @format */

import axios from "axios";

export const getUnauthedAxios = () =>
  axios.create({
    headers: {
      "Content-Type": "application/json",
    },
  });
export const getToken = () => {
  let accessToken = "";
  let token = localStorage.getItem("access_token");
  if (token) {
    let accessTokenObj = token.split("##");
    accessToken = accessTokenObj[0];
  }
  return accessToken;
};
export const getAxios = () => {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return axios.create({ headers });
};

export const getMultipartAxios = () => {
  const token = getToken();
  const headers = {
    "Content-Type": undefined,
    enctype: "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };
  return axios.create({ headers });
};

export const getPubMultipartAxios = () => {
  const headers = {
    "Content-Type": undefined,
    enctype: "multipart/form-data",
  };
  return axios.create({ headers });
};

export const getFormatDt = (dateObj) => {
  const originalDate = new Date(dateObj);
  const formattedDate = originalDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
};
