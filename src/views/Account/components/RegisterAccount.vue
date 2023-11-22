<template>
  <section class="container shadow">
    <a-breadcrumb class="bread_crumb">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item
        ><a href="http://localhost:8080/login">Login</a></a-breadcrumb-item
      >
      <a-breadcrumb-item
        ><a href="http://localhost:8080/register"
          >Register</a
        ></a-breadcrumb-item
      >
    </a-breadcrumb>
    <h2 class="text-align-center">REGISTER ACCOUNT</h2>
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
        label="Full name:"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" class="border-none" />
      </a-form-item>

      <a-form-item
        label="Email:"
        name="email"
        :rules="[{ required: true, message: 'Please input your email!' }]"
      >
        <a-input v-model:value="formState.username" class="border-none" />
      </a-form-item>

      <a-form-item
        label="Phone number:"
        name="phone"
        :rules="[
          { required: true, message: 'Please input your phone number!' },
        ]"
      >
        <a-input v-model:value="formState.username" class="border-none" />
      </a-form-item>

      <a-form-item
        label="Birthday:"
        name="birthday"
        :rules="[{ required: true, message: 'Please input your birthday!' }]"
      >
        <a-date-picker
          v-model:value="formState['date-picker']"
          value-format="DD-MM-YYYY"
          class="border-none"
        />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password
          v-model:value="formState.password"
          class="border-none"
        />
      </a-form-item>

      <a-form-item
        has-feedback
        label="Confirm"
        name="checkPass"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input
          v-model:value="formState.checkPass"
          type="password"
          autocomplete="off"
          class="border-none"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 8 }">
        <a-button class="btn-welcome" type="primary" html-type="submit"
          >REGISTER</a-button
        >
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 8 }" class="center">
        <router-link :to="{name: 'LoginAccount'}">
            <a>Đăng nhập</a>
        </router-link>
      </a-form-item>
    </a-form>
  </section>
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
.center {
    text-align: center;
}
.border-none {
  border-radius: 0;
  padding: 7px 10px;
}
.shadow {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  margin-top: 45px;
}
.text-align-center {
  text-align: center;
  margin-top: 20px;
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
a {
    text-decoration: none;
}
</style>
