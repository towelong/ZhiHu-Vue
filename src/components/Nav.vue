<template>
  <div class="card">
    <nav>
      <ul>
        <li
          v-for="(item, index) in menu"
          :key="index"
          @click="tabClick(index)"
          :class="{ tab: isActive == index }"
        >
          {{ item.name }}
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, watchEffect } from "vue";
import router from "../router";

export default {
  name: "Nav",
  components: {},
  setup() {
    const state = reactive({
      isActive: 0,
      menu: [
        { path: "/hot", name: "热榜" },
        { path: "/recommend", name: "推荐" },
        { path: "/follow", name: "关注" },
      ],
    });

    function tabClick(index) {
      state.isActive = index;
      router.push(state.menu[index].path);
    }

    function checkRouterLocal(path) {
      let index = state.menu.findIndex((item) => item.path === path);
      if (index == -1) {
        state.isActive = 0;
      } else {
        state.isActive = index;
      }
    }

    onMounted(() => {
      console.log("=====nav->onMounted====");
    });
    watchEffect(() => {
      let path = router.currentRoute.value.path;
      checkRouterLocal(path);
    });

    return {
      ...toRefs(state),
      tabClick,
      checkRouterLocal,
    };
  },
};
</script>

<style scoped>
li:hover {
  color: #1751b3;
}

.tab {
  color: #0084ff;
}

ul {
  height: 58px;
  line-height: 58px;
  border-bottom: 1px solid #f0f2f7;
  display: flex;
  flex-direction: row;
}
ul li{
  padding: 0 20px;
}

/* ul li a:visited{
    color: #0084ff;
} */
.card {
  cursor: pointer;
}
</style>