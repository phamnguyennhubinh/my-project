<template>
  <div id="main">
    <!-- <div class="container">
      <a-breadcrumb style="margin-bottom: 10px">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item
          ><a href="http://localhost:8080/shop">Shop</a></a-breadcrumb-item
        >
        <a-breadcrumb-item
          ><a href="http://localhost:8080/shop/detail"
            >Detail</a
          ></a-breadcrumb-item
        >
        <a-breadcrumb-item
          ><a href="http://localhost:8080/shop/detail"
            >Vòng tay nữ mạ vàng 24k siêu đẹp, siêu sang</a
          ></a-breadcrumb-item
        >
      </a-breadcrumb>
      <section class="flex card">
        <section class="d-flex flex-row">
          <section class="p-2">
            <div class="flex flex-column">
              <div>
                <div class="picdetail">
                  <picture>
                    <img
                      class="picMain"
                      src="https://i.imgur.com/1bze9LE.png"
                    />
                  </picture>
                </div>
              </div>
              <div class="smallPics">
                <div class="manypic">
                  <a-image-preview-group>
                    <a-image
                      class="pic"
                      width="100px"
                      src="https://i.imgur.com/SarTYwV.png"
                    ></a-image>
                    <a-image
                      class="pic"
                      width="100px"
                      src="https://i.imgur.com/EXkkAtR.png"
                    ></a-image>
                    <a-image
                      class="pic"
                      width="100px"
                      src="https://i.imgur.com/8C8UIlP.png"
                    ></a-image>
                    <a-image
                      class="pic"
                      width="70px"
                      src="https://i.imgur.com/uHpchAM.png"
                    ></a-image>
                  </a-image-preview-group>
                </div>
              </div>
            </div>
          </section>
          <section class="p-2">
            <h2 class="nameProduct">
              <span
                style="
                  background-color: orangered;
                  color: #fff;
                  font-size: 13px;
                "
                >Yêu thích</span
              >&nbsp;Vòng tay nữ mạ vàng 24k siêu đẹp, siêu sang
            </h2>
            <div>
              {{ value }}
              <a-rate v-model:value="value" allowHalf></a-rate>
              <a href="#" style="text-decoration: none; color: black"
                >&nbsp;&nbsp;| 704 Đánh giá</a
              >
              &nbsp; | &nbsp; 2,5k Đã bán
            </div>
            <div class="" style="background-color: #fafafa">
              <div style="margin-top: 30px">
                <span style="text-decoration: line-through">90.000</span>
                <span style="color: orangered; font-size: 40px">
                  &nbsp;49.000&nbsp;&nbsp;</span
                >
                <span style="background-color: orangered; color: #fff"
                  >46% GIẢM</span
                >
                <div class="flex items-center">
                  <i
                    class="fas fa-comments"
                    style="padding-left: 20px; color: orangered"
                  ></i>
                  <div style="padding-left: 20px">
                    <p style="color: orangered; margin-bottom: 0">Gì cũng rẻ</p>
                    <p>Giá tốt nhất so với sản phẩm cùng loại trên Shopee!</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center" style="margin-top: 20px">
              <span style="padding-left: 20px">Vận Chuyển</span>
              <i class="fas fa-truck" style="padding: 0 20px"></i>
              <div style="margin-right: 20px">
                <div>Vận chuyển Tới</div>
                <div>Phí Vận Chuyển</div>
              </div>
              <div>
                <div>
                  <a-select
                    v-model:value="value2"
                    style="width: 120px"
                    :dropdown-match-select-width="false"
                    :placement="placement"
                  >
                    <a-select-option value="HangZhou"
                      >P4, Gò Vấp</a-select-option
                    >
                    <a-select-option value="NingBo"
                      >P5, Tân Bình</a-select-option
                    >
                    <a-select-option value="WenZhou"
                      >P6, Quận 1</a-select-option
                    >
                  </a-select>
                </div>
                <div>
                  <a-select
                    v-model:value="value3"
                    style="width: 120px"
                    :dropdown-match-select-width="false"
                    :placement="placement"
                  >
                    <a-select-option value="HangZhou1"
                      >15.00-19.000</a-select-option
                    >
                    <a-select-option value="NingBo1"
                      >18.000-20.000</a-select-option
                    >
                    <a-select-option value="WenZhou1"
                      >25.000-30.000</a-select-option
                    >
                  </a-select>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <span style="margin: 0 20px">Số Lượng</span>
              <div>
                <a-input-number
                  id="inputNumber"
                  v-model:value="value1"
                  :min="1"
                  :max="100"
                />
              </div>
            </div>
            <div style="margin-left: 20px">
              <button type="button" class="button-add-cart">
                <i class="fa-solid fa-cart-plus"></i>&ensp;Thêm vào giỏ hàng
              </button>
              <button type="button" class="button-buy-now">Mua Ngay</button>
            </div>
          </section>
        </section>
      </section>
      <section class="flex card" style="margin: 50px 0">
        <h3 style="padding: 20px">CHI TIẾT SẢN PHẨM</h3>
        <div>
          <div class="flex">
            <label class="label-detail">Danh mục</label>
            <div>Sản phẩm</div>
          </div>
          <div class="flex">
            <label class="label-detail">Chất liệu</label>
            <div>Vàng</div>
          </div>
          <div class="flex">
            <label class="label-detail">Kho hàng</label>
            <div>1290</div>
          </div>
          <div class="flex">
            <label class="label-detail">Gửi từ</label>
            <div>Hà Nội</div>
          </div>
        </div>
      </section>
      <section class="flex card" style="margin: 50px 0">
        <h3 style="padding: 20px">MÔ TẢ SẢN PHẨM</h3>
        <div style="padding-left: 20px; padding-bottom: 20px;">
          Gấu bông heo ôm bình sữa lợn bú bình mẫu thú nhồi bông siêu cute hàng
          cao cấp mềm mịn 28cm <br />
          THÔNG TIN SẢN PHẨM <br />- Trọng Lượng: 0,5 kg. <br />✔️ Kích thước
          cao: 30cm <br />✔️ Chất liệu: vải Nhung nhồi bông <br />✔️ Xuất xứ:
          Việt Nam <br />✔️ Chất bông mềm mại, mịn màng <br />✔️ Cho bé chơi, ôm
          ngủ hoặc trang trí phòng <br />✔️ Bông siêu mịn, ko bị xù lông khi
          giặt. <br />✔️ Sản phẩm tuyệt đối an toàn cho bé. <br />✔️ Thích hợp
          cho trẻ nhỏ, con nít lẫn người lớn vì sự êm ái khi ôm & an toàn, không
          bị đổ lông. <br />✔️ Đẹp mắt, phù hợp làm quà sinh nhật, quà tặng lễ
          tết.
        </div>
      </section>
    </div> -->
    <section class="container">
      <div class="grid wide card">
        <a-breadcrumb class="bread_crumb">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><a href="http://localhost:8080/shop">Shop</a></a-breadcrumb-item
          >
          <a-breadcrumb-item
            ><a href="http://localhost:8080/shop/detail"
              >Detail</a
            ></a-breadcrumb-item
          >
          <a-breadcrumb-item
            ><a href="http://localhost:8080/shop/detail"
              >Vòng tay nữ mạ vàng 24k siêu đẹp, siêu sang</a
            ></a-breadcrumb-item
          >
        </a-breadcrumb>
        <div class="row">
          <div class="col-md-5">
            <div class="flex flex-column">
              <div>
                <div class="picdetail">
                  <a-image-preview-group>
                    <a-image
                      class="picMain"
                      src="https://i.imgur.com/1bze9LE.png"
                    >
                    </a-image>
                  </a-image-preview-group>
                </div>
              </div>
              <div class="smallPics">
                <div class="manypic row">
                  <a-image-preview-group>
                    <a-image
                      class="pic"
                      width="100px"
                      src="https://i.imgur.com/SarTYwV.png"
                      style="padding: 5px"
                    ></a-image>
                    <a-image
                      class="pic"
                      width="100px"
                      src="https://i.imgur.com/EXkkAtR.png"
                      style="padding: 5px"
                    ></a-image>
                    <a-image
                      class="pic"
                      width="100px"
                      src="https://i.imgur.com/8C8UIlP.png"
                      style="padding: 5px"
                    ></a-image>
                    <a-image
                      class="pic"
                      width="70px"
                      src="https://i.imgur.com/uHpchAM.png"
                      style="padding: 5px"
                    ></a-image>
                    <a-image
                      class="pic"
                      width="70px"
                      src="https://i.imgur.com/EXkkAtR.png"
                      style="padding: 5px"
                    ></a-image>
                  </a-image-preview-group>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <h3 class="nameProduct">
              <span class="like">Yêu thích</span>&nbsp;Vòng tay nữ mạ vàng 24k
              siêu đẹp, siêu sang
            </h3>
            <div>
              {{ value }}
              <a-rate v-model:value="value" allowHalf></a-rate>
              <a href="#">&nbsp;&nbsp;| 704 Đánh giá</a>
              &nbsp; | &nbsp; 2,5k Đã bán
            </div>
            <div class="price-discount-background">
              <div class="margin-top-30">
                <span class="price-discount">90.000</span>
                <span class="price"> &nbsp;49.000&nbsp;&nbsp;</span>
                <span class="discount">46% GIẢM</span>
                <div class="flex items-center">
                  <i
                    class="fas fa-comments"
                    style="color: orangered; padding-left: 20px"
                  ></i>
                  <div class="padding-left-20">
                    <p style="color: orangered; margin-bottom: 0">Gì cũng rẻ</p>
                    <p>Giá tốt nhất so với sản phẩm cùng loại trên Shopee!</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center margin-top-20">
              <span class="padding-left-20">Vận Chuyển</span>
              <i class="fas fa-truck padding-0-20"></i>
              <div class="margin-right-20">
                <div>Vận chuyển Tới</div>
                <div>Phí Vận Chuyển</div>
              </div>
              <div>
                <div>
                  <a-select
                    v-model:value="value2"
                    class="width-option"
                    :dropdown-match-select-width="false"
                    :placement="placement"
                  >
                    <a-select-option value="HangZhou"
                      >P4, Gò Vấp</a-select-option
                    >
                    <a-select-option value="NingBo"
                      >P5, Tân Bình</a-select-option
                    >
                    <a-select-option value="WenZhou"
                      >P6, Quận 1</a-select-option
                    >
                  </a-select>
                </div>
                <div>
                  <a-select
                    v-model:value="value3"
                    class="width-option"
                    :dropdown-match-select-width="false"
                    :placement="placement"
                  >
                    <a-select-option value="HangZhou1"
                      >15.00-19.000</a-select-option
                    >
                    <a-select-option value="NingBo1"
                      >18.000-20.000</a-select-option
                    >
                    <a-select-option value="WenZhou1"
                      >25.000-30.000</a-select-option
                    >
                  </a-select>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <span class="margin-0-20">Số Lượng</span>
              <div>
                <a-input-number
                  id="inputNumber"
                  v-model:value="value1"
                  :min="1"
                  :max="100"
                />
              </div>
            </div>
            <div class="margin-left-20">
              <button type="button" class="button-add-cart">
                <i class="fa-solid fa-cart-plus"></i>&ensp;Thêm vào giỏ hàng
              </button>
              <button type="button" class="button-buy-now">Mua Ngay</button>
            </div>
          </div>
        </div>
      </div>

      <section class="flex card margin-50-0">
        <h3 style="padding: 20px">CHI TIẾT SẢN PHẨM</h3>
        <div>
          <div class="flex">
            <label class="label-detail">Danh mục</label>
            <div>Sản phẩm</div>
          </div>
          <div class="flex">
            <label class="label-detail">Chất liệu</label>
            <div>Vàng</div>
          </div>
          <div class="flex">
            <label class="label-detail">Kho hàng</label>
            <div>1290</div>
          </div>
          <div class="flex">
            <label class="label-detail">Gửi từ</label>
            <div>Hà Nội</div>
          </div>
        </div>
      </section>
      <section class="flex card" style="margin: 50px 0">
        <h3 style="padding: 20px">MÔ TẢ SẢN PHẨM</h3>
        <div style="padding-left: 20px; padding-bottom: 20px">
          Gấu bông heo ôm bình sữa lợn bú bình mẫu thú nhồi bông siêu cute hàng
          cao cấp mềm mịn 28cm <br />
          THÔNG TIN SẢN PHẨM <br />- Trọng Lượng: 0,5 kg. <br />✔️ Kích thước
          cao: 30cm <br />✔️ Chất liệu: vải Nhung nhồi bông <br />✔️ Xuất xứ:
          Việt Nam <br />✔️ Chất bông mềm mại, mịn màng <br />✔️ Cho bé chơi, ôm
          ngủ hoặc trang trí phòng <br />✔️ Bông siêu mịn, ko bị xù lông khi
          giặt. <br />✔️ Sản phẩm tuyệt đối an toàn cho bé. <br />✔️ Thích hợp
          cho trẻ nhỏ, con nít lẫn người lớn vì sự êm ái khi ôm & an toàn, không
          bị đổ lông. <br />✔️ Đẹp mắt, phù hợp làm quà sinh nhật, quà tặng lễ
          tết.
        </div>
      </section>
    </section>
    <div>
      <button @click="isExpanded = !isExpanded">Trigger</button>
      <label for="moto" class="icon"> ABC </label>
      <input type="checkbox" class="nav_input" id="moto" />
      <label for="nav-mobile-input" class="icon" @click="toggleMenu">
        <i :class="['fa-solid', 'fa-2x', { 'fa-bars': !isMenuOpen, 'fa-x': isMenuOpen }, { 'rotate': isMenuOpen, 'rotate2': !isMenuOpen}]"></i></label>
      <input type="checkbox" hidden class="nav_input" id="nav-mobile-input">
      <Collapse :when="isMenuOpen">
        <!-- <p>{{ "Collapsed ".repeat(100) }}</p> -->
        <div class="hidd">
          <div id="menu2" :class="currentRoute === 'LayoutPage' ? 'backgr1' : 'backgr2'">
            <div class="row">
              <div class="col-sm-12">
                <div :class="{ 'active': currentRoute === 'LayoutPage' }">
                  <router-link :to="{name: 'LayoutPage'}">HOME</router-link>
                </div>
              </div>
              <div class="col-sm-12">
                <div :class="{ 'active2': currentRoute === 'ShopPage' }">
                  <router-link :to="{name: 'ShopPage'}">SHOP</router-link>
                </div>
              </div>
              <div class="col-sm-12">
                <a href="#">WHY US</a>
              </div>
              <div class="col-sm-12">
                <a href="#">TESTIMONIAL</a>
              </div>
              <div class="col-sm-12">
                <a href="#">CONTACT US</a>
              </div>
              <div class="col-sm-12">
                <a><i class="fa fa-user"></i><span>&nbsp;Login</span>&nbsp;&nbsp;</a>
                <a><i class="fa fa-shopping-bag"></i>&nbsp;&nbsp;</a>
                <a><i class="fa fa-search"></i></a>
              </div>
            </div>
        </div>
      </div>
      </Collapse>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Collapse } from "vue-collapsed";

