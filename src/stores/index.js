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
    infoDelivery() {
      this.infoDeliveryDetail =
        JSON.parse(localStorage.getItem("infoDelivery")) || [];
    },
    // productTicked() {
    //   try {
    //     this.arrayTicked = [];
    //     const arr = JSON.parse(localStorage.getItem("addCart"));

    //     if (!Array.isArray(arr)) {
    //       throw new Error("Invalid 'addCart' in localStorage");
    //     }
    //     for (let i = 0; i < arr.length; i++) {
    //       const findIndexById = this.listCarts.findIndex((item) => item.id === arr[i]);
    //       const producted = this.listCarts[findIndexById];
    //       // console.log(producted);

    //       if (producted) {
    //         this.arrayTicked.push(producted);
    //       }
    //     }
    //     this.billOrder = 0;
    //     for(let i=0; i<this.arrayTicked.length; i++)
    //     {
    //       this.billOrder += this.arrayTicked[i].price * this.arrayTicked[i].quantity;
    //     }
    //     // console.log(this.arrayTicked);
    //   } catch (error) {
    //     console.error("Error in productTicked:", error);
    //   }
    // },
    productTicked() {
      // const arr = this.listCarts;
      for (let i = 0; i < this.listCarts.length; i++) {
        if (this.listCarts[i].status === true) {
          this.arrTicked = this.arrTicked.concat(this.listCarts[i]);
        }
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
    addToCart(sanpham, value) {
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
        this.listCarts.push({ ...sanpham, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(this.listCarts));
    },

    increaseQuantity(id) {
      const findIndexProductByID = this.listCarts.findIndex(
        (item) => item.id === id
      );
      this.listCarts[findIndexProductByID].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(this.listCarts));
    },
    decreaseQuantity(id) {
      const findIndexProductByID = this.listCarts.findIndex(
        (item) => item.id === id
      );
      this.listCarts[findIndexProductByID].quantity -= 1;
      // this.countCart();
      localStorage.setItem("cart", JSON.stringify(this.listCarts));
    },
    addCart() {
      this.countCart++;
    },
    //PATCH
    async updateCart(data, customerId) 
    {
      await savingServices.updateCartCustomer(data, customerId);
    },
    //DELETE 
    async removeCart (customerId) 
    {
      await savingServices.deleteCart(customerId);
    },
    //POST
    async addAcc(data) {
      await savingServices.addListAcc(data);
    },
    async addCartForAcc(data) {
      await savingServices.addCustomerCart(data);
    },
    async addProductToCustomerCart(product) {
      await savingServices.addProductToCart(product)
    },
    //GET
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
