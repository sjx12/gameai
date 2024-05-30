<template>
  <div class="detail-pane">
    <div class="return" @click="goHome"><img src="@/assets/images/return.png" alt="" /></div>
    <div class="detail-header">Swords Woman Riding West on White Horse</div>
    <div class="detail-content">
      The loud ringing of the school bell echoes across the camp us, followed by a burst of noise as students pour out
      of-da thebuildings in groups, chatting and laughing on their way t thschool gates. The loud ringing of the school
      bell echoes across the camp us, followed by a burst of noise as students pour out of-da thebuildings in groups,
      chatting and laughing on their way t thschool gates. The loud ringing of the school bell echoes across the camp
      us, followed by a burst of noise as students pour out of-da thebuildings in groups, chatting and laughing on their
      way t thschool gates. The loud ringing of the school bell echoes across the camp us, followed by a burst of noise
      as students pour out of-da thebuildings in groups, chatting and laughing on their way t thschool gates. The loud
      ringing of the school bell echoes across the camp us, followed by a burst of noise as students pour out of-da
      thebuildings in groups, chatting and laughing on their way t thschool gates. The loud ringing of the school bell
      echoes across the camp us, followed by a burst of noise as students pour out of-da thebuildings in groups,
      chatting and laughing on their way t thschool gates.
    </div>
    <a href="#" @click="goGame" class="pixel-button">Story start</a>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goGame() {
  router.push({
    name: 'game'
  })
}

function goHome() {
  router.push({
    name: 'home'
  })
}
</script>
<style lang="scss" scoped>
@import url('~@/assets/fonts/index.css');
.detail-pane {
  width: 100%;
  height: 100vh;
  background: url(~@/assets/images/test.webp) no-repeat 100% 100%;
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
</style>
