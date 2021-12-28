<template>
  <TheHeader />
  <div class="container">
    <div class="wrapper">
      <div class="todo">
        <h2>Todo</h2>
        <span>moon</span>
      </div>
      <input type="text" />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  setup() {},
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  display: grid;
  max-width: var(--container-max-width);
  grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(12, [col-start]6.5rem [col-end])
    [center-end] 1fr [full-end];
  gap: var(--gutter);
}

.wrapper {
  grid-column: col-start 4 / span 6;
}

.container {
  grid-column: full-start / full-end;
}
</style>
