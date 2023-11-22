<template>
  <section class="container shadow">
    <h1 class="login">LOGIN</h1>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 8 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" class="border-none"/>
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" class="border-none"/>
      </a-form-item>
      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 8 }">
        <span class="space"
          ><a class="forgot-pass" href="#">Forgot password</a>
          <router-link :to="{name: 'RegisterAccount'}"><a href="#">Register now!</a></router-link></span
        >
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 8 }" class="text-align-center">
        <a-button class="btn-welcome" html-type="submit">LOGIN</a-button>
      </a-form-item>
    </a-form>
  </section>
  <router-view/>
</template>

<script setup>
import { reactive } from "vue";
const formState = reactive({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>

<style lang="scss" scoped>
@import "@/style/styles.scss";
.border-none{
    border-radius: 0;
}
.shadow {
   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
   margin-top: 45px;
//    padding: 60px;
}
.space {
  justify-content: space-between;
}
.login {
  text-align: center;
  margin: 40px 0;
}
.btn-welcome {
  background-color: #f16179;
  border: 1px solid #f16179;
  font-size: 16px;
  color: $font-color;
  border-radius: 0;
  width: 100%;
  &:hover {
    background-color: #f89cab;
    color: $button;
    border: 1px solid $button;
  }
}
.text-align-center {
  text-align: center;
  margin-top: 0;
}
a {
  text-decoration: none;
}
.forgot-pass {
  text-align: center;
}
</style>
