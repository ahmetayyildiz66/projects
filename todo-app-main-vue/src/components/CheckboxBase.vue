<template>
  <div
    for="checkbox"
    @click="createNewTask"
    :class="{ 'checkbox-label--active': toggle }"
    class="checkbox-label"
  >
    <IconBase
      v-if="toggle"
      class="icon-wrapper"
      icon-name="check"
      width="20"
      height="20"
      icon-color="#000"
    >
      <IconCheck class="icon-check" stroke-color="#fff" />
    </IconBase>
  </div>
</template>

<script>
import { ref } from 'vue';
import IconBase from '@/components/IconBase.vue';
import IconCheck from '@/components/icons/IconCheck.vue';

export default {
  name: 'CheckboxBase',
  components: {
    IconBase,
    IconCheck,
  },
  emits: ['line-through'],
  setup(_, { emit }) {
    const toggle = ref(false);

    const createNewTask = () => {
      toggle.value = !toggle.value;
      emit('line-through', toggle.value);
    };

    return {
      createNewTask,
      toggle,
    };
  },
};
</script>

<style lang="scss" scoped>
.checkbox-label {
  position: relative;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  border: 1px solid #e3e4f1;
  cursor: pointer;
  margin-right: var(--u-mr);

  &--active {
    background-image: linear-gradient(var(--l-grad-checkbox));
  }
}

.icon-wrapper {
  position: absolute;
  top: 33%;
  left: 26%;
  pointer-events: none;
}
</style>
