<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 0 16px;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 3px;
  background-color: #0084ff;
  height: 34px;
  width: 96px;
  color: #fff;
  margin: 10px 0px;
}
</style>