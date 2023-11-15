<template>
  <div id="app">
  <div v-if="counterStore.isLoading!=0" class="loader-overlay">
    <center><img src="@\assets\spin.gif"/></center>
  </div>
    <PrimaryPage/>
  </div>
</template>

<script setup>
import PrimaryPage from './views/PrimaryPage.vue';
import { useCounterStore } from "@/stores/index";
const counterStore = useCounterStore();
</script>

<style>
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
</style>

<!-- <template>
  <div id="app">
    <ListComponent/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ListComponent from './components/ListComponent.vue';
export default defineComponent({
  components: {
    ListComponent
  },
  setup() {
    
  },
})
</script> -->
