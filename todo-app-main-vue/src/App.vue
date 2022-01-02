<template>
  <TheHeader />
  <div class="container">
    <TodoWrapper />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TodoWrapper from '@/components/TodoWrapper.vue';

export default {
  components: {
    TheHeader,
    TodoWrapper,
  },
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

  @include respond($bp-mobile) {
    grid-template-columns:
      [full-start] 1fr
      [center-start] repeat(4, [col-start] 6.5rem [col-end])
      [center-end] 1fr [full-end];
  }
}
</style>
