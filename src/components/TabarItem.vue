<template>
  <div class="tabar">
    <nav v-if="activeStyle == 'bluelink'">
      <ul>
        <li
          v-for="(item, index) in menu"
          :key="index"
          @click="tabClick(index)"
          :class="{ bluelink: isActive == index }"
        >
          {{ item.name }} <slot name="count">{{ item.count }}</slot>
        </li>
      </ul>
    </nav>

    <nav v-else>
      <ul>
        <li
          v-for="(item, index) in menu"
          :key="index"
          @click="tabClick(index)"
          :class="{ bottomline: isActive == index }"
        >
          {{ item.name }} <slot name="count">{{ item.count }}</slot>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {
  onMounted,
  watchEffect,
  toRefs,
  getCurrentInstance,
  reactive,
} from "vue";

export default {
  name: "TabarItem",
  props: {
    menu: Array,
    activeStyle: String,
  },
  setup(props) {
    const { ctx } = getCurrentInstance();

    const state = reactive({
      isActive: 0,
      menu: [],
      activeStyle: "bluelink",
    });

    onMounted(() => {
      state.menu = props.menu;
      state.activeStyle = props.activeStyle;
    });

    function tabClick(index) {
      state.isActive = index;
      ctx.$router.push(state.menu[index].path);
    }

    function checkRouterLocal(path) {
      let index = state.menu.findIndex((item) => item.path === path);
      if (index == -1) {
        state.isActive = 0;
      } else {
        state.isActive = index;
      }
    }

    watchEffect(() => {
      let path = ctx.$router.currentRoute.value.path;
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
.bluelink {
  color: #0084ff;
}
.bottomline {
  border-bottom: 2px solid #0084ff;
}

.tabar ul li:hover {
  color: #1751b3;
}

.tabar ul {
  height: 58px;
  line-height: 58px;
  border-bottom: 1px solid #f0f2f7;
  display: flex;
  flex-direction: row;
}
.tabar ul li {
  margin: 0 10px;
  padding: 0 10px;
  cursor: pointer;
}
</style>