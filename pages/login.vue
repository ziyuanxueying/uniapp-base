<template>
  <view>
    <uni-popup :show="infoShow">
      <view style="height:60rpx"></view>
      <view class="login-bg">
        <text style="margin-top:150rpx;">为了给您提供更好的服务</text>
        <text>我们需要您的授权</text>
        <button
          class="uni-flex info-btn"
          open-type="getUserInfo"
          lang="zh_CN"
          @getuserinfo="onGotUserInfo"
        >授 权</button>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import uniPopup from '@/components/uni-popup.vue';
export default {
  components: {
    uniPopup
  },
  data: () => ({
    infoShow: true
  }),
  methods: {
    onGotUserInfo(e) {
      if (!e.detail) {
        return;
      }
      this.$axios.post({
        url: '/user/update-user',
        data: {
          nickName: e.detail.userInfo.nickName,
          avatarUrl: e.detail.userInfo.avatarUrl,
          gender: e.detail.userInfo.gender + '',
          country: e.detail.userInfo.country,
          province: e.detail.userInfo.province,
          city: e.detail.userInfo.city,
          language: e.detail.userInfo.language,
          signature: e.detail.signature,
          iv: e.detail.iv
        }
      }).then(result => {
        this.infoShow = false;
        this.$utils.backClick();
      });
    }
  }
};
</script>

<style lang="scss">
.login-bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 480rpx;
  border-radius: 20upx;
  text {
    line-height: 2;
  }
}
.info-btn {
  margin-top: 80rpx;
  font-size: 30rpx;
  width: 334rpx;
  height: 74rpx;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(239, 215, 162, 1) 0%,
    rgba(205, 175, 107, 1) 100%
  );
  border-radius: 38rpx;
  color: #fff;
}
</style>
