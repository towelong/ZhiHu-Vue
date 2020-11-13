<template>
  <div class="card">
    <TabarItem :menu="menu" activeStyle="bluelink"></TabarItem>
    <router-view></router-view>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import TabarItem from "./TabarItem";

export default {
  name: "Nav",
  components: {
    TabarItem,
  },
  setup() {
    const state = reactive({
      menu: [
        { path: "/hot", name: "热榜" },
        { path: "/recommend", name: "推荐" },
        { path: "/follow", name: "关注" },
      ],
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>