// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const github = "https://github.com/npgy/blog.npgy.net";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nick Preston",
  tagline: "Tech, music, spice.",
  url: "https://blog.npgy.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "npgy", // Usually your GitHub org/user name.
  projectName: "blog.npgy.net", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-content-pages",
      {
        path: "src/pages",
        routeBasePath: "/",
        include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
        exclude: [
          "**/_*.{js,jsx,ts,tsx,md,mdx}",
          "**/_*/**",
          "**/*.test.{js,jsx,ts,tsx}",
          "**/__tests__/**",
        ],
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        path: "blog",
        blogTitle: "Blog",
      },
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        changefreq: "weekly",
        priority: 0.5,
        ignorePatterns: ["/tags/**"],
        filename: "sitemap.xml",
      },
    ],
    [
      "@docusaurus/theme-classic",
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Nick Preston's Color Profile",
          src: "img/npgy-icon.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: github,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Tech",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: github,
              },
            ],
          },
          {
            title: "Music",
            items: [
              {
                label: "My Label",
                href: "https://music.polychora.co",
              },
              {
                label: "My YouTube Channel",
                href: "https://www.youtube.com/Polychora",
              },
            ],
          },
          {
            title: "Spice",
            items: [
              {
                label: "Discord",
                href: "https://and.fm/discord",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/nmpgy/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NPGY. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["xml-doc", "json"],
      },
    }),
};

module.exports = config;
