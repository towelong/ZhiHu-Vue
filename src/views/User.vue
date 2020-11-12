<template>
  <Layout>
    <Card>
      <div class="container__person">
        <div class="bg"></div>
        <div class="user">
          <img src="../assets/default.jpg" alt="" />
          <div class="user__detail">
            <h1>title</h1>
            <p>这家伙很懒什么都没留下</p>
          </div>
        </div>
      </div>
    </Card>
  </Layout>
  <Layout>
    <template v-slot:left>
      <Card>
        <ul class="tabs">
          <li>提问</li>
          <li>收藏</li>
        </ul>
      </Card>
    </template>
  </Layout>
</template>

<script>
import Card from "../components/Card";
import Layout from "../components/Layout";
export default {
  components: {
    Card,
    Layout,
  },
};
</script>

<style scoped>
.container__person {
  position: relative;
  width: 100%;
  height: 410px;
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
  top: 210px;
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
  margin-top: 32px;
}
.user__detail p {
  margin-top: 32px;
}

.tabs {
  display: flex;
}

.tabs li {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  cursor: pointer;
  position: relative;
  font-size: 18px;
  color: #909399;
  background-color: #fff;
}
.active {
  color: #00adb5;
}

.tabs li::after {
  content: "";
  width: 0;
  height: 2px;
  background-color: #00adb5;
  position: absolute;
  left: 100%;
  bottom: 0;
  transition: all 0.4s;
}
.tabs li:hover.active {
  color: #00adb5;
}
.tabs li:hover::after {
  width: 100%;
  left: 0;
  transition-delay: 0.1s;
}
.tabs li:hover ~ li::after {
  left: 0;
}
</style>