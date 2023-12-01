import axios from "axios";
const request = axios.create({
    baseURL: 'http://localhost:3000/'
});
export const get = async (path,options = {}) => {
    const response = await request.get(path, options);
    return response.data;
}
//POST ACCOUNT
export const post = async (path, data = {}, options = {}) => {
    try {
        const response = await request.post(path, data, options);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi thực hiện yêu cầu POST:', error);
        throw error; 
    }
};

export const patch = async (path,data = {}, options = {} ) => {
    try {
        const response = await request.patch(path, { data }, options);
    return response.data;
    } catch (error) {
        console.error('Lỗi khi thực hiện yêu cầu PATCH:', error);
        throw error; 
    }
}
//PUT CART
export const put = async (path, data = {}, options = {}) => {
    try {
        const response = await request.put(path, data, options);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi thực hiện yêu cầu POST:', error);
        throw error; 
    }
};

//DELETE
export const remove = async (path, options = {}) => {
    try {
      const response = await request.delete(path, options);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi thực hiện yêu cầu DELETE:', error);
      throw error;
    }
  };

export default request;

