<template>
  <a :href="`/blog/#${postSlug}`" style="display: flex; align-items: center;">
    <icon icon="mdi:arrow-left" style="margin-right: 2px"></icon>Back to posts
  </a>
</template>

<script setup>
import { useRoute } from 'vitepress';
import { extractPostSlug } from './utils.ts';

const route = useRoute();
const postSlug = extractPostSlug(route.path);
</script>
