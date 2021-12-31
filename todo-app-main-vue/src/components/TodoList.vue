<template>
  <ul class="todo-list">
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    <div class="todo__filter">
      <span>5 items left</span>
      <div class="button-group">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear Completed</button>
    </div>
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

.todo__filter {
  padding: var(--padding-filter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @include respond($bp-mobile) {
    .button-group {
      display: flex;
      justify-content: space-between;
      order: 1;
      flex: 0 0 100%;
    }
  }
}
</style>
