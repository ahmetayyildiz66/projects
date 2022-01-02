<template>
  <li class="todo__item">
    <CheckboxBase @lineThrough="lineThrough" :status="todo.status" />
    <span class="todo__description" :class="{ 'active-through': todo.status === 'completed' }">{{ todo.task }}</span>
    <IconBase
      @click="deleteTodo"
      class="icon-wrapper todo__remove"
      icon-name="check"
      width="20"
      height="20"
      icon-color="var(--clr-icon-cross)"
    >
      <IconCross class="icon-check" />
    </IconBase>
  </li>
</template>

<script>
import { ref } from 'vue';
import CheckboxBase from '@/components/CheckboxBase.vue';
import useTask from '@/composables/useTask';
import IconBase from '@/components/IconBase.vue';
import IconCross from '@/components/icons/IconCross.vue';

export default {
  name: 'TodoListItem',
  components: {
    CheckboxBase,
    IconBase,
    IconCross,
  },
  props: {
    todo: Object,
  },
  setup(props) {
    const { updateStatus, removeTodo } = useTask();
    const toggle = ref(false);

    const deleteTodo = () => {
      removeTodo(props.todo.id);
    };

    const lineThrough = (val) => {
      toggle.value = val;
      updateStatus(props.todo.id);
    };
    return {
      lineThrough,
      toggle,
      deleteTodo,
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
  cursor: pointer;

  &:hover .todo__remove {
    visibility: visible;
  }
}

.todo__remove {
  visibility: hidden;
  margin-left: auto;
  stroke: var(--clr-icon-cross);
}

.active-through {
  text-decoration: line-through;
  color: var(--clr-gray-2);
}
</style>
