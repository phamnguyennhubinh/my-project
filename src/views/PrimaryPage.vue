<template>
  <HeaderWeb/>
  <FooterWeb/>
</template>

<script setup>
import HeaderWeb from '@/components/HeaderWeb.vue';
import FooterWeb from '@/components/FooterWeb.vue';
import { useCounterStore } from '@/stores';
import {computed, } from "vue";
const counterStore = useCounterStore();
counterStore.countC = computed(() => counterStore.listCarts.length);
// onMounted(
//   ()=>{
//     counterStore.countC = JSON.parse(localStorage.getItem("cart")).length;
//   }
// )

</script>

<style>

</style>