<template>
  <van-loading class="vanloading" v-if="loading" size="24px">加载中...</van-loading>
  <div class="detail-pane" :style="{ backgroundImage: `url(${data.coverImage1 || data.coverImage2})` }">
    <div class="return" @click="goHome"><img src="@/assets/images/return.png" alt="" /></div>
    <div class="detail-header">{{ data.name }}</div>
    <div class="detail-content">
      {{ data.description }}
    </div>
    <div @click="goGame" class="pixel-button">Story start</div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { setQuestion, getQuestion } from './index.js'
import { gameTemplateDetail, gamePlay } from '@/api/index.js'
const router = useRouter()
const route = useRoute()
const data = ref({})
const loading = ref(false)

function goGame() {
  if (loading.value) {
    return false
  }
  loading.value = true
  gamePlay(route.params.templateId)
    .then(res => {
      console.log(res)
      loading.value = false
      setQuestion(route.params.templateId, res.data)

      router.push({
        name: 'game',
        params: {
          templateId: route.params.templateId
        }
      })
    })
    .finally(() => {
      loading.value = false
    })
}

function goHome() {
  router.push({
    name: 'home'
  })
}

function getDetail() {
  gameTemplateDetail(route.params.templateId).then(res => {
    console.log(res)
    data.value = res.data
  })
}
onMounted(() => {
  const data = getQuestion(route.params.templateId)
  if (!data.text) {
    getDetail()
  } else {
    router.push({
      name: 'game',
      params: {
        templateId: route.params.templateId
      }
    })
  }
})
</script>
<style lang="scss" scoped>
@import url('~@/assets/fonts/index.css');
.detail-pane {
  width: 100%;
  height: 100vh;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 100px;
}
.detail-header {
  font-family: PingFang SC, PingFang SC;
  font-weight: 600;
  font-size: 36px;
  color: #f5fbff;
  line-height: 48px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-bottom: 24px;
}
.detail-content {
  max-height: 40%;
  overflow-y: auto;
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 24px;
  color: #f5fbff;
  line-height: 48px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-bottom: 56px;
}
.pixel-button {
  width: 100%;
  height: 96px;
  display: inline-block;
  background-color: #00d084;
  border: 2px solid #00ff99;
  font-family: Arial-Bold;
  font-size: 16px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 0 0 2px #00ff99, 0 0 0 4px #00d084;
  position: relative;
  font-family: _px Arial 8pt bold, _px Arial 8pt bold;
  font-weight: 400;
  font-size: 26px;
  color: #1c1d20;
  line-height: 60px;
  text-shadow: 0px 2px 0px rgba(255, 255, 255, 0.4);
  text-align: left;
  font-style: normal;
  text-transform: none;
  text-align: center;
}

.pixel-button::before,
.pixel-button::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: #00ff99;
}

.pixel-button::before {
  top: -4px;
  left: -4px;
}

.pixel-button::after {
  bottom: -4px;
  right: -4px;
}
.return {
  width: 48px;
  height: 48px;

  border-radius: 8px 8px 8px 8px;
  text-align: center;
  line-height: 20px;
  position: absolute;
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
