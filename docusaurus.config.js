import { themes as prismThemes } from 'prism-react-renderer';
const config = {
  title: 'Iliass Aguerzi',
  tagline: 'Data Scientist & AI Developer',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },
  url: 'https://iliass-aguerzi.github.io',
  baseUrl: '/',
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
      ({
        docs: false, 
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Iliass Aguerzi',
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
