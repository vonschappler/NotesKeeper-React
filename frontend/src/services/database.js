import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const dbConn = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

dbConn.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;
    error.status = status;
    if (status === 401) {
      error.message = "You need to logged in to perform this operation";
    } else if (status === 403) {
      error.message = "You don't have authorization to perform this action";
    } else if (status === 404) {
      error.message = "No data was returned with the specified parameters";
    } else {
      error.message = "Connection between serves general fail";
    }

    return Promise.reject(error);
  },
);

export default dbConn;
