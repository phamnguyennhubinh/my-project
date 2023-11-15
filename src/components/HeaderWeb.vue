<template>
  <div id="header">
    <h1 class="heading">Giftos</h1>
    <div class="bars">
      <h1 class="heading1">Giftos</h1>
      <label for="nav-mobile-input" class="icon"><i class="fa-solid fa-bars fa-2x"></i></label>
      <input type="checkbox" hidden class="nav_input" id="nav-mobile-input">
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
    </div>
    <div id="menu" :class="currentRoute === 'LayoutPage' ? 'backgr1' : 'backgr2'">
      <ul>
      <li :class="{ 'active': currentRoute === 'LayoutPage' }">
        <router-link :to="{name: 'LayoutPage'}">HOME</router-link>
      </li>
      <li :class="{ 'active2': currentRoute === 'ShopPage' }">
        <router-link :to="{name: 'ShopPage'}">SHOP</router-link>
      </li>
      <li>
        <a href="#">WHY US</a>
      </li>
      <li>
        <a href="#">TESTIMONIAL</a>
      </li>
      <li>
        <a href="#">CONTACT US</a>
      </li>
      <li>
        <a><i class="fa fa-user"></i><span>Login</span></a>
        <a><i class="fa fa-shopping-bag"></i></a>
        <a><i class="fa fa-search"></i></a>
      </li>
      </ul>
    </div>
  </div>
    <router-view/>
</template>

<script>
export default ({
    name: 'HeaderWeb',
    data() {

  return {
    imageURL: './assets/slider.png',
    currentRoute: null,
  };
  },
  watch: {
  $route(to) {
    this.currentRoute = to.name; // Lưu tên đường dẫn hiện tại
  },
  },
  methods() {

  },
})
</script>

<style lang="scss" scoped>
.hidd {
  display: none;
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
