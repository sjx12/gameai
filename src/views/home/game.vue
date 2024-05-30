<template>
  <div class="detail-pane">
    <div class="return" @click="goHome"><img src="@/assets/images/return.png" alt="" /></div>
    <div class="content">
      <div class="question">
        The sky is a deep blue, resembling a massive slab of blue jade, with the midsummer sun hanging high like a fiery
        orb, suggesting it's around three in the afternoon. The sky is a deep blue, resembling a massive slab of blue
        jade, with the midsummer sun hanging high like a fiery orb, suggesting it's around three in the afternoon.
      </div>
      <div style="margin-bottom: 20px">
        <span class="tips">Click on one of the following options or enter text</span>
      </div>

      <div class="option">Looking around you notice some faintlight shini dgg through the cracks</div>
      <div class="option">Looking around you notice some faintlight shini dgg through the cracks</div>
    </div>

    <div class="quiz">
      <input type="text" placeholder="Type your message" class="quiz-input" />
      <img class="submit-btn" src="@/assets/images/submit-btn.png" alt="" />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goHome() {
  router.push({
    name: 'home'
  })
}
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
  padding-bottom: 100px;
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
  background: rgba(28, 29, 32, 0.9);
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
  background: #d8d8d8;
  border-radius: 10px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 24px;
  color: #f5fbff;
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
</style>
