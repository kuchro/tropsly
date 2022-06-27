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

export const GET_PRODUCTS_CATEGORY_BY_ID = async (id) => {
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
  return axios
    .post(`${HOST_DATA.API_URL}${HOST_DATA.ORDER}`, data)
    .then(function (response) {
      console.log(response);
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

export const GET_ALL_CONFIG = async () => {
  let configDataResponse = await axios.get(
    `${HOST_DATA.API_URL}${HOST_DATA.CONFIG_ALL}`
  );
  let configData = await configDataResponse.data;
  return configData;
};

export const ADD_NEW_PRODUCT = async (payload) => {
  axios
    .post(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT}`, payload)
    .then(function (response) {
      console.info(response);
      message.success("Product Added to database.");
    })
    .catch(function (error) {
      console.error(error);
      message.error("Something went wrong...");
    });
};

export const UPLOAD_IMAGE = async (formData) => {
  return axios
    .post(`${HOST_DATA.API_URL}${HOST_DATA.IMAGE_UPLOAD}`, formData)
    .then(function (response) {
      message.success("Image uploaded to the server.");
      return response;
    })
    .catch(function (error) {
      console.log(error);
      message.error("Something went wrong...");
      return null;
    });
};

export const UPDATE_PRODUCT_DATA = async (payload) => {
  return axios
    .put(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT}${key}`, payload)
    .then(function (response) {
      message.success("Product successfully updated.");
    })
    .catch(function (error) {
      message.error("Something went wrong, try again later.");
    });
};

export const DELETE_PRODUCT_BY_ID = async (productId) => {
  axios
    .delete(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT}${productId}`)
    .then(function (response) {
      message.success("Product successfully removed.");
    
    })
    .catch(function (error) {
      message.error("Something went wrong, try again later.");
    });
};


export const DELETE_PRODUCT_CATEGORY = async (path,selectedCat)=>{
  axios
  .delete(`${HOST_DATA.API_URL}${HOST_DATA.CONFIGURE}${path}/remove`, {
    data: selectedCat,
  })
  .then(function (response) {
    message.success("Category removed properly.");
  })
  .catch(function (error) {
    message.error("Something went wrong, try again later.");
  });
}

export const ADD_NEW_CATEGORY = async (path,payload)=>{
  axios
  .post(
    `${HOST_DATA.API_URL}${HOST_DATA.CONFIGURE}${path}`,
    payload
  )
  .then(function (response) {
    message.success("Category added properly.");
  })
  .catch(function (error) {
    message.error("Something went wrong...");
  });
}