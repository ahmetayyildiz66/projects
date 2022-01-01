import { ref, computed } from 'vue';
import data from '@/data.json';

const state = ref({
  todos: [...data.todos],
  tag: '',
});

export default function useTask() {
  const addNewTask = (task) => {
    const newTask = {
      id: state.value.todos.slice().pop().id + 1,
      task,
      status: 'incomplete',
    };
    state.value.todos.push(newTask);
  };

  const clearTasks = () => {
    state.value.todos = state.value.todos.filter((todo) => todo.status === 'incomplete');
  };

  const removeTodo = (id) => {
    state.value.todos = state.value.todos.filter((todo) => todo.id !== id);
  };

  const getTodos = computed(() => {
    if (!state.value.tag || state.value.tag === 'all') return state.value.todos;
    return state.value.todos.filter((todo) => todo.status === state.value.tag);
  });

  const updateStatus = (id) => {
    state.value.todos = state.value.todos.map((todo) => (todo.id === id
      ? { ...todo, status: todo.status === 'incomplete' ? 'completed' : 'incomplete' } : todo));
  };

  const setFilterTag = (status) => {
    state.value.tag = status;
  };

  return {
    todos: computed(() => state.value.todos),
    addNewTask,
    clearTasks,
    updateStatus,
    setFilterTag,
    getTodos,
    removeTodo,
  };
}
