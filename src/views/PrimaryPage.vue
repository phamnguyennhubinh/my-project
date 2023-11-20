<template>
  <HeaderWeb/>
  <FooterWeb/>
</template>

<script>
import HeaderWeb from '@/components/HeaderWeb.vue';
import FooterWeb from '@/components/FooterWeb.vue';
import { useCounterStore } from '@/stores';
export default {
    components:{
        HeaderWeb,
        FooterWeb
    }, 
    data() {
      const counterStore = useCounterStore();
      return {
        counterStore
      }
    },
    mounted() {
      this.counterStore.countCart();
    }
}
</script>

<style>

</style>