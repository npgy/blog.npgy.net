// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const github = 'https://github.com/npgy/blog.npgy.net';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NPGY\'s Blog',
  tagline: 'Tech, music, spice.',
  url: 'https://blog.npgy.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'npgy', // Usually your GitHub org/user name.
  projectName: 'blog.npgy.net', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
        routeBasePath: '/',
        include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        path: 'blog',
        blogTitle: 'Nick Preston\'s Blog',
      }
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
      },
    ],
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Nick Preston',
        logo: {
          alt: 'Nick Preston\'s Color Profile',
          src: 'img/npgy-icon.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: github,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Music',
            items: [
              {
                label: 'Polychora Records',
                href: 'https://music.polychora.co',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/chillsynth',
              },
              {
                label: 'Instagram',
                href: 'https://github.com/npgy/blog.npgy.net',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: github,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NPGY. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
