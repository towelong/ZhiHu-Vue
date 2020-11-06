<template>
  <div class="content-item" v-for="(data, index) in hotData" :key="index">
    <div class="title" @click="toQuestion(data.id)">
      <p>{{ data.title }}</p>
    </div>
    <div class="content" v-if="data.image != null">
      <el-row :gutter="20">
        <el-col class="img" :span="8"><img :src="data.image" alt="" /></el-col>
        <el-col class="summary" :span="16">{{ data.summary }}</el-col>
      </el-row>
    </div>

    <div class="content" v-else>
      <el-row :gutter="20">
        <el-col class="summary" :span="24">{{ data.summary }}</el-col>
      </el-row>
    </div>

    <div class="function">
      <el-button type="primary" size="small" icon="el-icon-caret-top" plain
        >赞同 {{ data.zan }}</el-button
      >
      <el-button
        type="primary"
        size="small"
        icon="el-icon-caret-bottom"
        plain
      ></el-button>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, reactive, toRefs } from "vue";
import { get } from "../service/api/api";
export default {
  setup() {
    const state = reactive({
      hotData: [],
    });
    onMounted(async () => {
      let hotData = await get("/question/all");
      console.log(hotData);
      state.hotData = hotData.data.question;
    });

    const { ctx } = getCurrentInstance();

    function toQuestion(id) {
      ctx.$router.push(`/question/${id}`);
    }

    return {
      ...toRefs(state),
      toQuestion,
    };
  },
};
</script>

<style scoped>
.content-item {
  padding: 20px;
  border-bottom: 1px solid #f0f2f7;
}
.content-item .title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.6;
  color: #121212;
}
.title p:hover{
  color: #1751b3;
}
.content {
  padding: 8px 0;
}

.content img {
  width: 190px;
  height: 105px;
}

.el-col.summary {
  text-align: left;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.function {
  padding-right: 8px;
}
.function .el-button {
  font-size: 14px;
}
</style>