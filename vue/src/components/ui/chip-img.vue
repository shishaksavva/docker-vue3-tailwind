<template>
  <img
    :src="src"
    alt=""
    class="h-[15px] w-[15px] rounded-[50%] mr-1 object-cover object-center"
  />
</template>

<script>
export default {
  props: ['src'],
};
</script>
