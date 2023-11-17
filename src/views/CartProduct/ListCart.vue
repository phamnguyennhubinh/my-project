<template>
  <section>
    <div class="grid wide card" style="margin-top: 40px;"
    v-for="cart in counterStore.listCarts" :key="cart.id">
        <div class="row">
            <div class="col-md-4">
                <img style="width: 20%" src="https://i.imgur.com/1bze9LE.png">
            </div>
            <div class="col-md-2">
                {{ counterStore.listCarts.name }}
            </div>
            <div class="col-md-2">
                <div> 
                    <button @click="counterStore.decreaseQuantity()" class="quantity"><i class="fa-solid fa-minus"></i></button>
                    <input class="quantity inputQuantity" type="text"
                    :value="counterStore.count">
                    <button @click="counterStore.increaseQuantity()" class="quantity"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div class="col-md-2">{{ counterStore.listCarts.price }}</div>
            <div class="col-md-2">Xóa</div>
        </div>
    </div>
    
  </section>
</template>

<script setup>
import {useCounterStore} from "@/stores/index"
// import {ref} from "vue";
import { onMounted } from "vue";
const counterStore = useCounterStore();
// const listCart = ref([]);
onMounted(()=> {
    
})

</script>

<style scopped>
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