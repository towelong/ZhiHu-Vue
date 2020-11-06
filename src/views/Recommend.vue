<template>
  <div class="recommend" v-for="(item, index) in data" :key="index">
    <el-row :gutter="20">
      <el-col
        class="index"
        :class="{ light: index == 0 || index == 1 || index == 2 }"
        :span="2"
        >{{ index + 1 }}</el-col
      >
      <el-col class="main" :span="14">
        <div class="title">{{ item.title }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="hot-index">
          <img class="hot-image" src="../assets/hot-icon.png" alt="" />
          <span>{{ item.hot }} 热度</span>
        </div>
      </el-col>
      <el-col class="img" :span="8"><img :src="item.img" alt="" /></el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      data: [
        {
          title:
            "袁隆平团队双季稻晚稻亩产 911.7 公斤，早稻加晚稻实现亩产 1500 公斤，这意味着什么？",
          content:
            "袁隆平团队迎双季稻亩产3000斤测产，测得晚稻平均亩产为911.7公斤。此前，湖南衡南基地早稻高产攻关田在7月进行了测产验收，测得早稻平均亩产为619.06公斤。",
          img:
            "https://pic4.zhimg.com/80/v2-9b5b06a0067026b653f105b06f1f36cc_720w.jpg?source=1940ef5c",
          hot: "123",
        },
        {
          title:
            "袁隆平团队双季稻晚稻亩产 911.7 公斤，早稻加晚稻实现亩产 1500 公斤，这意味着什么？",
          content:
            "袁隆平团队迎双季稻亩产3000斤测产，测得晚稻平均亩产为911.7公斤。此前，湖南衡南基地早稻高产攻关田在7月进行了测产验收，测得早稻平均亩产为619.06公斤。",
          img:
            "https://pic4.zhimg.com/80/v2-9b5b06a0067026b653f105b06f1f36cc_720w.jpg?source=1940ef5c",
          hot: "123",
        },
        {
          title:
            "袁隆平团队双季稻晚稻亩产 911.7 公斤，早稻加晚稻实现亩产 1500 公斤，这意味着什么？",
          content:
            "袁隆平团队迎双季稻亩产3000斤测产，测得晚稻平均亩产为911.7公斤。此前，湖南衡南基地早稻高产攻关田在7月进行了测产验收，测得早稻平均亩产为619.06公斤。",
          img:
            "https://pic4.zhimg.com/80/v2-9b5b06a0067026b653f105b06f1f36cc_720w.jpg?source=1940ef5c",
          hot: "123",
        },
        {
          title:
            "袁隆平团队双季稻晚稻亩产 911.7 公斤，早稻加晚稻实现亩产 1500 公斤，这意味着什么？",
          content:
            "袁隆平团队迎双季稻亩产3000斤测产，测得晚稻平均亩产为911.7公斤。此前，湖南衡南基地早稻高产攻关田在7月进行了测产验收，测得早稻平均亩产为619.06公斤。",
          img:
            "https://pic4.zhimg.com/80/v2-9b5b06a0067026b653f105b06f1f36cc_720w.jpg?source=1940ef5c",
          hot: "123",
        },
      ],
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.light {
  color: #ff9607;
}

.recommend {
  padding-top: 10px;
  border-bottom: 1px solid #f0f2f7;
}
.hot-image {
  width: 18px;
  height: 18px;
  margin-top:-4px;
}

.el-col.index {
  text-align: center;
  margin-top: 2px;
  padding-left: 34px !important;
}

.el-col.main .hot-index {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #8590a6;
  font-size: 14px;
  padding-top: 5px;
}

.el-col.main .content {
  color: #444;
  font-size: 15px;
}

.el-col.main .title {
  font-size: 18px;
  font-weight: 600;
  color: #121212;
}

.el-col.img {
  text-align: center;
}

.el-col.img img {
  border-radius: 4px;
  height: 105px;
  width: 190px;
}

.content {
  padding-top: 10px;
  text-align: left;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>