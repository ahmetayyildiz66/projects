<template>
  <ul class="todo-list">
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  setup() {
    const todos = [
      {
        id: 1,
        task: 'Complete online JavaScript course',
        status: 'incomplete',
      },
      {
        id: 2,
        task: 'Jog around the park 3x',
        status: 'incomplete',
      },
      {
        id: 3,
        task: '10 minutes meditation',
        status: 'incomplete',
      },
      {
        id: 4,
        task: 'Read for 1 hour',
        status: 'incomplete',
      },
      {
        id: 5,
        task: 'Pick up groceries',
        status: 'incomplete',
      },
      {
        id: 6,
        task: 'Complete Todo App on Frontend Mentor',
        status: 'incomplete',
      },
    ];
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
