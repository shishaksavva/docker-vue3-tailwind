<template>
  <span
    :class="`
      text-grey
      font-bold
      text-xs
      ${color}
      rounded-[15px]
      p-2
      ml-1
      flex
      items-center
    `"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ['color'],
};
</script>

<style>
.blue {
  background: #065fd4;
  color: white;
}
.green {
  background: #00e676;
  color: black;
}
</style>
