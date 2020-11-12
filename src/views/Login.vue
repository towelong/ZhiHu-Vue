<template>
  <div class="bg">
    <div className="login">
      <h1>登录</h1>
      <ul>
        <li>
          <input type="text" placeholder="用户名" v-model="account" />
        </li>
        <li>
          <input type="password" placeholder="密码" v-model="password" />
        </li>
        <li>
          <button @click="onLogin">登录</button>
        </li>
        <li><a href="">注册</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from "vue";
import { login, _get } from "../service/api/api";
import Cookies from "js-cookie";
// import { Message } from 'element-plus';

export default {
  components: {},
  setup() {
    const account = ref("welong1");
    const password = ref("123456");
    const { ctx } = getCurrentInstance();

    async function onLogin() {
      const res = await login({
        account: account.value,
        password: password.value,
      });
      console.log(res.code);
      if (res.code === 0) {
        Cookies.set("access_token", res.data.access_token);
        Cookies.set("refresh_token", res.data.refresh_token);
        
        const res1 = await _get("/user");
        if (res1.code == 0) {
          Cookies.set("user", res1.data);
        }
        // Message.success("登录成功");
        setTimeout(() => {
          ctx.$router.push("/");
        }, 1500);
      } else {
        console.log(`登录失败,${res.message}`);
        // Message.success(`登录失败,${res.message}`);
      }
    }

    return { account, password, onLogin };
  },
};
</script>

<style scoped>
.bg {
  background-image: url("../assets/sign_bg.db29b0fb.png");
  height: 100%;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-size: cover;
}
.login {
  width: 280px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login li {
  padding: 8px 0;
  text-align: center;
}
.login li input {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px rgba(70, 75, 150, 0.2);
  border: 0px;
  border: 1px solid var(--second);
}
.login li button {
  background: #0084ff;
  width: 100%;
  border: 0px;
  padding: 10px;
  color: #fff;
  cursor: pointer;
}
.login li a {
  text-align: center;
}
.login h1 {
  color: #0084ff;
  font-size: 40px;
  padding: 10px;
  text-align: center;
}
</style>