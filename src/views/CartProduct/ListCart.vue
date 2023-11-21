<template>
  <section>
    <h1 class="text-align-center">LIST CARTS</h1>
    <div
      class="grid container card"
      style="margin-top: 40px"
      v-for="cart in counterStore.listCarts"
      :key="cart.id"
    >
      <div class="row">
        <CartItem
          :pic="cart.pic"
          :name="cart.name"
          :price="cart.price"
          :id="cart.id"
          :quantity="cart.quantity"
          @delete="deleteCart"
        />
      </div>
    </div>
    <div class="container">
      <!-- <div class="row margin-top-30">
        <div class="col-md-10 right"><span class="font-color">Total</span></div>
        <div class="col-md-2">
          <span class="backgr">${{ totalCart }}</span>
        </div>
      </div> -->
      <div class="text-align-center"><span class="font-color">Total: </span><span class="backgr">${{ totalCart }}</span></div>
    </div>
  </section>
</template>

<script setup>
import { useCounterStore } from "@/stores/index";
import CartItem from "@/components/CartItem.vue";
// import {ref} from "vue"
import { onMounted, computed } from "vue";
const counterStore = useCounterStore();
onMounted(() => {
  counterStore.listCarts = JSON.parse(localStorage.getItem("cart"));
  console.log(counterStore.listCarts);
  counterStore.totalBill();
});
const deleteCart = (productId) => {
  for (var i = 0; i < counterStore.listCarts.length; i++) {
    if (counterStore.listCarts[i].id === productId) {
      counterStore.listCarts.splice(i, 1);
    }
    localStorage.setItem("cart", JSON.stringify(counterStore.listCarts));
    counterStore.totalBill();
    console.log(counterStore.listCarts);
  }
};
const totalCart = computed(() => counterStore.totalBill());
</script>

<style lang="scss" scopped>
.text-align-center {
  margin-top: 40px;
  text-align: center;
}
.margin-top-30 {
  margin-top: 30px;
}
.right {
  text-align: right;
}
.backgr {
  background-color: orangered;
  color: white;
  padding: 5px 40px;
}
.quantity {
  outline: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  background: transparent;
  color: black;
  width: 32px;
  height: 30px;
  display: inline;
}
.inputQuantity {
  width: 50px;
  height: 30px;
  border-left: 0;
  border-right: 0;
  font-size: 16px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  cursor: text;
  border-radius: 0;
  display: inline;
  margin: 7px 0;
}

.grid {
  .row .col-md-2 {
    display: flex;
    justify-content: center;
    vertical-align: middle;
    text-align: center;
  }
}
@media screen and (max-width: 1023px) {
  .btn {
    margin: 20px;
  }
}
@media screen and (max-width: 800px) {
    .row {
        --bs-gutter-x: 0;
    }
}

</style>
