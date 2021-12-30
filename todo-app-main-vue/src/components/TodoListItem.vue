<template>
  <li class="todo__item">
    <CheckboxBase @lineThrough="lineThrough" />
    <span :class="{ 'active-through': toggle }">{{ todo.task }}</span>
  </li>
</template>

<script>
import { ref } from 'vue';
import CheckboxBase from '@/components/CheckboxBase.vue';

export default {
  name: 'TodoListItem',
  components: {
    CheckboxBase,
  },
  props: {
    todo: Object,
  },
  setup() {
    const toggle = ref(false);

    const lineThrough = (val) => {
      toggle.value = val;
    };
    return {
      lineThrough,
      toggle,
    };
  },
};
</script>

<style lang="scss" scoped>
.todo__item {
  border-bottom: 1px solid var(--clr-gray-1);
  padding: var(--padding-todo);
  display: flex;
  align-items: center;
}

.active-through {
  text-decoration: line-through;
}
</style>
