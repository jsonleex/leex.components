import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'X Components',
  description: 'A components collection for leex',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/quick-start', activeMatch: '/guide/' },
      { text: 'Components', link: '/components/', activeMatch: '/components/' },
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Quick Start', link: '/guide/quick-start' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button/' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jsonleex/leex.components' },
    ],
  },
})
