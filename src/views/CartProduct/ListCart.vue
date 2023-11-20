<template>
  <section>
    <div class="grid wide card" style="margin-top: 40px;"
    v-for="cart in counterStore.listCarts" :key="cart.id">
        <div class="row">
            <CartItem
            :pic="cart.pic"
            :name="cart.name"
            :price="cart.price"
            :id="cart.id"
            @delete="deleteCart"
            />
        </div>
    </div>
    <div class="row">
        <div class="col-md-10 right">Total</div>
        <div class="col-md-2">
            {{ counterStore.total }}
        </div>
    </div>
  </section>
</template>

<script setup>
import {useCounterStore} from "@/stores/index"
import CartItem from "@/components/CartItem.vue"
// import {ref} from "vue"
import { onMounted } from "vue";
const counterStore = useCounterStore();
// const count = ref(1);
// const carts = ref([]);
// const newCart = ref([]);
// const listCart = ref([]);
onMounted(()=> {
    counterStore.listCarts = JSON.parse(localStorage.getItem("cart"));
    console.log(counterStore.listCarts);
    counterStore.totalBill();
   
})
const deleteCart = (productId) => {
    // newCart.value = carts.value.filter(item => item !== productId)
    // console.log(newCart.value);
    for (var i = 0; i < counterStore.listCarts.length; i++) {
    if (counterStore.listCarts[i].id === productId) {
        counterStore.listCarts.splice(i, 1);
    }
    localStorage.setItem("cart", JSON.stringify(counterStore.listCarts));
    counterStore.countCart();
    counterStore.totalBill();
    console.log(counterStore.listCarts)
}
// const countMinus = (count) => {
//     count.valueOf = count--;
//     return count;
// }
    // const id = ;
    // newCart = carts.value.filter(item => item !== )
}

</script>

<style scopped>
.right {
    text-align: right;
}
.quantity {
    outline: none;
    cursor: pointer;
    font-size: .875rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color .1s cubic-bezier(.4,0,.6,1);
    border: 1px solid rgba(0,0,0,.09);
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

.grid .row {
    display: flex;
    justify-content: center;
    vertical-align: middle;
    text-align: center;
}
</style>