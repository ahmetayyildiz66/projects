<template>
  <ul class="todo-list">
    <TodoListItem v-for="todo in getTodos" :key="todo.id" :todo="todo" />
    <div class="todo__filter">
      <span>{{ getTodos.length }} items left</span>
      <div class="button-group">
        <button class="btn" @click="filterTasks('all')" :class="{'btn--active': activeBtn === 'all'}">All</button>
        <button class="btn" @click="filterTasks('incomplete')" :class="{'btn--active': activeBtn === 'incomplete'}">Active</button>
        <button class="btn" @click="filterTasks('completed')" :class="{'btn--active': activeBtn === 'completed'}">Completed</button>
      </div>
      <button class="btn btn--clear" @click="clearTodoList">Clear Completed</button>
    </div>
  </ul>
</template>

<script>
import { ref } from 'vue';
import TodoListItem from '@/components/TodoListItem.vue';
import useTask from '@/composables/useTask';

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  setup() {
    const activeBtn = ref('all');

    const { getTodos, clearTasks, setFilterTag } = useTask();

    const clearTodoList = () => {
      clearTasks();
    };

    const filterTasks = (status) => {
      activeBtn.value = status;
      setFilterTag(status);
    };

    return {
      getTodos,
      clearTodoList,
      activeBtn,
      filterTasks,
    };
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  color: var(--clr-todo-text);
  background-color: var(--clr-todo-background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  font-size: 1.8rem;

  @include respond($bp-mobile) {
    font-size: 1.2rem;
  }

  padding-bottom: 2rem;
}

.todo__filter {
  padding: var(--padding-filter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--clr-gray-2);
  font-size: 1.4rem;

  @include respond($bp-mobile) {
    font-size: 1.2rem;
  }

  @include respond($bp-mobile) {
    .button-group {
      display: flex;
      justify-content: center;
      align-items: center;
      order: 1;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 4.8rem;
      bottom: 9rem;
      background-color: var(--clr-todo-background);
    }
  }
}
</style>
