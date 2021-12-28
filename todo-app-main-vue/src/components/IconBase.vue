<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    viewBox="0 0 26 26"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
    <!-- <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" /> -->
  </svg>
</template>

<script>
export default {
  name: 'IconBase',
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  &:hover {
    cursor: pointer;
  }
}
</style>
