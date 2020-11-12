<template>
  <div
    class="content-item"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="disabled"
    v-for="(data, index) in hotData"
    :key="index"
  >
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
  <div v-if="loading" class="load"></div>
  <div v-if="noMore" class="noMoreText">
    <p>没有更多了</p>
  </div>
  <el-backtop style="cursor: pointer"> </el-backtop>
</template>

<script>
import { computed, getCurrentInstance, onMounted, reactive, toRefs } from "vue";
import { get } from "../service/api/api";
export default {
  
  setup() {
    const state = reactive({
      hotData: [],
      count: 5,
      loading: false,
      total: 0,
    });

    onMounted(async () => {
      let hotData = await get(`/question/all?count=${state.count}`);
      console.log(hotData);
      state.hotData = hotData.data.question;
      state.total = hotData.data.total;
    });

    const noMore = computed(() => {
      return state.count == state.total;
    });

    const disabled = computed(() => {
      return state.loading || noMore.value;
    });

    const { ctx } = getCurrentInstance();

    function toQuestion(id) {
      ctx.$router.push(`/question/${id}`);
    }

    async function loadMore() {
      state.loading = true;
      setTimeout(async () => {
        state.count += 1;
        if (state.count <= state.total) {
          let hotData = await get(`/question/all?count=${state.count}`);
          state.hotData = hotData.data.question;
          console.log(hotData);
        }
        state.loading = false;
      }, 1500);
    }

    return {
      ...toRefs(state),
      toQuestion,
      loadMore,
      noMore,
      disabled,
    };
  },
};
</script>

<style scoped>
.noMoreText {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
}
.content-item {
  padding: 16px;
  border-bottom: 1px solid #f0f2f7;
}
.content-item .title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.6;
  color: #121212;
}
.title p:hover {
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

.load {
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ccc;
  margin: 10px auto;
}
.load::before {
  content: "";
  width: 36px;
  height: 36px;
  background-color: #0084ff;
  position: absolute;
  left: 50%;
  bottom: 50%;
  z-index: 1;
  transform-origin: left bottom;
  animation: rotate 1.5s infinite linear;
}
.load::after {
  content: "";
  width: 36px;
  height: 36px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  z-index: 2;
  border-radius: 50%;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>