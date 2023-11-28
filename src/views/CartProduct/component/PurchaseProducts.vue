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
        <div class="margin-left">
          <!-- <span
            ><b
              >{{ counterStore.infoDeliveryDetail[0].name }}&ensp;{{
                counterStore.infoDeliveryDetail[0].phone
              }}</b
            >
            &ensp;{{ counterStore.infoDeliveryDetail[0].specificAddress }},
            {{ counterStore.infoDeliveryDetail[0].ward }},
            {{ counterStore.infoDeliveryDetail[0].district }},
            {{ counterStore.infoDeliveryDetail[0].city }}&ensp;&ensp;
          </span> -->
          <a-button
            type="primary"
            @click="showDrawer"
            class="button-add-address"
          >
            <template #icon><PlusOutlined /></template>
            <i class="fa-solid fa-plus" style="color: #fff">&ensp;</i>&ensp;
            Thay đổi
          </a-button>
        </div>
 
 
        <a-drawer
          title="Add delivery address"
          :width="720"
          :open="open"
          :body-style="{ paddingBottom: '80px' }"
          :footer-style="{ textAlign: 'right' }"
          @close="onClose"
        >
          <a-form ref="formRef" :model="form" :rules="rules" layout="vertical">
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item label="Name" name="name">
                  <a-input
 
 
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
    
                    v-model:value="form.phone"
                    placeholder="Please enter your phone number"
                    maxlength="10"
                    pattern="/^(0[39]\d{8}|[39]\d{8})$/"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item label="City" name="city">
                  <a-select
                    v-model:value="form.city"
                    @change="loadDistricts"
                    placeholder="Choose your city"
                  >
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
                    v-model:value="form.district"
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
                    v-model:value="form.ward"
                    @change="printResult"
                    placeholder="Choose your ward"
                  >
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
              <a-button type="primary" @click="handleSubmit">Submit</a-button>
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
      <!-- <div
        class="row margin-top align-item-center"
        v-for="item in counterStore.arrTicked"
        :key="item.id"
      >
        <hr />
        <div class="col-md-3">
          <img class="pictureCart" :src="item.pic[0]" />
        </div>
        <div class="col-md-3">{{ item.name }}</div>
        <div class="col-md-2">${{ item.price }}</div>
        <div class="col-md-2">{{ item.quantity }}</div>
        <div class="col-md-2">${{ item.price * item.quantity }}</div>
      </div> -->
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
          <div>Tổng số tiền: $</div>
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
      <div class="col-md-2">
        <span>${{ counterStore.billOrder }}</span>
      </div>
    </div>
    <div class="row margin-top-15 middle-center">
      <div class="col-md-10" style="text-align: right">
        <span>Phí vận chuyển:</span>
      </div>
      <div class="col-md-2">
        <span>${{ ship }}</span>
      </div>
    </div>
    <div class="row margin-top-15 middle-center">
      <div class="col-md-10" style="text-align: right">
        <span>Tổng thanh toán:</span>
      </div>
      <div class="col-md-2">
        <span class="totalBill">${{ ship + counterStore.billOrder }}</span>
      </div>
    </div>
    <hr />
    <div class="text-align-right">
      <button class="btn-order">Đặt hàng</button>
    </div>
  </section>
 </template>
 
 
 <!--
 <script setup>
 // import { ref } from "vue";
 import { onMounted, reactive, ref } from "vue";
 import { useCounterStore } from "@/stores";
 // import axios from "axios";
 // import { a-form } from 'ant-design-vue';
 const counterStore = useCounterStore();
 // const arrayCart = ref([]);
 // const cartChoose = ref([]);
 // const orderCart = ref([]);
 const value2 = ref("HangZhou");
 const ship = ref(15);
 const formDataArray = ref([]);
 const formRef = ref(null);
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
  formRef.value = form;
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
 };
 const handleSubmit = () => {
  formRef.value.validate().then(valid => {
        if (valid) {
          // Biểu mẫu hợp lệ, thêm thông tin vào mảng
          formDataArray.value.push({
            name: form.value.name,
            phone: form.value.phone,
            city: this.selectedCity.value,
            district: this.selectedDistrict.value,
            ward: this.selectedWard.value,
            specificAddress: form.value.specificAddress,
            description: form.value.description,
          });
          // Tùy chỉnh xử lý lưu dữ liệu, ví dụ: có thể gọi API để lưu vào cơ sở dữ liệu
          // this.saveDataToDatabase();
          console.log(formDataArray.value);
          // Đóng Drawer sau khi xử lý
          this.onClose();
        } else {
          // Biểu mẫu không hợp lệ, hiển thị thông báo hoặc thực hiện các hành động khác
          console.log("Form is not valid");
        }
      });
 };
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
 -->
 
 
 <script setup>
 import { ref, reactive, onMounted } from "vue";
 import { useCounterStore } from "@/stores";
 import axios from "axios";
 const host = "https://provinces.open-api.vn/api/";
 const cities = ref([]);
 const districts = ref([]);
 const wards = ref([]);
 const result = ref("");
 // const arr = ref([]);
 onMounted(() => {
  callAPI(`${host}?depth=1`);
 });
 
 
 const callAPI = (api) => {
  axios.get(api).then((response) => {
    cities.value = response.data;
  });
 };
 
 
 const counterStore = useCounterStore();
 const value2 = ref("HangZhou");
 const ship = ref(15);
 // const formDataArray = ref([]);
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
  phone: [
    {
      required: true,
      message: "Please enter your phone number",
    },
  ],
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
  // open.value = false;
  if (formRef.value) {
    open.value = false;
  }
 };
 
 
 onMounted(() => {
  // counterStore.productTicked();
  // counterStore.infoDelivery();
  // console.log(counterStore.listCarts);
 });
 
 
 // const handleSubmit = () => {
 //   formDataArray.value = JSON.parse(localStorage.getItem("infoDelivery")) || [];
 //   formRef.value.validate().then((valid) => {
 //     if (valid) {
 //       formDataArray.value.push({
 //         name: form.name,
 //         phone: form.phone,
 //         city: getCityName(),
 //         district: getDistrictName(),
 //         ward: getWardName(),
 //         specificAddress: form.specificAddress,
 //         description: form.description,
 //       });
 //       console.log(formDataArray.value);
 //       localStorage.setItem("infoDelivery", JSON.stringify(formDataArray.value));
 //       counterStore.infoDelivery();
 //       onClose();
 //     } else {
 //       console.log("Form is not valid");
 //     }
 //   });
 // };
 
 
 const formRef = ref(null);
 
 
 const loadDistricts = () => {
  console.log("Selected City:", form.city);
  callApiDistrict(`${host}p/${form.city}?depth=2`);
  printResult();
 };
 
 
 const loadWards = () => {
  console.log("Selected District:", form.ward);
  callApiWard(`${host}d/${form.district}?depth=2`);
  printResult();
 };
 
 
 const callApiDistrict = (api) => {
  axios.get(api).then((response) => {
    districts.value = response.data.districts;
  });
 };
 
 
 const callApiWard = (api) => {
  axios.get(api).then((response) => {
    wards.value = response.data.wards;
  });
 };
 
 
 const printResult = () => {
  // if (
  //   selectedCity.value !== "" &&
  //   selectedDistrict.value !== "" &&
  //   selectedWard.value !== ""
  // ) {
  //   result.value = `${getCityName()} | ${getDistrictName()} | ${getWardName()}`;
  // }
  console.log("Thành phố:", getCityName());
  console.log("Quận:", getDistrictName());
  console.log("Phường:", getWardName());
  if (form.city !== "" && form.district !== "" && form.ward !== "") {
    result.value = `${getCityName()} | ${getDistrictName()} | ${getWardName()}`;
  }
 };
 
 
 const getCityName = () => {
  return cities.value.find((city) => city.code === form.city)?.name || "";
 };
 
 
 const getDistrictName = () => {
  return (
    districts.value.find((district) => district.code === form.district)?.name ||
    ""
  );
 };
 
 
 const getWardName = () => {
  return wards.value.find((ward) => ward.code === form.ward)?.name || "";
 };
 </script>
 
 
 <style lang="scss" scoped>
 .margin-left {
 margin-left: 30px;
 }
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
  // padding: 8px 20px;
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
 
 
 
 
 