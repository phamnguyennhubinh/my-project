<template>
 <section id="product">
   <h1 class="text-align-center">LIST CARTS</h1>
   <div class="grid container border">
     <div class="col-md-4 col-sm-4 position-relative">
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
           @change="selectAll"
           @click="handleCheckAllChange()"
           v-model="checkboxCart"
         />
       </span>


       <span class="left-absolute">Sản phẩm</span>
     </div>
     <div class="col-md-2 col-sm-2">Đơn giá</div>
     <div class="col-md-2 col-sm-2">Số lượng</div>
     <div class="col-md-2 col-sm-2" >Số tiền</div>
     <div class="col-md-2 col-sm-2">Thao tác</div>
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
         :status="cart.status"
         @updateStatus="updateStatus"
         @delete="deleteCart"
         @addOrder="addOrder"
         v-model:checkboxCart="checkboxCart"
         @followChange="followChecked"
         @checkedSomeToAll="followChecked"
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
   <div class="row border2 background  ">
     <!-- <div class="col">
       <input
         type="checkbox"
         id="checkFixed"
         v-model="checkboxOrder"
         @change="selectAll"
         @click="handleCheckAllChange(2)"
       />
       <span>&nbsp;&nbsp;Chọn tất cả</span>
     </div> -->
     <div class="col">
       <div>Tổng thanh toán</div>
       <div>({{ computedValue.countPro }} sản phẩm)</div>
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
import { onMounted, computed, watch } from "vue";
const counterStore = useCounterStore();
// const totalCheckAll = ref(0);
const checkboxCart = ref(false);
const checkboxOrder = ref(false);
const howMuchTrue = ref(0);
const count = ref(0);
const hasFalse = ref();
const hidden = ref(true);
const update = ref([]);
// const countChoosePro = ref(0);
// const arrId = ref([]);
// const totalBillBottom = ref(0);


// Hàm watcher để theo dõi thay đổi của checkboxCart
watch(
 () => checkboxCart.value,
 (newValue) => {
   // Thực hiện các hành động khi giá trị của checkboxCart thay đổi
   if (newValue) {
     console.log("CheckboxCart được chọn.");
     // Thực hiện các hành động khi checkboxCart được chọn
     for (let i = 0; i < counterStore.listCarts.length; i++) {
       counterStore.listCarts[i].status = true;
     }
     hidden.value = false;
     console.log(counterStore.listCarts);
     // localStorage.setItem("addCart", JSON.stringify(arrId.value));
   } else {
     console.log("CheckboxCart không được chọn.");
     for (let i = 0; i < counterStore.listCarts.length; i++) {
       counterStore.listCarts[i].status = false;
     }
     hidden.value = true;
     console.log(counterStore.listCarts);
   }
 }
);
watch(
  () => counterStore.listCarts,
  (newValue, oldValue) => {
    // Đây là nơi xử lý khi có sự thay đổi trong counterStore.listCarts
    console.log('New value:', newValue);
    console.log('Old value:', oldValue);
    update.value = oldValue;
    // Gọi hàm hoặc thực hiện các hành động khác cần thiết khi có sự thay đổi
    // Ví dụ: computedValue.refresh(); // Cập nhật giá trị computed
  }
);

onMounted(async () => {
 // Lấy danh sách cart từ localStorage
 const idTemp = JSON.parse(localStorage.getItem("idCustomer"));
 await counterStore.fetchListCustomerCart(idTemp);
 const storedCarts = counterStore.getListCart.cart || [];
 // Thêm biến status: true vào mỗi object
 if (storedCarts) {
   counterStore.listCarts = storedCarts.map((cart) => ({
     ...cart,
     status: false,
   }));
 }
 // localStorage.setItem("cart",counterStore.listCarts);
 console.log(counterStore.listCarts);
 localStorage.removeItem("addCart");
 console.log(counterStore.listCarts);
 counterStore.totalBill();
});

