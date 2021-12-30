<template>
  <label for="checkbox" @click="createNewTask" class="checkbox-label">
    <IconBase
      v-if="toggle"
      class="icon-wrapper"
      icon-name="check"
      width="24"
      height="24"
      icon-color="#000"
    >
      <IconCheck class="icon-check" />
    </IconBase>
  </label>
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
  setup() {
    const toggle = ref(false);

    const createNewTask = () => {
      toggle.value = !toggle.value;
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
}

.icon-wrapper {
  position: absolute;
  top: 29%;
  left: 26%;
  pointer-events: none;
}
</style>
