import { ref } from 'vue';
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

  return {
    todos: state.value.todos,
    addNewTask,
  };
}
