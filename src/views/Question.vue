<template>
  <div>
    <Card class="detail">
      <Layout>
        <div class="main">
          <span>问题</span>
          <h1 class="title">{{ question.title }}</h1>
          <p class="summary">{{ question.summary }}</p>
          <div>
            <button class="btn">评论</button>
          </div>
        </div>
      </Layout>
    </Card>

    <Layout class="comment" v-if="comment.length > 0">
      <template v-slot:left>
        <Card class="bottom-line" v-for="(item, i) in comment" :key="i">
          <div class="comment-user">
            <div class="img" v-if="avatars[i] != null">
              <img :src="avatars[i]" alt="" />
            </div>

            <div class="img" v-else>
              <img src="../assets/default.jpg" alt="" />
            </div>

            <div class="user-detail">
              <p>{{ nicknames[i] }}</p>
              <p class="other">这家伙很懒，什么都没有留下</p>
            </div>
          </div>
          <p class="content">
            {{ item.content }}
          </p>
          <p class="text">发布于 {{ onet(item.create_time) }}</p>
        </Card>
      </template>

      <template v-slot:right>
        <Card>
          <div style="padding: 0 20px">
            <div class="author">关于作者</div>
            <div class="u-detail">
              <div>
                <img
                  v-if="author.avatar != null"
                  :src="author.avatar"
                  style="height: 60px; width: 60px"
                  alt=""
                />
                <img
                  v-else
                  src="../assets/default.jpg"
                  style="height: 60px; width: 60px"
                  alt=""
                />
              </div>
              <div class="u-detail-right">
                <h3>{{ author.nickname }}</h3>
                <p style="font-size: 14px; color: #646464">
                  这家伙很懒什么都没有留下
                </p>
              </div>
            </div>
            <div class="function">
              <ZButton>+ 关注他</ZButton>
            </div>
          </div>
        </Card>
      </template>
    </Layout>

    <Layout class="comment" v-else>
      <template v-slot:left>
        <Card> 暂无评论 </Card>
      </template>

      <template v-slot:right>
        <Card>
          <div style="padding: 0 20px">
            <div class="author">关于作者</div>
            <div class="u-detail">
              <div>
                <img
                  v-if="author.avatar != null"
                  :src="author.avatar"
                  style="height: 60px; width: 60px"
                  alt=""
                />
                <img
                  v-else
                  src="../assets/default.jpg"
                  style="height: 60px; width: 60px"
                  alt=""
                />
              </div>
              <div class="u-detail-right">
                <h3>{{ author.nickname }}</h3>
                <p style="font-size: 14px; color: #646464">
                  这家伙很懒什么都没有留下
                </p>
              </div>
            </div>
            <div class="function">
              <ZButton>+ 关注他</ZButton>
            </div>
          </div>
        </Card>
      </template>
    </Layout>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, reactive, toRefs } from "vue";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { get } from "../service/api/api";
import { onet } from "../service/utils";
import ZButton from "../components/ZButton";

export default {
  components: {
    Card,
    Layout,
    ZButton,
  },
  setup() {
    const state = reactive({
      question: {},
      comment: [],
      nicknames: [],
      avatars: [],
      author: {},
    });

    const { ctx } = getCurrentInstance();
    onMounted(async () => {
      const id = ctx.$router.currentRoute.value.params.id;
      await getQuestionDetail(id);
      const author = await getQuestionAuthor(id);
      state.author = author;
    });

    async function getQuestionDetail(id) {
      const res = await get(`/question/${id}`);
      const { question, comment } = res.data;
      if (question == null) {
        ctx.$router.push("/404");
        return;
      }
      state.question = question;
      state.comment = comment.comment_list;
      let nicknames = [];
      let avatars = [];
      for (let i = 0; i < comment.comment_list.length; i++) {
        const res = await get(`/user/${comment.comment_list[i].user_id}`);
        const { nickname, avatar } = res.data;
        nicknames.push(nickname);
        avatars.push(avatar);
      }
      state.nicknames = nicknames;
      state.avatars = avatars;
    }

    async function getQuestionAuthor(question_id) {
      const res = await get(`/question?id=${question_id}`);
      return res.data;
    }

    return {
      ...toRefs(state),
      onet,
      state,
      getQuestionAuthor,
      getQuestionDetail,
    };
  },
};
</script>

<style scoped>
.bottom-line {
  border-bottom: 1px solid #ebebeb;
  padding: 4px 16px;
}
.detail {
  box-shadow: 0 1px 4px #ccc;
}
.main span {
  border-radius: 15px;
  background-color: #e5f2ff;
  padding: 0 16px;
  margin: 5px 0;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #0084ff;
}
.main .title {
  font-size: 32px;
  color: #121212;
}
.main .summary {
  word-break: break-word;
  line-height: 1.6;
  font-size: 15px;
}
.main .btn {
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
.comment {
  margin: 10px 0 0 0;
}

.comment .comment-user {
  display: flex;
  flex-direction: row;
}

.comment .comment-user .img {
  display: flex;
  align-items: center;
}
.comment .comment-user img {
  height: 38px;
  width: 38px;
  border-radius: 2px;
  vertical-align: middle;
  margin-right: 10px;
}

.comment .comment-user .user-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
}
.user-detail .other {
  color: #646464;
  font-size: 14px;
}

.text {
  margin-top: 8px;
  font-size: 14px;
  color: #8590a6;
}
.content {
  margin-top: 10px;
}

.author {
  font-size: 15px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #f6f6f6;
}
.u-detail {
  display: flex;
  flex-direction: row;
  padding-top: 4px;
}
.u-detail img {
  margin-right: 10px;
}
.u-detail-right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>