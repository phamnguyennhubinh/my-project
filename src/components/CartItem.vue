<template>
  <div
    class="col-lg-2 col-md-2 col-sm-4 align-items-center justify-content-center position-relative"
  >
    <span class="text-align-left-abso"><a-checkbox v-model:checked="checked" @change="ifCheckAllTrue"
      >&nbsp;&nbsp;</a-checkbox></span>
    <img class="picture-box" :src="pic" />
  </div>
  <div
    class="col-lg-2 col-md-2 col-sm-2 align-items-center justify-content-center font-weight"
  >
    {{ name }}
  </div>
  <div
    class="col-lg-2 col-md-2 col-sm-2 align-items-center justify-content-center color-price"
  >
    ${{ price }}
  </div>
  <div
    class="col-lg-2 col-md-2 col-sm-4 align-items-center justify-content-center"
  >
    <div>
      <button @click="countMinus" class="quantity">
        <i class="fa-solid fa-minus"></i>
      </button>
      <input class="quantity inputQuantity" type="text" :value="quantity" />
      <button @click="counterStore.increaseQuantity(id)" class="quantity">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  </div>
  <div
    class="col-lg-2 col-md-2 col-sm-2 align-items-center justify-content-center"
  >
    <div class="color-price">${{ totalEach }}</div>
  </div>
  <div
    class="col-lg-2 col-md-2 col-sm-2 align-items-center justify-content-center"
  >
    <button @click="deleteCart" class="btn">Xóa</button>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores";

export default {
  props: ["id", "pic", "name", "price", "quantity", "checkAll"],
  data() {
    const counterStore = useCounterStore();
    const count = 1;
    let checked = false;
    return {
      counterStore,
      count,
      checked,
    };
  },
  methods: {
    // detailProduct () {
    // 	this.$router.push('/shop/detail');
    // 	}
    deleteCart() {
      this.$emit("delete", this.$props.id);
    },
    countPlus() {
      this.$emit("plus", this.$props.count);
    },
    countMinus() {
      if (this.quantity === 1) {
        this.deleteCart();
      } else {
        this.counterStore.decreaseQuantity(this.id);
      }
    },
  },
  computed: {
    totalEach() {
      const totalEachPro = this.counterStore.totalEachProduct(this.id);
      return totalEachPro;
    },
    
  },
};
</script>

<style lang="scss" scopped>
.position-relative{
  position: relative;
}
.text-align-left-abso {
  position: absolute;
  left: 10px;
}
.display-none {
  display: none;
}
.display-block {
  display: block;
}
.font-weight {
  font-weight: bold;
}
.color-price {
  color: orangered;
  font-weight: bold;
}
.btn {
  background-color: orangered;
  border: none;
  padding: 10px 20px;
  color: #fff;
  &:hover {
    background-color: rgb(246, 132, 88);
    color: #fff;
  }
}
.align-items-center {
  align-items: center;
}
.justify-content-center {
  justify-content: center;
}
.picture-box {
  width: 60%;
  //   height: 100%;
  padding: 10px;
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
  width: 25px;
  height: 30px;
  display: inline;
}
.inputQuantity {
  width: 25px;
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
  padding-bottom: 4px;
}

.grid .row {
  display: flex;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
}
@media screen and (max-width: 1023px) {
  .picture-box {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .picture-box {
    width: 50%;
  }
}
@media screen and (min-width: 375px) and (max-width: 811px) {
  .picture-box {
    width: 50%;
  }
}
</style>
