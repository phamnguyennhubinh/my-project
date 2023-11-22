
import { VALUE_SPLIT } from 'ant-design-vue/es/vc-cascader/utils/commonUtil';
<template>
  <section class="container">
    <div class="">
      <div class="backgr-img"></div>
      <div class="font-color">
        <i class="fa-solid fa-location-dot" style="color: orangered"></i
        >&ensp;Địa chỉ nhận hàng
      </div>
      <div> 
        <button class="button-add-address"><i class="fa-solid fa-plus" style="color: #fff"></i>&ensp;Thêm địa chỉ</button>
      </div>
    </div>
    <div>
        <div class="row font-color-title margin-top-30 ">
            <div class="col-md-6">Sản phẩm</div>
            <div class="col-md-2">Đơn giá</div>
            <div class="col-md-2">Số lượng</div>
            <div class="col-md-2">Thành tiền</div>
        </div>
        <div class="row">
            <div class="col-md-3">Ảnh</div>
            <div class="col-md-3">Tên sản phẩm</div>
            <div class="col-md-2">$7000</div>
            <div class="col-md-2">2</div>
            <div class="col-md-2">$14000</div>
        </div>
    </div>
    <hr>
    <div>
        <div class="row">
            <div class="col-md-6">
                <textarea placeholder="Lưu ý cho người bán" class="textarea"></textarea>
            </div>
            <div class="col-md-6 font-color-title">
                <span class="color-shipping">Đơn vị vận chuyển: &ensp; </span>
                <a-select
                    v-model:value="value2"
                    class="width-option"
                    :dropdown-match-select-width="false"
                    :placement="placement"
                  >
                    <a-select-option value="HangZhou"
                      >Nhanh</a-select-option
                    >
                    <a-select-option value="NingBo"
                      >Hỏa tốc</a-select-option
                    >
                  </a-select>
                  <span>&ensp;&ensp;Nhận hàng vào ngày 24/11 đến 26/11</span>
                  <div>Được đồng kiểm</div>
                  <div>Tổng số tiền:&emsp;  $14000</div>
            </div>
        </div>
    </div>
    <hr>
    <!-- <hr>
    <div class="display-grid text-align-right font-color-title">

            <h6 class="ajust bawp">Tổng tiền hàng</h6>
            <div class="bawp">$14000</div>
        <div class=" margin-top">Phí vân chuyển:&emsp;  $14000</div>
        <div class="margin-top">Tổng thanh toán:&emsp;  <span class="totalBill">$14000</span></div>
    </div> -->
    <div class="row margin-top-15">
        <div class="col-md-10 " style="text-align: right"><span>Tổng tiền hàng:</span></div>
        <div class="col-md-2"><span>$14000</span></div>
    </div>
    <div class="row margin-top-15">
        <div class="col-md-10" style="text-align: right"><span>Phí vận chuyển:</span></div>
        <div class="col-md-2"><span>$14000</span></div>
    </div>
    <div class="row margin-top-15">
        <div class="col-md-10" style="text-align: right"><span>Tổng thanh toán:</span></div>
        <div class="col-md-2"><span class="totalBill">$28000</span></div>
    </div>
    <hr>
    <div class="text-align-right"> 
        <button class="btn-order">Đặt hàng</button>
    </div>
    
  </section>
</template>

<script setup>
import {ref} from "vue";
const value2 = ref("HangZhou");
</script>

<style lang="scss" scoped>
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
    font-size: 18px;
    font-weight: 500;
}
.textarea {
    width: 100%;
    height: 100%;
    padding: 10px;
}
.color-shipping{
    color: green;
}
.text-align-right {
    text-align: right;
    margin-right: 20px;
}
.margin-top-30 
{
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
    &:hover 
    {
        // background-color: rgb(222, 164, 164);
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
