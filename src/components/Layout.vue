<template>
  <div class="container">
    <div class="main">
      <el-row :gutter="20">
        <el-col :span="16"><slot name="left"></slot></el-col>
        <el-col :span="8"><slot name="right"></slot></el-col>
      </el-row>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.container .main {
  display: flex;
  width: 1024px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>
