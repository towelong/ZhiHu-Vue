<template>
  <div class="box">
    <div class="box-main">
      <img src="../assets/write.png" alt="" />
      <p>写文章</p>
    </div>
    <div class="box-main">
      <img src="../assets/question.png" alt="" />
      <p>回答问题</p>
    </div>
    <div class="box-main">
      <img src="../assets/idea.png" alt="" />
      <p>写想法</p>
    </div>
    <div class="box-main">
      <img src="../assets/my_article.png" alt="" />
      <p>我的文章</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.box img {
  border-radius: 50%;
  background-color: #e1f1ff;
  width: 34px;
  height: 34px;
}

.box-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
  font-size: 12px;
  cursor: pointer;
}

.box-main p{
    padding-top: 6px;
}

</style>