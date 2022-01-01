import { ref, computed } from 'vue';
import data from '@/data.json';

const state = ref({
  todos: [...data.todos],
});

export default function useTask() {
  const addNewTask = (task) => {
    const newTask = {
      id: state.value.todos.length + 1,
      task,
      status: 'incomplete',
    };
    state.value.todos.push(newTask);
  };

  const clearTasks = () => {
    state.value.todos = state.value.todos.filter((todo) => todo.status === 'incomplete');
  };

  const updateStatus = (id) => {
    state.value.todos = state.value.todos.map((todo) => (todo.id === id
      ? { ...todo, status: todo.status === 'incomplete' ? 'completed' : 'incomplete' } : todo));
  };

  return {
    todos: computed(() => state.value.todos),
    addNewTask,
    clearTasks,
    updateStatus,
  };
}
