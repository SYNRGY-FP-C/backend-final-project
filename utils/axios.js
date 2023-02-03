const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: process.env.WA_SERVICE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${process.env.WA_SERVICE_TOKEN}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

module.exports = axiosInstance;
