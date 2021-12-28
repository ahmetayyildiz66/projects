<template>
  <div class="wrapper">
    <div class="todo">
      <h2 class="heading-secondary">Todo</h2>
      <IconBase icon-name="moon" width="26" height="26">
        <IconMoon />
      </IconBase>
    </div>
    <input type="text" />
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue';
import IconMoon from '@/components/icons/IconMoon.vue';

export default {
  name: 'TodoWrapper',
  components: {
    IconBase,
    IconMoon,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: -23rem;
  grid-column: col-start 4 / span 6;
}

.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
