<template>
  <div class="container">
    <div class="header">
      <div class="logo"><a href="#">知乎问答</a></div>
      <nav>
        <ul>
          <li
            class="other"
            v-for="(item, index) in menu"
            :key="index"
            @click="tab(index)"
          >
            <router-link
              :class="{ active: isActive == index }"
              :to="item.path"
              >{{ item.name }}</router-link
            >
          </li>
          <li>
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
            ></el-input>
            <el-button
              class="search-bt"
              icon="el-icon-search"
              type="primary"
              circle
            ></el-button>
          </li>
          <li></li>
        </ul>
      </nav>
      <div class="user-info">
        <el-avatar
          :size="50"
          @click="login"
          v-if="nickname == null || nickname == ''"
          >未登录</el-avatar
        >
        <el-avatar
          :size="50"
          @click="lookUserDetail"
          :src="avatar"
          v-else
        ></el-avatar>
        <div
          class="popover"
          :class="{ popoverHide: loginVisible == false }"
          @mouseleave="loginVisible = false"
        >
          <ul>
            <li>{{ nickname }}</li>
            <li @click="toUserPage">个人主页</li>
            <li @click="loginOut">退出登录</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, watchEffect } from "vue";
import router from "../router";
import routes from "../router/routes";
import Cookies from "js-cookie";

export default {
  name: "Header",
  components: {},
  setup() {
    const state = reactive({
      isActive: 0,
      loginVisible: false,
      nickname: "",
      avatar: "",
      menu: [
        {
          name: "首页",
          path: "/",
        },
        {
          name: "发现",
          path: "/find",
        },
        {
          name: "沸点",
          path: "/fd",
        },
        {
          name: "热搜",
          path: "/rs",
        },
      ],
    });

    onMounted(async () => {
      getUserDetail();
    });

    function getUserDetail() {
      const data = Cookies.getJSON("user");
      if (data) {
        const { nickname, avatar } = data;
        state.nickname = nickname;
        state.avatar = avatar;
      }
    }

    function lookUserDetail() {
      state.loginVisible = !state.loginVisible;
    }

    function loginOut() {
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      Cookies.remove("user");
      router.go(0);
    }

    function tab(index) {
      state.isActive = index;
    }
    function login() {
      router.push("/login");
      state.loginVisible = false;
    }

    function checkRouterLocal(path) {
      // path分两种:
      // 1. 如果路径是 "/" 或者 navRoute存在 首页导航栏底部高亮
      // 2. 如果不是的话，取消顶部导航高亮
      let index = state.menu.findIndex((item) => item.path === path);
      if (index <= 0 && hasNavRoute(path)) {
        state.isActive = 0;
      } else if (index == -1) {
        state.isActive = -1;
      } else {
        state.isActive = index;
      }
    }

    function hasNavRoute(path) {
      // 1. 拿到nav的所有导航路径
      let navRoute = routes[0].children;

      // 2. 遍历所有的path与当前的path进行比对
      // 3. 比对成功返回true,否则返回false
      let bool = false;
      navRoute.forEach((item) => {
        if (!item.alias == undefined) {
          if (path == item.path) {
            bool = true;
          }
        } else {
          if (path == item.alias || path == item.path) {
            bool = true;
          }
        }
      });
      return bool;
    }

    function toUserPage(){
      router.push("/user")
    }

    watchEffect(() => {
      let path = router.currentRoute.value.path;
      checkRouterLocal(path);
    });

    return {
      ...toRefs(state),
      tab,
      checkRouterLocal,
      hasNavRoute,
      login,
      getUserDetail,
      loginOut,
      lookUserDetail,
      toUserPage
    };
  },
};
</script>

<style scoped>
li a {
  display: inline-block;
  width: 60px;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
li.other {
  margin: 0 16px;
}

.active {
  border-bottom: 4px solid #0084ff;
}

ul {
  display: flex;
}

ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
ul li:hover {
  color: #0084ff;
}
.container {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px -5px #cccccc;
}

.header {
  width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.search-bt {
  margin: 0 5px;
}

.header .logo {
  font-size: 20px;
}

.user-info {
  cursor: pointer;
  position: relative;
}

.user-info img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.popover {
  position: absolute;
  right: -20px;
  top: 60px;
  z-index: 99;
}

.popover ul {
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
}
.popover ul li {
  text-align: center;
  background-color: #fff;
  font-size: 14px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
}
.popover::before {
  content: "";
  position: absolute;
  bottom: 56px;
  left: 35px;
  border: 8px solid transparent;
  border-bottom-color: #fff;
}

.popoverHide {
  display: none;
}
</style>