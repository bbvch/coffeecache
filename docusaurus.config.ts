import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '☕ Coffee Cache',
  tagline: 'bbv Tech Blog - Insights for better software',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://coffeecache.bbv.ch',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/coffeecache/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bbvch', // Usually your GitHub org/user name.
  projectName: 'coffeecache.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          authorsMapPath: 'authors.json',
          routeBasePath: '/', // Serve the blog at the site's root
          showReadingTime: true,
          readingTime: ({ content, locale, defaultReadingTime }) =>
            defaultReadingTime({
              content,
              locale,
              options: { wordsPerMinute: 300 },
            }),
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          editLocalizedFiles: false,
          postsPerPage: 9,
          blogSidebarCount: 0
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  scripts: [
    {
      src: 'https://nullitics.com/script.js',
      async: true,
    },
  ],

  themeConfig: {
    // Replace with your project's social card        
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    codeblock: {
      showGithubLink: true,
      githubLinkLabel: 'View on GitHub',
      showRunmeLink: false,
      runmeLinkLabel: 'Checkout via Runme'
    },
    metadata: [
      { name: 'keywords', content: 'azure, blog, cloud, devops, architecture, mct, iac, platform engineering' }
    ],
    navbar: {
      title: '☕ Coffee Cache by bbv',
      items: [
        { href: 'https://bbv.ch/insights/academy/', label: 'Academies', position: 'right' },
        { href: 'https://bbv.ch/career/arbeiten-bei-bbv/', label: 'Join us', position: 'right' },
        { to: '/tags', label: 'Tags', position: 'right' },
        { to: '/archive', label: 'Archive', position: 'right' },
        { to: '/about', label: 'About us', position: 'right' },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} bbv Software Services AG`,
      links: [
        { label: 'bbv.ch', href: 'https://bbv.ch' },
        { label: 'bbv GitHub', href: 'https://github.com/bbvch' },
        { label: 'bbv LinkedIn', href: 'https://www.linkedin.com/company/bbv-software-services' },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'powershell', 'bicep', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
