import { defineStore } from "pinia";
import * as savingServices from "@/apiService/savingServices";
// import * as request from "@/utils/request";
export const useCounterStore = defineStore("counter", {
 state: () => ({
   isLoading: 0,
   data: null,
   products: [],
   children: [],
   gift: [],
   sections: [],
   about: [],
   help: [],
   contact: [],
   listProducts: [],
   perPage: 8,
   countProduct: 0,
   product: {},
   // countPlus: 0,
   listAcc: [],
   countC: Number,
   countQuantity: 1,
   count: 1,
   listCarts: [],
   total: Number(0),
   check: Boolean,
   checkedbox: true,
   arrayTicked: [],
   arrProduct: [],
   billOrder: 0,
   infoDeliveryDetail: [],
   listAccount: [],
   checkedSomeToAll: false,
   arrTicked: [],
   getListAcc: [],
   getListCart: [],
   getListInfo: [],
   getListOrderById: [],
   isLoggedIn: JSON.parse(localStorage.getItem("Logout")),
   valueSelect: Number,
   arrInfo: []
 }),
 actions: {
   // async productTicked(){
   //   this.arrayTicked = [];
   //   const arr = JSON.parse(localStorage.getItem("addCart"));
   //   console.log(arr);
   //   for(let i = 0; i< arr.length; i++)
   //   {
   //     console.log(arr[i]);
   //     this.arrProduct = await this.fetchEachProduct(arr[i]);
   //     console.log(this.arrProduct);
   //     this.arrayTicked = this.arrayTicked.concat(this.arrProduct);
   //   }
   //   console.log(this.arrayTicked);
   // },
   setLoggedIn(value) {
     this.isLoggedIn = value;
   },
   infoDelivery() {
     this.infoDeliveryDetail =
       JSON.parse(localStorage.getItem("infoDelivery")) || [];
   },
   totalBillOrder() {
     try {
       this.billOrder = 0;
       for (let i = 0; i <= this.arrTicked.length; i++) {
         this.billOrder +=
           this.arrTicked[i].price * this.arrTicked[i].quantity;
       }
       // console.log(this.arrayTicked);
     } catch (error) {
       console.error("Error in productTicked:", error);
     }
   },
   productTicked() {
     // const arr = this.listCarts;
     // localStorage.setItem("orderPending", JSON.stringify([]));
     this.arrTicked = [];
     console.log(this.arrayTicked);
     // const count = 0;
     for (let i = 0; i < this.listCarts.length; i++) {
       if (this.listCarts[i].status === true) {
         this.arrTicked = this.arrTicked.concat(this.listCarts[i]);
         localStorage.setItem("orderPending", JSON.stringify(this.arrTicked));
       }
     }
     console.log(this.listCarts.length);
     this.arrTicked = JSON.parse(localStorage.getItem("orderPending")) || [];
    
   },
  
   async buyNow(id, value){
     await this.fetchEachProduct(id);
     this.arrTicked = [];
     this.product.quantity = value;
     this.arrTicked = this.arrTicked.concat(this.product);
     this.billOrder = this.product.quantity * this.product.price;
     if( this.arrTicked.length === 0)
     {
     this.arrTicked = JSON.parse(localStorage.getItem("orderPending")) || [];
     this.billOrder = this.arrTicked[0].quantity * this.arrTicked[0].price;
     }
     else
     {
       localStorage.setItem("orderPending", JSON.stringify(this.arrTicked));
     }
   },
   totalBill() {
     this.total = 0;
     for (let i = 0; i < this.listCarts.length; i++) {
       this.total =
         this.total +
         Number(this.listCarts[i].price * this.listCarts[i].quantity);
     }
     return this.total;
   },
   totalEachProduct(id) {
     // const totalEach = 0;
     const findIndexProductByID = this.listCarts.findIndex(
       (item) => item.id === id
     );
     const totalEach = Number(
       this.listCarts[findIndexProductByID]?.price *
         this.listCarts[findIndexProductByID]?.quantity
     );
     return totalEach;
   },
   countCart() {
     this.countC = this.listCarts.length;
   },
   async addToCart(sanpham, value) {
     // const idCus = JSON.parse(localStorage.getItem("idCustomer"));
     const findIndexProductByID = this.listCarts.findIndex(
       (item) => item.id === sanpham.id
     );
     if (findIndexProductByID !== -1) {
       if (value !== 1) {
         this.listCarts[findIndexProductByID].quantity = value;
       } else {
         this.listCarts[findIndexProductByID].quantity += 1;
       }
     } else {
       this.listCarts.push({ ...sanpham, quantity: value });
     }
     localStorage.setItem("cart", JSON.stringify(this.listCarts));
    //  await this.addToCartCustomer(this.listCarts);
     // await this.removeCart(idCustom);
     // const arrr = {id: idCustom, cart: this.listCarts};
     // await this.addCartForAcc(arrr);
   },
   async increaseQuantity(id) {
     const findIndexProductByID = this.listCarts.findIndex(
       (item) => item.id === id
     );
     const idCustom = JSON.parse(localStorage.getItem("idCustomer"));
     this.listCarts[findIndexProductByID].quantity += 1;
     localStorage.setItem("cart", JSON.stringify(this.listCarts));
     await this.removeCart(idCustom)
     const arrr = {id: idCustom , cart: this.listCarts};
     await this.addCartForAcc(arrr);
   },
   decreaseQuantity(id) {
     const findIndexProductByID = this.listCarts.findIndex(
       (item) => item.id === id
     );
     const idCustom = JSON.parse(localStorage.getItem("idCustomer"));
     this.listCarts[findIndexProductByID].quantity -= 1;
     // this.countCart();
     localStorage.setItem("cart", JSON.stringify(this.listCarts));
     this.removeCart(idCustom).then(()=> {
       const arrr = {id: idCustom, cart: this.listCarts};
       this.addCartForAcc(arrr);
     });
   },
   inputQuantity(id, value){
     const findIndexProductByID = this.listCarts.findIndex(
       (item) => item.id === id
     );
     const idCustom = JSON.parse(localStorage.getItem("idCustomer"));
     this.listCarts[findIndexProductByID].quantity = value;
     localStorage.setItem("cart", JSON.stringify(this.listCarts));
     this.removeCart(idCustom);
     const arrr = {id: idCustom , cart: this.listCarts};
     this.addCartForAcc(arrr);
   },
   addCart() {
     this.countCart++;
   },
   //PATCH
   async updateCart(data, customerId) {
     await savingServices.updateCartCustomer(data, customerId);
   },
   //DELETE
   async removeCart(customerId) {
     await savingServices.deleteCart(customerId);
   },
   async removeInfoDelivery(customerId) {
     await savingServices.deleteInfoDelivery(customerId);
   },
   async removeOrderDetail(customerId) {
     await savingServices.deleteOrderDetail(customerId);
   },
   //PUT
   async addToCartCustomer(data)
   {
     await savingServices.addToCart(data);
   },
   async addInfoDeliveryOrderNone(data)
   {
     await savingServices.infoDeliveryOrderNone(data);
   },
   //POST
   //có id
   async addInfoDelivery(info) {
     await savingServices.infoDeliveryOrder(info);
   },
   async addAcc(data) {
     await savingServices.addListAcc(data);
   },
   async addCartForAcc(data) {
     await savingServices.addCustomerCart(data);
   },
   async addProductToCustomerCart(product) {
     await savingServices.addProductToCart(product);
   },
   async addOrderDetail(info) {
     await savingServices.addOrder(info);
   },
   async addHasOrder(info, customerId) {
     await savingServices.hasOrder(info, customerId);
   },
   //GET
   async fetchOrderById(customerId) {
     this.getListOrderById =
       (await savingServices.getOrderDetail(customerId)) || [];
   },
   async fetchInfoDelivery(customerId) {
     this.arrInfo =
       (await savingServices.getInfoDelivery(customerId)) || [];
     this.getListInfo = this.arrInfo.info|| [];
   },
   async fetchListCustomerCart(customerId) {
     this.getListCart = await savingServices.getCustomerCart(customerId);
   },
   async fetchListAccounts() {
     this.getListAcc = await savingServices.getListAccounts();
   },
   async fetchEachProduct(productId) {
     this.isLoading++;
     this.product = await savingServices.eachProduct(productId);
     this.isLoading--;
   },
   async fetchListProduct(page) {
     this.isLoading++;
     this.listProducts = await savingServices.listProducts(this.perPage, page);
     this.isLoading--;
   },
   async fetchApi() {
     this.isLoading++;
     this.children = await savingServices.saving();
     this.isLoading--;
   },
   async fetchApiGift() {
     this.isLoading++;
     this.gift = await savingServices.gift();
     this.isLoading--;
   },
   async fetchApiSlide() {
     this.isLoading++;
     this.sections = await savingServices.slide();
     this.isLoading--;
   },
   async fetchData() {
     this.isLoading++;
     this.products = await savingServices.product();
     this.isLoading--;
   },
   async fetchApiFooterAbout() {
     this.isLoading++;
     this.about = await savingServices.about();
     this.isLoading--;
   },
   async fetchApiFooterContact() {
     this.isLoading++;
     this.help = await savingServices.help();
     this.isLoading--;
   },
   async fetchApiFooterHelp() {
     this.isLoading++;
     this.contact = await savingServices.contact();
     this.isLoading--;
   },
 },
});



