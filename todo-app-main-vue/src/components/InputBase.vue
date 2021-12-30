<template>
  <input
    class="input-base"
    type="text"
    placeholder="Create a new todo..."
    :value="modelValue"
    @input="emitValue"
  />
</template>

<script>
export default {
  name: 'InputBase',
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    const emitValue = (event) => {
      emit('update:modelValue', event.target.value);
    };

    return {
      emitValue,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-base {
  border: none;
  font-size: var(--font-size);
  color: var(--clr-todo-text);
  width: 100%;
  height: 4rem;

  &:focus {
    outline: none;
  }
}
</style>
