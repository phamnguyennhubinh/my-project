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

    countC: Number,
    countQuantity: 1,
    count: 1,
    listCarts: [],
    total: Number(0),
    check: Boolean,
    arrayTicked: [],
    arrProduct: [],
    billOrder: 0
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
    productTicked() {
      try {
        this.arrayTicked = [];
        const arr = JSON.parse(localStorage.getItem("addCart"));
        
        if (!Array.isArray(arr)) {
          throw new Error("Invalid 'addCart' in localStorage");
        }
        for (let i = 0; i < arr.length; i++) {
          const findIndexById = this.listCarts.findIndex((item) => item.id === arr[i]);
          const producted = this.listCarts[findIndexById];
          // console.log(producted);
          
          if (producted) {
            this.arrayTicked.push(producted);
          }
        }
        this.billOrder = 0;
        for(let i=0; i<this.arrayTicked.length; i++)
        {
          this.billOrder += this.arrayTicked[i].price * this.arrayTicked[i].quantity;
        }
        // console.log(this.arrayTicked);
      } catch (error) {
        console.error("Error in productTicked:", error);
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
        this.listCarts[findIndexProductByID].price *
          this.listCarts[findIndexProductByID].quantity
      );
      return totalEach;
    },
    countCart() {
      this.countC = this.listCarts.length;
    },
    addToCart(sanpham, value) {
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
      // this.countPlus++;
      // this.countC = this.listCarts.length;
      // this.countC++;
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
