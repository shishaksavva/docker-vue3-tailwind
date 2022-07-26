<template>
  <div
    class="
      p-2
      max-w-[100%]
      w-[400px]
      border border-black
      rounded
      text-left
      bg-white
      text-black
      dark:border-white dark:bg-black dark:text-white
    "
  >
    <div class="text-2xl text-center">
      {{ repo.name }}
    </div>
    <div class="mt-5">
      {{ repo.description }}
    </div>
    <div class="mt-5">
      Страница:
      <a
        :href="repo.html_url"
        target="_blank"
        class="text-indigo-500 underline hover:text-indigo-700 cursour-pointer"
        >{{ repo.html_url }}</a
      >
    </div>
    <div class="mt-5 px-3 flex justify-between w-[100%] items-center">
      <div class="text-center">
        <div class="text-lg">{{ repo.stargazers_count }}</div>
        <div class="text-md">Звезд</div>
      </div>
      <div class="text-center">
        <div class="text-lg">{{ repo.language }}</div>
      </div>
      <div class="flex flex-col items-center">
        <img
          :src="repo.owner.avatar_url"
          alt=""
          class="
            h-[25px]
            w-[25px]
            border border-black
            rounded-[50%]
            mr-1
            object-cover object-center
          "
        />
        <div class="text-md">{{ repo.owner.login }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repo: Object,
  },
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    copyGit() {
      navigator.clipboard.writeText(repo.git_url);
    },
  },
};
</script>
