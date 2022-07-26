<template>
  <div
    :class="
      'container mx-auto justify-center flex flex-row overflow-hidden h-[calc(100% - 60px)]' +
      darkClass
    "
  >
    <repo-info
      v-if="selectedRepo"
      :repo="selectedRepo"
      @close="selectedRepo = null"
    ></repo-info>
    <div class="max-w-3xl grid grid-list w-[100%] overflow-hidden p-2">
      <bg :mode="darkTheme" @toggle="darkTheme = !darkTheme">
        {{ darkTheme ? 'Светлая тема' : 'Темная тема' }}</bg
      >
      <form @submit.prevent="search">
        <div class="relative">
          <search-icon />
          <app-input
            placeholder="Введите название репозитория..."
            v-model="query"
          />
          <btn v-if="!!query" type="submit">Поиск</btn>
        </div>
      </form>
      <div class="mt-10 h-[100%] border-box overflow-auto">
        <list-item
          v-for="repo of repos"
          :key="repo.id"
          @click="selectedRepo = repo"
        >
          <div class="flex justify-between items-center">
            <span
              class="
                flex flex-row
                alignitems-end
                text-black
                dark:text-white
                text-2xl
              "
            >
              {{ repo.name }}
              <chip v-if="repo.language" color="green">{{
                repo.language
              }}</chip>
            </span>
            <chip color="blue">
              <chip-img :src="repo.owner.avatar_url" />
              {{ repo.owner.login }}
            </chip>
          </div>
          <div class="text-grey text-sm">
            {{ repo.description }}
          </div>
          <star> {{ repo.stargazers_count }} звезд </star>
        </list-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useSearch, Repo } from './useSearch';
import Star from '../ui/star.vue';
import Btn from '../ui/btn.vue';
import AppInput from '../ui/input.vue';
import SearchIcon from '../ui/search-icon.vue';
import ListItem from '../ui/list-item.vue';
import Chip from '../ui/chip.vue';
import ChipImg from '../ui/chip-img.vue';
import Bg from '../ui/bg.vue';
import RepoInfo from '../repoInfo/index.vue';

const { query, repos, search } = useSearch();
const darkTheme = ref(false);
const selectedRepo = ref<Repo | null>(null);

const darkClass = computed({
  get() {
    return darkTheme.value ? ' dark' : '';
  },
});
</script>

<style>
.container {
  height: calc(100vh - 60px);
  box-sizing: border-box;
}
.grid-list {
  grid-template-rows: max-content 1fr;
}
@media screen and (max-width: 800px) {
  .container {
    flex-direction: column !important;
    justify-content: flex-start !important;
    overflow: auto;
    height: auto;
  }
}
</style>
