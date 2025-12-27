import { createContentLoader } from 'vitepress'

export default createContentLoader(['blog/posts/*/*.md'], {
  includeSrc: false,
  render: false,
  excerpt: true,
})
