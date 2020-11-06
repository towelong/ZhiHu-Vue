<template>
  <div class="card">
      <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card{
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(18,18,18,.1);
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 2px;
}
</style>