const isExpanded = ref(false);
const value = ref(4.5);
const placement = ref("topLeft");
const value2 = ref("HangZhou");
const value1 = ref(1);
const value3 = ref("HangZhou1");
const currentRoute= ref(null);
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value; // Đảo ngược trạng thái mở/đóng menu
}

</script>

<style lang="scss">
@import "@/assets/styles/grid.css";
$color-main: orangered;

.margin-50-0 {
  margin: 50px 0;
}
.margin-0-20 {
  margin: 0 20px;
}
.width-option {
  width: 120px;
}
.margin-right-20 {
  margin-right: 20px;
}
.padding-0-20 {
  padding: 0 20px;
}
.color-main {
  color: $color-main;
}
.margin-top-20 {
  margin-top: 20px;
}
.margin-top-30 {
  margin-top: 30px;
}
.margin-left-20 {
  margin-left: 20px;
}
.padding-left-20 {
  padding-left: 20px;
}
.padding-left-20-icon {
  @extend .padding-left-20;
  color: $color-main;
}
.discount {
  background-color: orangered;
  color: #fff;
}
.price {
  color: orangered;
  font-size: 40px;
}
.price-discount {
  text-decoration: line-through;
}
.price-discount-background {
  background-color: #fafafa;
}
.like {
  background-color: orangered;
  color: #fff;
  font-size: 13px;
}
.bread_crumb {
  margin-bottom: 10px;
}
.row {
  .col-md-5 {
    text-align: center;
    justify-content: center;
    vertical-align: middle;
  }
}
// HIDDEN
.label-detail {
  padding-left: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.875rem;
  box-sizing: border-box;
  width: 8.75rem;
  padding-right: 0.75rem;
}
.button-add-cart {
  background-color: #fef6f5;
  border: 1px solid #ee4d2d;
  padding: 10px 40px;
  font-size: 16px;
  color: #ee4d2d;
  margin-top: 20px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.03);
  &:hover {
    background-color: #fff;
    border: 1px solid #ee4d2d;
  }
}
.button-buy-now {
  background-color: #ee4d2d;
  color: #fff;
  border: 1px solid #ee4d2d;
  padding: 10px 50px;
  font-size: 16px;
  margin-top: 20px;
  margin-left: 20px;
  &:hover {
    background: linear-gradient(#ee4d2d, #ff7337);
    border: 1px linear-gradient(#ee4d2d, #ff7337);
  }
}
a {
  text-decoration: none;
  color: black;
}
.items-center {
  align-items: center;
}
.bonus {
  width: 100%;
  box-sizing: border-box;
  padding: 1.25rem 2.1875rem 0 1.25rem;
}
.col-left {
  width: 450px;
  padding: 15px;
  flex-shrink: 0;
}
.col-right {
  flex: 1 0 auto;
  /* width: 0; */
}
.flex-auto {
  flex: 1 1 auto;
}
.picMain {
  padding-top: 30px;
}
.nameProduct {
  text-align: left;
  /* margin-right: 180px; */
}
// .container {
//   margin: 0 45px;
// }
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.flex {
  display: flex;
}
.picdetail {
  width: 100%;
  position: relative;
  /* padding-bottom: 100%; */
}
.manypic {
  display: inline-block;
  box-sizing: border-box;
}
.smallPics {
  position: relative;
  align-items: center;
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
}
.pic {
  width: 100%;
  margin: 0 10px;
  cursor: pointer;
}
</style>

<style lang="scss" scoped>
@keyframes rotateAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
@keyframes rotateAnimation2 {
  100% {
    transform: rotate(180deg);
  }
  0% {
    transform: rotate(0deg);
  }
}
#header .icon .rotate {
  animation: rotateAnimation 0.2s ease forwards;
}

#header .icon .rotate2 {
  animation: rotateAnimation2 0.2s ease forwards;
}


