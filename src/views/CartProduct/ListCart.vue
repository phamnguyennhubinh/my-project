<template>
  <section id="product">
    <h1 class="text-align-center">LIST CARTS</h1>
    <div class="grid container border">
      <div class="col-md-4 position-relative">
        <span class="text-align-left-absolute">
          <!-- <a-checkbox
          v-model:checked="checked"
          @change="handleCheckAllChange"
        >
        &ensp;
        </a-checkbox> -->
          <input
            type="checkbox"
            id="myCheck"
            @click="handleCheckAllChange(1)"
            v-model="checkboxCart"
          />
        </span>

        <span class="left-absolute">Sản phẩm</span>
      </div>
      <div class="col-md-2">Đơn giá</div>
      <div class="col-md-2">Số lượng</div>
      <div class="col-md-2">Số tiền</div>
      <div class="col-md-2">Thao tác</div>
    </div>
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
          :checkboxCart="checkboxCart.valueOf"
          @addOrder="addOrder"
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
      <div class="text-align-center">
        <span class="font-color">Total: </span
        ><span class="backgr">${{ totalCart }}</span>
      </div>
    </div>
  </section>
  <section id="totalBill">
    <div class="row border2 background">
      <div class="col">
        <input
          type="checkbox"
          id="checkFixed"
          v-model="checkboxOrder"
          @click="handleCheckAllChange(2)"
        />
        <span>&nbsp;&nbsp;Chọn tất cả</span>
      </div>
      <div class="col">
        <div>Tổng thanh toán</div>
        <div>({{ counterStore.countC }} sản phẩm)</div>
      </div>
      <div class="col">
        <span class="color-price">${{ computedValue.billEach }}</span>
        <!-- totalCart computedValue.billEach totalBillBottom -->
      </div>
      <div class="col" id="order">
        <router-link :to="{ name: 'PurchaseProducts' }">
          <button :hidden="hidden" class="btn btn-add">Mua Hàng</button>
        </router-link>
      </div>
    </div>
  </section>
  <router-view />
</template>

<script setup>
import { useCounterStore } from "@/stores/index";
import CartItem from "@/components/CartItem.vue";
import { ref } from "vue";
import { onMounted, computed } from "vue";
const counterStore = useCounterStore();
// const checkAll = ref(false);
const checkboxCart = ref(false);
const checkboxOrder = ref(false);
// const cartChoose = ref([]);
// const orderCart = ref([]);
// const billEach = ref(0);
const hidden = ref(true);
const arrId = ref([]);
const totalBillBottom = ref(0);
onMounted(() => {
  counterStore.listCarts = JSON.parse(localStorage.getItem("cart"));
  localStorage.removeItem("addCart");
  console.log(counterStore.listCarts);
  counterStore.totalBill();
});
const addOrder = (productId, check) => {
  // console.log(productId);
  // console.log(check);

  if (check === false) {
    arrId.value = arrId.value.concat(productId);
    localStorage.setItem("addCart", JSON.stringify(arrId.value));
    hidden.value = false;
  } else {
    const index = arrId.value.findIndex((item) => item === productId);
    if (index !== -1) {
      arrId.value.splice(index, 1);
      localStorage.setItem("addCart", JSON.stringify(arrId.value));
      if(arrId.value.length === 0)
      {
        hidden.value = true;
      }
    }
  }
};
const computedValue = computed(() => {
  const totalBill = arrId.value.reduce((total, productId) => {
    return total + counterStore.totalEachProduct(productId);
  }, 0);

  return { arrId: arrId.value, billEach: totalBill };
});
// const purchaseOrder = () => {
//   const arrayPurchase = localStorage.getItem("addCart") || [];
//   for (let i = 0; i < arrayPurchase.length; i++) {
//     const findIndexById = counterStore.listCarts.findIndex(arrId.value[i]);
//     cartChoose.value = counterStore.listCarts[findIndexById];
//     orderCart.value = orderCart.value.concat(cartChoose.value);
//     console.log(orderCart.value);
//   }
// };
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
// const handleCheckAllChange = (value) => {
//   console.log(value)
// };
const handleCheckAllChange = (checkboxNumber) => {
  var checkBox = document.getElementById("myCheck");
  var checkFix = document.getElementById("checkFixed");
  if (checkBox.checked === true || checkFix.checked === true) {
    counterStore.check = true;
  } else {
    counterStore.check = false;
  }
  // var checkFix = document.getElementById("checkFixed");
  if (checkboxNumber === 1) {
    // Nếu checkbox 1 được tick, đặt giá trị của checkbox 2 thành true
    checkboxOrder.value = !checkboxCart.value;
    totalBillBottom.value = counterStore.totalCart;
  } else if (checkboxNumber === 2) {
    // Nếu checkbox 2 được tick, đặt giá trị của checkbox 1 thành true
    checkboxCart.value = !checkboxOrder.value;
    totalBillBottom.value = 0;
  }
};
</script>

<style lang="scss" scopped>
// .order {
//   display: none;
// }
.background {
  background-color: #f9ece6;
  margin-right: 45px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 10%;
}
.btn-delete {
  border: none;
  background-color: #fff;
  cursor: pointer;
}
.color-price {
  color: orangered;
}
.btn-add {
  border-radius: 0;
  // padding: 10px 40px;
}
.left-absolute {
  position: absolute;
  left: 30px;
  color: black;
}
.position-relative {
  position: relative;
}
.text-align-left-absolute {
  text-align: left;
  position: absolute;
  left: 0;
}
.border2 {
  color: black;
  display: flex;
  text-align: center;
  vertical-align: middle;
  align-items: center;
}
.border {
  color: gray;
  display: flex;
  text-align: center;
}
.text-align-center {
  margin-top: 40px;
  text-align: center;
  margin-bottom: 40px;
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
