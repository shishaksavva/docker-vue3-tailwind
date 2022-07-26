<template>
  <input
    class="
      block
      p-4
      pl-10
      w-full
      text-sm text-gray-900
      bg-gray-50
      rounded-lg
      border border-gray-300
      focus:ring-blue-500 focus:border-blue-500
      dark:bg-gray-700
      dark:border-gray-600
      dark:placeholder-gray-400
      dark:text-white
      dark:focus:ring-blue-500
      dark:focus:border-blue-500
    "
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue"
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
    placeholder: String,
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>
