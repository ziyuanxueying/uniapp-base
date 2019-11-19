<template>
  <view class="view-body">
    <view class="flex-row-center">
      <view class="cmd-icon" style="background-color: #007AFF;">123</view>
      <view style="background-color: #4CD964">456</view>
    </view>
  </view>
</template>

<script>
import loginBase from '@/components/login-base.vue';
export default {
  extends: loginBase,
  components: {
  },
  data: () => ({
    shops: []
  }),
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>
