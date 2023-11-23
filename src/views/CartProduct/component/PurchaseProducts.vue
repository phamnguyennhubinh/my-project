<!-- import { VALUE_SPLIT } from 'ant-design-vue/es/vc-cascader/utils/commonUtil'; -->
<template>
  <section class="container">
    <div class="">
      <div class="backgr-img"></div>
      <div class="font-color">
        <i class="fa-solid fa-location-dot" style="color: orangered"></i
        >&ensp;Địa chỉ nhận hàng
      </div>
      <div>
        <a-button type="primary" @click="showDrawer" class="button-add-address">
          <template #icon><PlusOutlined /></template>
          <i class="fa-solid fa-plus" style="color: #fff">&ensp;</i>&ensp;
          Thêm/Thay đổi địa chỉ
        </a-button>
        <a-drawer
          title="Add delivery address"
          :width="720"
          :open="open"
          :body-style="{ paddingBottom: '80px' }"
          :footer-style="{ textAlign: 'right' }"
          @close="onClose"
        >
          <a-form :model="form" :rules="rules" layout="vertical">
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item label="Name" name="name">
                  <button @click="getFullName">Hi</button>
                  <a-input
                  id="getName"
                    v-model:value="form.name"
                    v-model="message"
                    placeholder="Please enter your name"
                    pattern="[A-Za-z]+"
                  /> 
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="Phone number" name="phone">
                  <a-input
                  id="phoneNumber"
                    v-model:value="form.phone"
                    placeholder="Please enter your phone number"
                    type="number"
                    maxlength="10"
                    pattern=" /^[0-9-+]+$/"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item label="City" name="city">
                  <!-- <a-select
                   v-model:value="form.owner"
                   placeholder="Please a-s an owner"
                 >
                   <a-select-option value="xiao">Xiaoxiao Fu</a-select-option>
                   <a-select-option value="mao">Maomao Zhou</a-select-option>
                 </a-select> -->
                  <a-select
                    v-model:value="selectedCity"
                    @change="loadDistricts"
                    placeholder="Choose your city"
                  >
                    <!-- <a-select-option value="" selected
                     ></a-select-option
                   > -->
                    <a-select-option
                      v-for="city in cities"
                      :key="city.code"
                      :value="city.code"
                      >{{ city.name }}</a-select-option
                    >
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="District" name="district">
                  <a-select
                    v-model:value="selectedDistrict"
                    @change="loadWards"
                    placeholder="Choose your district"
                  >
                    <!-- <a-select-option value="" selected
                     ></a-select-option
                   > -->
                    <a-select-option
                      v-for="district in districts"
                      :key="district.code"
                      :value="district.code"
                      >{{ district.name }}</a-select-option
                    >
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="Ward" name="ward">
                  <a-select
                    v-model:value="selectedWard"
                    @change="printResult"
                    placeholder="Choose your ward"
                  >
                    <!-- <a-select-option value="" selected
                     ></a-select-option
                   > -->
                    <a-select-option
                      v-for="ward in wards"
                      :key="ward.code"
                      :value="ward.code"
                      >{{ ward.name }}</a-select-option
                    >
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="Specific address" name="specificAddress">
                  <a-input
                    v-model:value="form.specificAddress"
                    placeholder="Please enter your specific address"
                  />
                </a-form-item>
              </a-col>
              <!-- <a-col :span="12">
               <a-form-item label="DateTime" name="dateTime">
                 <a-date-picker
                   v-model:value="form.dateTime"
                   style="width: 100%"
                   :get-popup-container="(trigger) => trigger.parentElement"
                 />
               </a-form-item>
             </a-col> -->
            </a-row>
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="Description" name="description">
                  <a-textarea
                    v-model:value="form.description"
                    :rows="4"
                    placeholder="please enter url description"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
          <template #extra>
            <a-space>
              <a-button @click="onClose">Cancel</a-button>
              <a-button type="primary" @click="onClose">Submit</a-button>
            </a-space>
          </template>
        </a-drawer>
      </div>
    </div>
    <div>
      <div class="row font-color-title margin-top-30">
        <div class="col-md-6 center">Sản phẩm</div>
        <div class="col-md-2">Đơn giá</div>
        <div class="col-md-2">Số lượng</div>
        <div class="col-md-2">Thành tiền</div>
      </div>
      <div class="row margin-top align-item-center" v-for="item in counterStore.arrayTicked" :key="item.id"><hr>
        <div class="col-md-3">
          <img class="pictureCart" :src="item.pic[0]">
        </div>
        <div class="col-md-3">{{ item.name }}</div>
        <div class="col-md-2">${{ item.price }}</div>
        <div class="col-md-2">{{ item.quantity }}</div>
        <div class="col-md-2">${{ item.price*item.quantity }}</div>
      </div>
    </div>
    <hr />
    <div>
      <div class="row">
        <div class="col-md-6">
          <textarea
            placeholder="Lưu ý cho người bán"
            class="textarea"
          ></textarea>
        </div>
        <div class="col-md-6 font-color-title">
          <span class="color-shipping">Đơn vị vận chuyển: &ensp; </span>
          <a-select
            v-model:value="value2"
            class="width-option"
            :dropdown-match-select-width="false"
            :placement="placement"
          >
            <a-select-option value="HangZhou">Nhanh</a-select-option>
            <a-select-option value="NingBo">Hỏa tốc</a-select-option>
          </a-select>
          <span>&ensp;&ensp;Nhận hàng vào ngày 24/11 đến 26/11</span>
          <div>Được đồng kiểm</div>
          <div>Tổng số tiền: ${{ counterStore.billOrder }}</div>
        </div>
      </div>
    </div>
    <hr />
    <!-- <hr>
   <div class="display-grid text-align-right font-color-title">


           <h6 class="ajust bawp">Tổng tiền hàng</h6>
           <div class="bawp">$14000</div>
       <div class=" margin-top">Phí vân chuyển:&emsp;  $14000</div>
       <div class="margin-top">Tổng thanh toán:&emsp;  <span class="totalBill">$14000</span></div>
   </div> -->
    <div class="row margin-top-15 middle-center">
      <div class="col-md-10" style="text-align: right">
        <span>Tổng tiền hàng:</span>
      </div>
      <div class="col-md-2"><span>${{ counterStore.billOrder }}</span></div>
    </div>
    <div class="row margin-top-15 middle-center">
      <div class="col-md-10" style="text-align: right">
        <span>Phí vận chuyển:</span>
      </div>
      <div class="col-md-2"><span>${{ ship }}</span></div>
    </div>
    <div class="row margin-top-15 middle-center">
      <div class="col-md-10" style="text-align: right">
        <span>Tổng thanh toán:</span>
      </div>
      <div class="col-md-2"><span class="totalBill">${{ ship + counterStore.billOrder }}</span></div>
    </div>
    <hr />
    <div class="text-align-right">
      <button class="btn-order">Đặt hàng</button>
    </div>

  </section>
