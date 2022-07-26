<template>
  <div class="w-[100px] h-[100px]">Hello ек, {{ tc }}</div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  color: String,
});

const tc = computed(() => `bg-[${props.color}]`);
</script>

<style scoped></style>
