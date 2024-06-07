<template>
  <van-loading class="vanloading" v-if="loading" size="24px">loading...</van-loading>
  <div class="detail-pane" :style="{ backgroundImage: `url(${gameData.screen})` }">
    <div class="return" @click="goHome"><img src="@/assets/images/return.png" alt="" /></div>
    <div class="content">
      <div class="question">
        {{ gameData.text }}
      </div>
      <div style="margin-bottom: 20px; text-align: center">
        <span class="tips">Click on one of the following options or enter text</span>
      </div>
      <div class="option" v-for="item in gameData.options" @click="submit(item)" :key="item">{{ item }}</div>
    </div>

    <div class="quiz">
      <input type="text" v-model="searchValue" placeholder="Type your message" class="quiz-input" />
      <img class="submit-btn" src="@/assets/images/submit-btn.png" alt="" @click="submit(searchValue)" />
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { playNext } from '@/api/index.js'
import { getQuestion, setQuestion } from './index.js'
const router = useRouter()
const route = useRoute()
const searchValue = ref('')
const loading = ref(false)

const gameData = ref({})

function goHome() {
  router.push({
    name: 'home'
  })
}

function submit(val) {
  if (loading.value) {
    return false
  }
  loading.value = true
  playNext({
    templateId: route.params.templateId,
    messages: [gameData.value.message],
    option: val
  })
    .then(res => {
      loading.value = false
      searchValue.value = ''
      console.log(res)
      gameData.value = res.data
      setQuestion(route.params.templateId, gameData.value)
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(() => {
  const data = getQuestion(route.params.templateId)
  if (!data.text) {
    router.push({
      name: 'home'
    })
  } else {
    gameData.value = data
    console.log('gameData.value', gameData.value)
  }
})
</script>
<style lang="scss" scoped>
.detail-pane {
  width: 100%;
  height: 100vh;
  background: url(~@/assets/images/test.webp) no-repeat 100% 100%;
  background-size: cover;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 50px;
  padding-top: 200px;
}

.return {
  width: 48px;
  height: 48px;

  border-radius: 8px 8px 8px 8px;
  text-align: center;
  line-height: 20px;
  position: fixed;
  left: 40px;
  top: 40px;
  &::after {
    content: '';
    background: #000000;
    opacity: 0.2;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  img {
    width: 30px;
    opacity: 1;
  }
}
.quiz {
  width: 100%;
  height: 90px;
  display: flex;
  .quiz-input {
    flex: 1;
  }
  .quiz-input {
    width: 90%;
    border: 0;
    font-size: 28px;
    padding: 20px;
  }
  .submit-btn {
    width: 90px;
    margin-left: 18px;
  }
}
.question {
  background: rgba(28, 29, 32);
  opacity: 0.6;
  border: 2px solid #474e63;
  padding: 28px 40px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 24px;
  color: #f5fbff;
  line-height: 40px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  border-radius: 10px;
}
.tips {
  background: rgba(28, 29, 32, 0.9);
  opacity: 0.6;
  border: 2px solid #474e63;
  padding: 18px 20px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 18px;
  color: #f5fbff;
  line-height: 40px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  border-radius: 10px;
  display: inline;
  margin-bottom: 20px;
}
.option {
  padding: 20px 40px;
  background: rgba(96, 96, 96, 0.6);

  border-radius: 10px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 24px;
  color: #fff;
  line-height: 36px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-bottom: 20px;
}
.content {
  max-height: 50%;
  overflow: auto;
  margin-bottom: 20px;
}
.vanloading {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
