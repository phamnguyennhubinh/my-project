import * as request from "@/utils/request";


export const saving = async () => {
 try {
   const res = await request.get("childrens/1");
   return res;
 } catch (error) {
   console.log(error);
 }
};
//Nếu trong object cần nhận từ bên ngoài vào thì để 2 tham số vào
//ở sync()
export const gift = async () => {
 try {
   const res = await request.get("childrens/2");
   return res;
 } catch (error) {
   console.log(error);
 }
};


export const slide = async () => {
 try {
   const res = await request.get("sections");
   return res;
 } catch (error) {
   console.log(error);
 }
};


export const product = async () => {
 try {
   const res = await request.get("products");
   return res;
 } catch (error) {
   console.log(error);
 }
};


export const about = async () => {
 try {
   const res = await request.get("about");
   return res;
 } catch (error) {
   console.log(error);
 }
};


export const help = async () => {
 try {
   const res = await request.get("help");
   return res;
 } catch (error) {
   console.log(error);
 }
};


export const contact = async () => {
 try {
   const res = await request.get("contact");
   return res;
 } catch (error) {
   console.log(error);
 }
};


export const listProducts = async (perPage, page) => {
 try {
   const res = await request.get(`products?_limit=${perPage}&_page=${page}`);
   return res;
 } catch (error) {
   console.log(error);
 }
};


export const eachProduct = async (id) => {
 try {
   const res = await request.get(`products/${id}`);
   return res;
 } catch (error) {
   console.log(error);
 }
};
export const getCustomerCart = async (customerId) => {
 try {
   const res = await request.get(`customerCarts/${customerId}`);
   return res;
 } catch (error) {
   console.log(error);
 }
};
export const getListAccounts = async () => {
 try {
   const res = await request.get("listAccounts");
   return res;
 } catch (error) {
   console.log(error);
 }
};
export const getInfoDelivery = async (customerId) => {
 try {
   const res = await request.get(`infoDelivery/${customerId}`);
   return res;
 } catch (error) {
   console.log(error);
 }
};


export const getOrderDetail = async (customerId) => {
 try {
   const res = await request.get(`listOrders/${customerId}`);
   return res;
 } catch (error) {
   console.log(error);
 }
}
//////POST
//Nếu KH chưa có trong addOrder
export const addOrder = async (info) => {
 try {
   const res = await request.post("listOrders", info);
   return res;
 } catch (error) {
   console.log(error);
 }
}
//Nếu KH đã có trong Order
export const hasOrder = async (info, customerId) => {
 try {
   const res = await request.post(`listOrders/${customerId}`, info);
   return res;
 } catch (error) {
   console.log(error);
 }
};


export const addListAcc = async (newAccountData) => {
 try {
   const res = await request.post("listAccounts", newAccountData);
   return res;
 } catch (error) {
   console.log(error);
 }
};


export const addCustomerCart = async (newCart) => {
 try {
   const res = await request.post("customerCarts", newCart);
   return res;
 } catch (error) {
   console.log(error);
 }
};


export const addProductToCart = async (product) => {
 try {
   const res = await request.post("customerCarts", product);
   return res;
 } catch (error) {
   console.log(error);
 }
}


export const infoDeliveryOrder = async (info) => {
 try {
   const tempp = JSON.parse(localStorage.getItem("idCustomer"));
   const res = await request.post(`infoDelivery/${tempp}`, info);
   return res;
 } catch (error) {
   console.log(error);
 }
}


export const infoDeliveryOrderNone = async (info) => {
 try {
   // const tempp = JSON.parse(localStorage.getItem("idCustomer"));
   const res = await request.post("infoDelivery", info);
   return res;
 } catch (error) {
   console.log(error);
 }
}
//PUT
export const addToCart = async (data) => {
 try {
   const tempp = JSON.parse(localStorage.getItem("idCustomer"));
   const res = await request.put(`customerCarts/${tempp}`, data);
   return res;
 } catch (error) {
   console.log(error)
 }
}






//PATCH
export const updateCartCustomer = async (data,customerId) => {
 try {
   const res = await request.patch(`customerCarts/${customerId}/cart`,  { cart: data });
   return res;
 } catch (error) {
   console.log(error);
 }
}
//DELETE
// DELETE
export const deleteCart = async (customerId) => {
 try {
   const res = await request.remove(`customerCarts/${customerId}`);
   return res;
 } catch (error) {
   console.log(error);
 }
};


export const deleteInfoDelivery = async (customerId) => {
 try {
   const res = await request.remove(`infoDelivery/${customerId}`);
   return res;
 } catch (error) {
   console.log(error);
 }
};


export const deleteOrderDetail = async (customerId) => {
 try {
   const res = await request.remove(`listOrders/${customerId}`);
   return res;
 } catch (error) {
   console.log(error);
 }
};







