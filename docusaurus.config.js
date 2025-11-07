// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Iliass Aguerzi',
  tagline: 'Data Scientist & AI Developer',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Update these for your GitHub Pages
  url: 'https://iliass-aguerzi.github.io',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'Iliass-Aguerzi',
  projectName: 'iliass-aguerzi.github.io',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Disable docs since you're not using them
        blog: {
          showReadingTime: true,
          // Remove the editUrl or update to your repo
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your own social card or remove
      image: 'img/social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Iliass Aguerzi',
        logo: {
          alt: 'Iliass Aguerzi Logo',
          src: 'img/logo.svg', // Optional - add your own logo
        },
        items: [
          {
            to: '/projects',
            label: 'Projects',
            position: 'left'
          },
          {
            to: '/cv',
            label: 'CV',
            position: 'left'
          },
          {
            href: 'https://github.com/Iliass-Aguerzi',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portfolio',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Projects',
                to: '/projects',
              },
              {
                label: 'CV',
                to: '/cv',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Iliass-Aguerzi',
              },
              {
                label: 'Email',
                href: 'mailto:iliassaguerzi@outlook.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Iliass Aguerzi. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;