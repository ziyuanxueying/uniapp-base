<template>
  <view class="content">
    <view @click="load()">加载数据</view>
    <br />
    <view @click="unload()">卸载数据</view>
    <br />
  </view>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      detailData: '正在加载数据，模拟网络延迟2秒😝',
      loading: false// 开启loading不显示默认值
    };
  },
  onLoad() {
  },
  methods: {
    preview(src, e) {
      console.log(src);
      // do something
    },
    navigate(attr, e) {
      console.log(attr);
      uni.navigateTo({
        url: attr.href
      });
    },
    unload() {
      this.detailData = ``;
    },
    load() {
      this.detailData = `1&nbsp;&nbsp;&nbsp;1`;
    }
  }
};
</script>
<style>
.content {
  padding-left: 1.5em;
  padding-right: 1.5em;
  /* 在这里调整，整体字体大小 */
  font-size: 35upx;
}
</style>
