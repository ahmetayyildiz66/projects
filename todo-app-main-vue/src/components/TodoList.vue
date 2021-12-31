<template>
  <ul class="todo-list">
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue';
import useTask from '@/composables/useTask';

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  setup() {
    const { todos } = useTask();
    return {
      todos,
    };
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  background-color: var(--clr-todo-background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  padding-bottom: 2rem;
}
</style>