</template>

<script setup>
// import { ref } from "vue";
import { onMounted, reactive, ref } from "vue";
import { useCounterStore } from "@/stores";
const counterStore = useCounterStore();
// const arrayCart = ref([]);
// const cartChoose = ref([]);
// const orderCart = ref([]);
const value2 = ref("HangZhou");
const ship = ref(15);
const form = reactive({
  name: "",
  city: "",
  phone: "",
  district: "",
  ward: "",
  specificAddress: "",
  description: "",
});
const rules = {
  name: [
    {
      required: true,
      message: "Please enter user name",
    },
  ],
  // city: [
  //   {
  //     required: true,
  //     message: "Please enter your City",

  //   },
  // ],
  phone: [
    {
      required: true,
      message: "Please enter your phone number",
    },
  ],
  // district: [
  //   {
  //     required: true,
  //     message: "Please choose your district",

  //   },
  // ],
  // ward: [
  //   {
  //     required: true,
  //     message: "Please choose your ward",
  //   },
  // ],
  specificAddress: [
    {
      required: true,
      message: "Please choose your specific address",
    },
  ],
  description: [
    {
      required: true,
      message: "Please enter url description",
    },
  ],
};
const open = ref(false);
const showDrawer = () => {
  open.value = true;
};
const onClose = () => {
  open.value = false;
};
onMounted( ()=>{  counterStore.productTicked();
  // console.log(orderCart.value);
  // console.log(document.getElementById("getName").value);
});
const getFullName = () => {
  let getFull = document.getElementById("phoneNumber").value; //getFullName 

  alert(getFull);
}
</script>

