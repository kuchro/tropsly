import { HOST_DATA } from "hostdata";
import axios from "axios";
import { message } from "antd";

export const GET_CATEGORY_DATA = async () => {
  return await axios
    .get(`${HOST_DATA.API_URL}${HOST_DATA.CATEGORY}`)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log("Error", error.message);
      }
      return undefined;
    });
};

export const GET_CATEGORY_BY_ID = async (id) => {
  return await axios
    .get(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT_CATEGORY}${id}`)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      message.error("Something went wrong, try again later.");
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log("Error", error.message);
      }
      return undefined;
    });
};

export const GET_DELIVERY_DATA = async () => {
  return axios
    .get(`${HOST_DATA.API_URL}${HOST_DATA.DELIVERY}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      message.error("Something went wrong, try again later.");
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log("Error", error.message);
      }
      return undefined;
    });
};

export const DELETE_DATA_BY_ID = async (path, id, action) => {
  axios
    .delete(`${HOST_DATA.API_URL}${path}${id}`)
    .then(function (response) {
      message.success("Data successfully removed.");
      action();
    })
    .catch(function (error) {
      message.error("Something went wrong, try again later.");
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log("Error", error.message);
      }
    });
};

export const UPDATE_DATA = async (path, data, action) => {
  axios
    .put(`${HOST_DATA.API_URL}${path}`, data)
    .then(function (response) {
      message.success("Product successfully updated.");
      action();
    })
    .catch(function (error) {
      message.error("Something went wrong, try again later.");
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log("Error", error.message);
      }
    });
};

export const SAVE_DATA = async (path, data, action) => {
    axios
      .post(`${HOST_DATA.API_URL}${path}`, data)
      .then(function (response) {
        message.success("Product successfully updated.");
        action();
      })
      .catch(function (error) {
        message.error("Something went wrong, try again later.");
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Error", error.message);
        }
      });
  };


  export const ORDER_PRODUCTS = async (data) => {
    axios
      .post(`${HOST_DATA.API_URL}${HOST_DATA.ORDER}`, data)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        message.error("Something went wrong, try again later.");
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Error", error.message);
        }
      });
  };
