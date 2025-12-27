<template>
  <div>
    <BackToPosts />

    <h1 style="margin-top: 1em">{{ $frontmatter.title }}</h1>
    <caption class="post-date">{{ postDate }}</caption>
    <div style="margin-bottom: 1em"></div>

    <slot />

    <div style="margin-bottom: 2em" />
    <BackToPosts />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import BackToPosts from "./BackToPosts.vue";

const { frontmatter } = useData();

const postDate = computed(() => {
  return new Date(frontmatter.value.date).toLocaleDateString();
});
</script>

<style scoped>
.post-date {
  font-size: 0.8rem;
  color: gray;
}
</style>
