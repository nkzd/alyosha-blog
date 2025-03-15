import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  // site: { title: "講評世界" },
  // seo: { twitter: "@moeyua13" },
  site: {
    title: 'Alyosha\'s Blog',
    author: 'Alyosha.net',
    subtitle: '',
    description: 'Personal Blog',
    website: 'https://alyosha.net',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/nkzd',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'twitter',
        href: 'https://twitter.com/AlyoshaDev',
      },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
  },
  appearance: {
    locale: 'en-us',
    theme: 'light',
  },
  seo: {
    twitter: '@AlyoshaDev',
  },

}
