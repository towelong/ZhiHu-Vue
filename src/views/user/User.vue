<template>
  <Layout>
    <Card>
      <div class="container__person">
        <div class="bg"></div>
        <div class="user">
          <img
            v-if="user.avatar == null"
            src="../../assets/default.jpg"
            alt=""
          />
          <img v-else :src="user.avatar" alt="" />
          <div class="user__detail">
            <h1>{{ user.nickname }}</h1>
            <p>这家伙很懒什么都没留下</p>
          </div>
        </div>
      </div>
    </Card>
  </Layout>
  <Layout>
    <template v-slot:left>
      <Card>
        <TabarItem :menu="menu"></TabarItem>
        <router-view></router-view>
      </Card>
    </template>
  </Layout>
</template>

<script>
import Cookies from "js-cookie";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import TabarItem from "@/components/TabarItem";
import { onMounted, reactive, toRefs } from "vue";

export default {
  components: {
    Card,
    Layout,
    TabarItem,
  },
  setup() {
    const state = reactive({
      menu: [
        { path: "/user/question", name: "问题", count: 0 },
        { path: "/user/follow", name: "关注", count: 0 },
      ],
      user: {},
    });

    onMounted(async () => {
      // 获取用户信息
      const user = Cookies.getJSON("user");
      state.user = user;
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.container__person {
  position: relative;
  width: 100%;
  height: 360px;
}

.bg {
  position: absolute;
  background-color: #0084ff;
  width: 100%;
  height: 240px;
  top: 0;
  left: 0;
}
.user {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 200px;
  left: 30px;
}
.user img {
  width: 160px;
  height: 160px;
  vertical-align: top;
  border: 4px solid #fff;
  border-radius: 8px;
}
.user__detail {
  color: #121212;
  margin-left: 10px;
}
.user__detail h1 {
  margin-top: 42px;
}
.user__detail p {
  margin-top: 32px;
}
</style>