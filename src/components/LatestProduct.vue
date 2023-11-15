<template>
  <div class="content">
    <h1 class="heading-product">LASTEST PRODUCTS</h1>
    <div class="container">
      <div class="row">
        <div
          v-for="product in visibleProducts"
          :key="product.id"
          class="col-md-4 col-lg-3 col-sm-6 padding-row"
        >
          <ItemProduct
            :pic="product.pic"
            :name="product.name"
            :price="product.price"
          />
        </div>
      </div>
    </div>
    <center>
      <button @click="loadMore" class="btn-view-products">View More Products</button>
    </center>
  </div>
</template>

<script setup>
import ItemProduct from "./ItemProduct.vue";
// import { Pagination } from "ant-design-vue";
import { useCounterStore } from "@/stores/index";
import { ref , onMounted } from "vue";
const counterStore = useCounterStore();
const visibleProducts = ref([]);
const currentIndex = ref(8);
const itemsPerPage = 4;
onMounted(async () => {
  await counterStore.fetchData();
  visibleProducts.value = counterStore.products.slice(0, 8);
});
const loadMore = () => {
  currentIndex.value += itemsPerPage;
  visibleProducts.value = counterStore.products.slice(0, currentIndex.value);
}
</script>

<style scoped>
.content {
  z-index: 1;
}
.loading {
  position: flex;
  right: 40px;
}
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.heading-product {
  font-family: "poppins", sans-serif;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
}
.backgr3 {
  background-color: #eeeeee;
  padding: 10px;
}
.new {
  background-color: white;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  padding-top: 10px;
  padding-left: 10px;
}
.picture-products {
  object-fit: fill;
  padding: 20px;
  max-height: 180px;
  width: auto;
}
.space {
  display: flex;
  justify-content: space-between;
}
.font-products {
  font-weight: bold;
  margin-top: 10px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.display-inline {
  display: inline-block;
}
.price-color {
  color: #db4f66;
}
.space-col {
  padding-top: 25px;
}
.btn-view-products {
  background-color: #f16179;
  border: 1px solid #f16179;
  padding: 10px 40px;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  margin-top: 30px;
}
.padding-row {
  padding-bottom: 30px;
}
</style>
