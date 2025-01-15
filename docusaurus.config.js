// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {ProvidePlugin} from 'webpack';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NeuralTrust Docs',
  tagline: 'Documentation for the leading security platform for Generative AI',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://docs.neuraltrust.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NeuralTrust', // Usually your GitHub org/user name.
  projectName: 'neuraltrust', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: ({ versionDocsDirPath, docPath, locale }) => {
            if (locale != 'en') {
              return 'https://docs.neuraltrust.ai';
            }
            let match;
            if ((match = docPath.match(/Gateway\/(.*)\.md/)) != null) {
              return `https://github.com/NeuralTrust/neuraltrust/blob/main/docs/AI%20Gateway/${match[1]}.md`;
            }
            if ((match = docPath.match(/Observability\/(.*)\.md/)) != null) {
              return `https://github.com/NeuralTrust/neuraltrust/blob/main/docs/Observability/${match[1]}.md`;
            }
            if ((match = docPath.match(/Red Teaming\/(.*)\.md/)) != null) {
              return `https://github.com/NeuralTrust/neuraltrust/blob/main/docs/Red%20Teaming/${match[1]}.md`;
            }
            return `https://github.com/NeuralTrust/neuraltrust/blob/main/${versionDocsDirPath}/${docPath}`;
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/category/'));
          },
        },
      }),
    ],
  ],

  plugins: [
    require.resolve('./plugins/webpackPolyfillPlugin'),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/neuraltrust-social-card.jpg',
      // announcementBar: {
      //   id: 'announcement-bar',
      //   content:
      //     '<a href="https://neuraltrust.ai" target="_blank" rel="noopener"><span>Back to NeuralTrust.ai →</span></a>',
      //   isCloseable: false,
      // },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'HW1BIJOXAK',
  
        // Public API key: it is safe to commit it
        apiKey: '3d6824f8974966996459cc83fcabc8c7',
  
        indexName: 'neuraltrustio',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: false,
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
  
        //... other Algolia params
      },
      navbar: {
        title: 'NeuralTrust',
        logo: {
          alt: 'NeuralTrust Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg',
          className: 'navbar-logo',
        },
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/NeuralTrust/TrustGate',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://neuraltrustcommunity.slack.com/join/shared_invite/zt-2xl47cag6-_HFNpltIULnA3wh4R6AqBg',
            position: 'right',
            className: 'header-slack-link',
            'aria-label': 'Slack community',
          },
          {
            href: 'https://linkedin.com/company/neuraltrust',
            position: 'right',
            className: 'header-linkedin-link',
            'aria-label': 'LinkedIn page',
          },
        ],
      },
      prism: {
        theme: prismThemes.github
      },
    }),
};

export default config;
