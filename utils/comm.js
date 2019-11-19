class Utils {
  showToast(text) {
    uni.showToast({
      title: text,
      icon: 'none'
    });
  }
  backClick() {
    uni.navigateBack({
      delta: 1
    });
  }
}
module.exports = new Utils();
