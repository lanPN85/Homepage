import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LanPN's Homepage",
  description: "Welcome to my corner of the internet.",
  themeConfig: {
    logo: '/icon.png',
    socialLinks: [
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/lanpn85/',
      },
      {
        icon: 'github',
        link: 'https://github.com/lanPN85',
      }
    ],
    nav: [
      {
        text: 'Blog',
        link: '/blog',
      },
      {
        text: 'Source Code',
        link: 'https://github.com/lanPN85/Homepage',
      }
    ]
  },
  appearance: false,
})
