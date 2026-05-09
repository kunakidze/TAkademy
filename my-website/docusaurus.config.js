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
        title: 'RTPS',
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
            href: 'https://github.com//kunakidze/TAkademy',
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
            ],
          },
          {
            title: 'Для авторов',
            items: [
              {
                label: 'Репозиторий',
                href: 'https://github.com//kunakidze/TAkademy',
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