<script>
// import { ASelect, AOption } from 'ant-design-vue';
import axios from "axios";
// import { useCompactItemContext } from "ant-design-vue/es/space/Compact";
export default {
  components: {},
  data() {
    return {
      host: "https://provinces.open-api.vn/api/",
      cities: [],
      districts: [],
      wards: [],
      selectedCity: "",
      selectedDistrict: "",
      selectedWard: "",
      result: "",
    };
  },
  mounted() {
    this.callAPI(`${this.host}?depth=1`);
  },
  methods: {
    callAPI(api) {
      axios.get(api).then((response) => {
        this.cities = response.data;
      });
    },
    loadDistricts() {
      console.log("Selected City:", this.selectedCity);
      this.callApiDistrict(`${this.host}p/${this.selectedCity}?depth=2`);
      this.printResult();
    },
    loadWards() {
      console.log("Selected District:", this.selectedDistrict);
      this.callApiWard(`${this.host}d/${this.selectedDistrict}?depth=2`);
      this.printResult();
    },

    callApiDistrict(api) {
      axios.get(api).then((response) => {
        this.districts = response.data.districts;
      });
    },
    callApiWard(api) {
      axios.get(api).then((response) => {
        this.wards = response.data.wards;
      });
    },
    printResult() {
      if (
        this.selectedCity !== "" &&
        this.selectedDistrict !== "" &&
        this.selectedWard !== ""
      ) {
        this.result = `${this.getCityName()} | ${this.getDistrictName()} | ${this.getWardName()}`;
      }
    },
    getCityName() {
      return (
        this.cities.find((city) => city.code === this.selectedCity)?.name || ""
      );
    },
    getDistrictName() {
      return (
        this.districts.find(
          (district) => district.code === this.selectedDistrict
        )?.name || ""
      );
    },
    getWardName() {
      return (
        this.wards.find((ward) => ward.code === this.selectedWard)?.name || ""
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.align-item-center {
  display: flex;
  align-items: center;
}
.center {
  text-align: center;
}
.margin-top {
  margin-top: 10px;
}
.pictureCart {
  width: 20%;
  height: auto;
  margin-left: 30px;
}
.middle-center {
  display: flex;
  vertical-align: middle;
  align-items: center;
  font-size: 18px;
}
.btn-order {
  border: none;
  background-color: orangered;
  color: white;
  margin-top: 5px;
  padding: 12px 60px;
  font-size: 18px;
  &:hover {
    background-color: lightcoral;
  }
}
.margin-top-15 {
  margin-top: 15px;
  color: gray;
}
.text-align-right {
  text-align: right;
}
.text-align-left {
  text-align: left;
}
.bawp {
  display: flex;
  align-items: center;
}
.ajust {
  grid-column-start: 2;
  grid-column-end: 3;
}
.display-grid {
  display: grid;
  grid-template-columns: 1fr max-content max-content;
  grid-template: auto;
  padding-top: 15px;
}
.margin-top {
  margin-top: 10px;
}
.totalBill {
  color: orangered;
  font-size: 25px;
  font-weight: 500;
}
.textarea {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.color-shipping {
  color: green;
}
.text-align-right {
  text-align: right;
  margin-right: 20px;
}
.margin-top-30 {
  margin-top: 30px;
  margin-bottom: 30px;
}
.font-color-title {
  color: gray;
}
.button-add-address {
  border: none;
  border-radius: 5px;
  background-color: orangered;
  color: white;
  margin-top: 5px;
  padding: 8px 20px;
  &:hover {
    background: #f18d9b;
  }
}
.font-color {
  color: orangered;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 20px;
}
.backgr-img {
  height: 3px;
  width: 100%;
  background-position-x: -30px;
  background-size: 116px 3px;
  background-image: repeating-linear-gradient(
    45deg,
    #6fa6d6,
    #6fa6d6 33px,
    transparent 0,
    transparent 41px,
    #f18d9b 0,
    #f18d9b 74px,
    transparent 0,
    transparent 82px
  );
}
</style>
