<template>
  <div class="home-page">
    <div class="tabs">
      <a class="discover">
        <span>Discover</span>
        <img class="active-top" src="@/assets/images/active-top.png" alt="" />
        <div class="active-bottom">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </div>
      </a>
    </div>
    <div class="discover-list">
      <van-list v-model="loading" :finished="finished" finished-text="end" @load="onLoad" refresher-enabled="false">
        <div class="vantList">
          <div
            class="discover-item"
            :style="{ backgroundImage: `url(${item.coverImage1 || item.coverImage2})` }"
            @click="goDetail(item.templateId)"
            v-for="item in list"
            :key="item"
          >
            {{ item.name }}
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { gameTemplate } from '@/api/index.js'

const router = useRouter()
const loading = ref(false)
const finished = ref(false)
const list = ref([])
const total = ref(0)
const size = ref(1)
const page = ref(20)

function onLoad() {
  console.log('onLoad')

  gameTemplate(size.value, page.value).then(res => {
    console.log(res)
    list.value = res.data.content
    total.value = res.data.total
    loading.value = false
    size.value++
    // 数据全部加载完成
    if (list.value.length >= total.value) {
      finished.value = true
    }
  })

  // 加载状态结束
}
function goDetail(id) {
  console.log(id)
  router.push({
    name: 'detail',
    params: {
      templateId: id
    }
  })
}
function gameTemplateApi() {}
</script>

<style lang="scss" scoped>
@import url('~@/assets/fonts/index.css');

.home-page {
  height: 100vh;

  background: #1c1d20;
  border-radius: 0px 0px 0px 0px;
  padding: 20px;
  padding-bottom: 0;
  max-height: 100vh;
}

.tabs {
  display: flex;
  padding-top: 18px;
  margin-bottom: 20px;

  .discover {
    font-family: Arial-Bold;
    font-weight: 400;
    font-size: 16px;
    color: #02ff8d;
    line-height: 24px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    position: relative;

    .active-top {
      position: absolute;
      top: -10px;
      right: -22px;
      width: 16px;
      height: 16px;
    }

    .active-bottom {
      position: absolute;
      display: flex;
      bottom: -10px;
      left: 50%;
      transform: translateX(-10px);

      .one {
        position: absolute;
        width: 5px;
        height: 3px;
        background-color: #02ff8d;
        left: 0;
        top: 0px;
      }

      .two {
        position: absolute;
        width: 10px;
        height: 3px;
        background-color: #02ff8d;
        left: 5px;
        top: 5px;
      }

      .three {
        position: absolute;
        width: 5px;
        height: 3px;
        background-color: #02ff8d;
        left: 15px;
        top: 0px;
      }
    }
  }
}

.discover-list {
  padding-top: 20px;
  margin-top: 30px;
  overflow: auto;
  height: calc(100vh - 200px);
  padding-bottom: 20px;

  .vantList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 100%;

    &::after {
      content: '';
      width: 46%;
    }

    .discover-item {
      width: 46%;
      height: 500px;
      margin-bottom: 40px;
      position: relative;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: 20px;
      display: flex;
      align-items: flex-end;
      font-family: PingFang SC, PingFang SC;
      font-weight: 600;
      font-size: 24px;
      color: #f5fbff;
      line-height: 36px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      padding: 24px;
      box-sizing: border-box;
    }
  }
}

/* 针对Webkit浏览器，如Chrome、Safari */
::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
  /* 如果需要的话 */
}

/* 针对Firefox */
* {
  scrollbar-width: none;
  /* Firefox */
}

/* 针对IE和Edge */
body {
  -ms-overflow-style: none;
  /* IE and Edge */
}
</style>
