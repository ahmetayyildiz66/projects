<template>
  <CardMain />
</template>

<script>
import CardMain from '@/components/CardMain.vue';

export default {
  name: 'App',
  components: {
    CardMain,
  },
};
</script>

<style lang="scss">
.container {
  position: relative;
  width: 92rem;
  margin: 0 auto;
  border-radius: var(--size-border-radius);
  background-color: var(--clr-white);

  // display: grid;
  // grid-template-columns: repeat(12, 1fr);
  // gap: 3rem;
  // background-color: var(--clr-white);

  @include responsive($bp-mobile) {
    position: relative;
    background-color: blue;
    grid-template-columns: repeat(4, 1fr);
    margin: 4rem 2.4rem 0;
  }
}
</style>
