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

    countC: 0,
    countQuantity: 1,
    count: 1,
    listCarts: [],
    total: Number(0),
  }),
  actions: {
    totalBill() {
      this.total = 0;
      for (let i = 0; i < this.listCarts.length; i++) {
        this.total = this.total + Number(this.listCarts[i].price);
      }
    },
    countCart() {
      this.countC = this.listCarts.length;
    },
    addToCart(sanpham) {
      const findIndexProductByID = this.listCarts.findIndex(
        (item) => item.id === sanpham.id
      );
      if (findIndexProductByID !== -1) {
        this.listCarts[findIndexProductByID].quantity += 1;
      } else {
        this.listCarts.push({ ...sanpham, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(this.listCarts));

    },
    increaseQuantity() {
      this.count++;
    },
    decreaseQuantity() {
      if (this.count === 0) {
        this.count === 0;
      } else {
        this.count--;
      }
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
