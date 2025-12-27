---
layout: doc
---

<script setup>
import { data as posts } from './posts.data.ts'
import { ref } from 'vue'

const sortedPosts = ref(
    posts
        .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
        .map((item) => {
            item.frontmatter.date = new Date(item.frontmatter.date).toLocaleDateString();
            return item;
        })
)

console.log(sortedPosts.value)
</script>

# Blog posts
These posts are written by me and only me. No LLM is involved in the writing process. They solely reflect my own opinions and experiences, not my current or former employers.

<div v-for="post of sortedPosts" :key="post.url">
<h2 class="post-title"><a :href="post.url">{{ post.frontmatter.title }}</a></h2>
<p class="post-excerpt">{{ post.frontmatter.excerpt }}</p>
<div class="post-date">{{ post.frontmatter.date }}</div>

</div>

<style scoped>
.post-title a {
    text-decoration: none !important;
    font-weight: 600;

}
.post-title {
    margin-top: 16px;
}

.post-date {
    font-size: 0.7rem;
    color: gray;
}
.post-excerpt {
    font-style: italic;
    font-size: 0.9em;
    margin-bottom: 0.1em !important;
}
</style>
