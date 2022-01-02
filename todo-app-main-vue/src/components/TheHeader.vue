<template>
  <header class="header"></header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
.header {
  background-image: url('../assets/bg-desktop-light.jpg'), linear-gradient(to right, var(--l-grad));
  background-repeat: no-repeat;
  background-size: cover;
  height: var(--bg-image-height-desktop);
}
</style>