.hidd {
  display: block;
}
.loading
{
  position: flex;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}
.nav_input:checked ~ .hidd {
  display: block;
}
.backgr2
{
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  background-color: white;  
  margin: 0 40px;
}
.active
{
	background-color: white;
	border-radius: 5px;
  // padding: 6px 25px;
}
.active3
{
	background-color: white;
	border-radius: 5px;
  // padding: 6px 25px;
}
.active2
{
	background-color: #f4f5f6;
	border-radius: 5px;
  // padding: 6px 25px;
}
#header {
  font-family: "poppins", sans-serif;
  position: relative;
}
.homepage
{
	background-color: white;
	border-radius: 5px;
}
h1 {
    text-align: center;
}
.heading
{
	font-family: "poppins", sans-serif;
	font-weight: bold;
	font-size: 35px;
	text-align: center;
	margin-top: 20px;
	margin-bottom: 20px;
}
#menu ul 
{
	list-style-type: none;
	text-align: center;
	border-radius: 15px 15px 0 0;
	padding: 15px 0;
	margin-bottom: 0;
  li
    {
      display: inline-table;
      // padding: 6px 20px;
        a
        {
          text-decoration: none;
          color: #514f4f;
          font-size: 18px;
          padding: 10px 15px;
        }
    }
}
#menu2 
{
	list-style-type: none;
	text-align: center;
	border-radius: 15px 15px 0 0;
	padding: 15px 0;
	margin-bottom: 0;
        a
        {
          text-decoration: none;
          color: #514f4f;
          font-size: 18px;
          // padding: 10px 25px;
        }
}
.backgr1
{
	margin: 0 45px;
  background-color: #f9ece6;
  border-radius: 15px 15px 0 0;
  // margin-top: 20px;
}
.icon 
  {
    position: absolute;
    right: 0px;
  }
.bars {
 display: none;
 margin-top: 15px;
 padding-bottom: 0px;
 margin-bottom: 0;
}
@media screen and (max-width: 1023px) {
  #menu{
    display: none;
  }
  .heading {
    display: none;
  }
  .heading1{
    text-align: left;
    padding-left: 45px;
    font-size: 32px;
    font-family: "poppins", sans-serif;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    display: inline;
  }
  .bars {
    display: block;
  }
  .icon 
  {
    text-align: right;
    padding-right: 45px;
    margin-bottom: 20px;
    display: inline;
  }
  
}
@media  screen and (min-width: 375px) and (max-width: 811px) {
  .backgr1
{
	margin: 0;
}

}
@media  screen and (max-width: 320px){
  .backgr1 {
    margin: 0;
  }
  .heading {
    font-size: 30px;
  }
}
</style>

