// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Bipper',
    tagline: 'Sua Solução em business intelligence',
    url: 'https://rodrigobmoraes.github.io/rodrigobmoraes/',
    baseUrl: 'https://rodrigobmoraes.github.io/rodrigobmoraes/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon-bipper.ico',
    organizationName: 'uppercase', // Usually your GitHub org/user name.
    projectName: 'bipper-release', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',

                    // Please change this to your repo.
                    //editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
                },

        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
          algolia: {
              apiKey: 'bbc1927d234a45ddb80b1f7b1a492ddb',
              indexName: 'uppercase',
              contextualSearch: true,
              externalUrlRegex: '',
              placeholder: 'Pesquisar',
              appId: 'O8N8I61SOO',
              searchParameters: {},
          },

      navbar: {
        title: 'BIPPER Releases',
        logo: {
          alt: 'Bipper Logo',
          src: 'img/logo.png',
        },
        /*
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Releases',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
        */
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Uppercase, Inc. Sua solução em business intelligence.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
