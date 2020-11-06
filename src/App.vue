<template>
  <Header v-if="$route.path.indexOf('/login') == -1" />
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  setup() {},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
</style>
