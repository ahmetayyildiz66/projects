<template>
  <div class="wrapper">
    <div class="todo u-mb">
      <h2 class="heading-secondary">Todo</h2>
      <IconBase icon-name="moon" width="26" height="26">
        <IconMoon />
      </IconBase>
    </div>
    <div class="todo__create u-mb-medium">
      <TaskNew class="u-mr" :input-text="text" @clearInput="text = ''" />
      <InputBase v-model="text" />
    </div>
    <TodoList />
    <p class="drag-drop">Drag and drop to reorder list</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import IconBase from '@/components/IconBase.vue';
import IconMoon from '@/components/icons/IconMoon.vue';
import InputBase from '@/components/InputBase.vue';
import TaskNew from '@/components/TaskNew.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'TodoWrapper',
  components: {
    IconBase,
    IconMoon,
    InputBase,
    TaskNew,
    TodoList,
  },
  setup() {
    const text = ref('');

    return {
      text,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: -23rem;
  grid-column: col-start 4 / span 6;

  @include respond($bp-mobile) {
    grid-column: center-start / center-end;
  }
}

.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--clr-white);

  &__create {
    background-color: var(--clr-white);
    padding: var(--padding-todo);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    height: var(--todo-height);
  }
}

.drag-drop {
  text-align: center;
  margin: var(--drag-drop) 0;
  font-size: var(--drag-drop-font-size);
  color: var(--clr-gray-2);
}
</style>
