<template>
  <Question @load="loadmore" :count="count" :data="questionData"></Question>
</template>

<script>
import Question from "@/components/Question";
import { getUserQuestion } from "../../service/user";
import { reactive, onMounted, toRefs, ref } from "vue";
export default {
  components: {
    Question,
  },
  setup() {
    const state = reactive({
      user: {},
      count: 2,
    });
    const questionData = ref({});

    onMounted(() => {
      // 获取自己发布的问题
      load(state.count);
    });

    async function load(count) {
      const res = await getUserQuestion(count);
      questionData.value = res.data;
    }

    async function loadmore(count) {
      console.log("我被调用了");
      const res = await getUserQuestion(count);
      questionData.value = res.data;
    }

    return {
      ...toRefs(state),
      load,
      questionData,
      loadmore
    };
  },
};
</script>

<style>
</style>