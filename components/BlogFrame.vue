<template>
  <div>
    <a href="/blog">Back to posts</a>

    <h1 style="margin-top: 1em">{{ $frontmatter.title }}</h1>
    <slot />

    <br style="margin-bottom: 2em">
    <a href="/blog">Back to posts</a>
  </div>
</template>

<script setup>

</script>