// const listCartComputed = computed(()=>{
//   return {list: counterStore.listCarts}
// })
const updateStatus = (newStatus, productId) => {
 // this.status = newStatus;counterStore.listCarts
 console.log(newStatus);
 const storedCarts = counterStore.getListCart.cart;
 if(newStatus === true){
   hidden.value = false;
 }
 else
 {
   hidden.value = true;
 }
 // cập nhật biến status: true or false vào mỗi object
 if (storedCarts) {
   const findIndex = counterStore.listCarts.findIndex((item) => item.id === productId);
   if(findIndex !== -1)
   {
     counterStore.listCarts[findIndex].status = newStatus;
   }
   else
   {
     console.error();
   }
 }
   howMuchTrue.value = 0;
   count.value = 0;
   for(let i=0; i<counterStore.listCarts.length; i++)
   {
     count.value++;
     if(counterStore.listCarts[i].status === true)
     {
       howMuchTrue.value++;
     }
     else
     {
       hasFalse.value = counterStore.listCarts[i].id;
     }
   }
   if(count.value === howMuchTrue.value)
   {
     checkboxCart.value = true;
   }
   else
   {
     checkboxCart.value = false;
   }
 console.log(counterStore.listCarts);
};


const selectAll = () => {
 console.log(checkboxCart.value);
 if (checkboxCart.value === true) {
   checkboxOrder.value = true;
   counterStore.checkedbox = true;
 } else {
   checkboxOrder.value = false;
   counterStore.checkedbox = false;
 }
};


const computedValue = computed(() => {
 let totalBill = 0;
//  let count = 0;
let count = 0;
 for (let i = 0; i < counterStore.listCarts.length; i++) {
  
   const cart = counterStore.listCarts[i];
   if (cart.status === true) {
     count++;
     totalBill += counterStore.totalEachProduct(cart.id);
   }
 }
 return { billEach: totalBill, countPro: count };
});
const deleteCart = async (productId) => {
 for (var i = 0; i < counterStore.listCarts.length; i++) {
   if (counterStore.listCarts[i].id === productId) {
     counterStore.listCarts.splice(i, 1);
   }
   localStorage.setItem("cart", JSON.stringify(counterStore.listCarts));
   counterStore.totalBill();
   console.log(counterStore.listCarts);
   const idCustom = JSON.parse(localStorage.getItem("idCustomer"));
  await counterStore.removeCart(idCustom);
  // await counterStore.updateCart(idCustom,counterStore.listCarts)
  const temp = {id: idCustom, cart: counterStore.listCarts};
  console.log(temp);
  await counterStore.addCartForAcc(temp);
 }
};
const totalCart = computed(() => counterStore.totalBill());
// const handleCheckAllChange = (value) => {
//   console.log(value)
// };
const handleCheckAllChange = () => {
 selectAll();
 // followChecked();
 var checkBox = document.getElementById("myCheck");
//  var checkFix = document.getElementById("checkFixed");
 if (checkBox.checked === true) {
   counterStore.check = true;
 } else {
   counterStore.check = false;
 }
 // var checkFix = document.getElementById("checkFixed");
//  if (checkboxNumber === 1) {
//    // Nếu checkbox 1 được tick, đặt giá trị của checkbox 2 thành true
//    checkboxOrder.value = !checkboxCart.value;
//    totalBillBottom.value = counterStore.totalCart;
//  } else if (checkboxNumber === 2) {
//    // Nếu checkbox 2 được tick, đặt giá trị của checkbox 1 thành true
//    checkboxCart.value = !checkboxOrder.value;
//    totalBillBottom.value = 0;
//  }
};
</script>


<style lang="scss" scopped>
// .order {
//   display: none;
// }
.margin-left-0 {
  margin-left: 0px;
}
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
 .picture-box {}
 .background {
  height: 15%;
 }
}
@media screen and (max-width: 800px) {
 .row {
   --bs-gutter-x: 0;
 }
 .border {
  display: none;
 }
}
</style>



