<template>
  <view></view>
</template>

<script>
import { login } from '@/extend/uni-api.js';
export default {
  onLoad() {
    login()
      .then(res => {
        console.log(res);
        return this.$axios.post({
          url: '/user/code2Session',
          data: {
            code: res.code
          }
        });
      })
      .then(res => {
        this.$store.dispatch('loginId', res);
        this.pageInit();
        if (res.isUpd === 0) {
          uni.navigateTo({
            url: '../pages/login'
          });
        }
      });
  },
  methods: {}
};
</script>
