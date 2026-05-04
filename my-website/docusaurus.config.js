import { themes as prismThemes } from 'prism-react-renderer';

const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RTPS',
  tagline: 'Техническая документация платформы для планирвоания путушествий по России (RTPS)',
  favicon: 'img/favicon.ico',
  url: 'https://kunakidze.github.io',
  baseUrl: '/TAkademy/',
  organizationName: 'kunakidze',
  projectName: 'TAkademy',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'main',

  plugins: [
    ['drawio', {}],
    // Второй docs instance для Style Guide
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'style-guide',
        path: 'style-guide',
        routeBasePath: 'style-guide',
        sidebarPath: require.resolve('./sidebars-style-guide.js'),
        remarkPlugins: [simplePlantUML],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com//kunakidze/T-Akademy/edit/main/my-website/',
          remarkPlugins: [simplePlantUML],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'RTPS',
            spec: 'api_specs/RTPS-openapi.yaml',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HeroTask',
        logo: {
          alt: 'RTPS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Документация',
          },
          {
            to: '/docs/api/RTPS',
            label: 'API',
            position: 'left',
          },
          {
            to: '/style-guide/',
            label: 'Style Guide',
            position: 'left',
          },
          {
            href: 'https://github.com//kunakidze/T-Akademy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Карточка сервиса',
                to: '/docs/intro',
              },
              {
                label: 'Архитектура',
                to: '/docs/arch',
              },
              {
                label: 'API Reference',
                to: '/docs/api/RTPS',
              },
            ],
          },
          {
            title: 'Для авторов',
            items: [
              {
                label: 'Style Guide',
                to: '/style-guide/',
              },
              {
                label: 'Репозиторий',
                href: 'https://github.com//kunakidze/T-Akademy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RTPS. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;