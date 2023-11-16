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
    countProduct: 0
  }),
  actions: {
    async fetchListProduct(page) {
      this.isLoading++;
      this.listProducts = await savingServices.listProducts(this.perPage,page);
      this.isLoading--;
    },
    async fetchApi() {
      this.isLoading++;
      this.children = await savingServices.saving();
      this.isLoading--;
    },
    async fetchApiGift(){
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
    async fetchApiFooterAbout(){
      this.isLoading++;
      this.about = await savingServices.about();
      this.isLoading--;
    },
    async fetchApiFooterContact(){
      this.isLoading++;
      this.help = await savingServices.help();
      this.isLoading--;
    },
    async fetchApiFooterHelp(){
      this.isLoading++;
      this.contact = await savingServices.contact();
      this.isLoading--;
    }
  }
});
