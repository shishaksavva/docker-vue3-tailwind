<template>
  <div
    class="fixed cursor-pointer hover:font-bold top-[10px] right-[10px]"
    @click="$emit('toggle')"
  >
    <slot></slot>
  </div>
  <div
    class="
      fixed
      top-[0]
      left-[0]
      w-[100vw]
      h-[100vh]
      bg-[#fff]
      dark:bg-[#000]
      z-[-100]
    "
  ></div>
</template>

<script>
export default {
  props: {
    mode: Boolean,
  },
};
</script>
