<template>
  <li class="todo__item">
    <CheckboxBase @lineThrough="lineThrough" />
    <span :class="{ 'active-through': toggle }">{{ todo.task }}</span>
  </li>
</template>

<script>
import { ref } from 'vue';
import CheckboxBase from '@/components/CheckboxBase.vue';
import useTask from '@/composables/useTask';

export default {
  name: 'TodoListItem',
  components: {
    CheckboxBase,
  },
  props: {
    todo: Object,
  },
  setup(props) {
    const { updateStatus } = useTask();
    const toggle = ref(false);

    const lineThrough = (val) => {
      toggle.value = val;
      updateStatus(props.todo.id);
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
  color: var(--clr-gray-2);
}
</style>
