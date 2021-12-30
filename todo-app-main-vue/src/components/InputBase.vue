<template>
  <input class="input-base" type="text" :value="modelValue" @input="emitValue" />
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
  font-size: 1.8rem;
  color: var(--clr-todo-text);
  width: 100%;
  height: 4rem;

  &:focus {
    outline: none;
  }
}
</style>
