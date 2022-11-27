import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { defaultTheme } from 'vuepress'

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: '/docs/',
  lang: 'zh-CN',
  title: 'Docs',
  description: 'Platform project Guide and API documentation',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://cdn-icons-png.flaticon.com/512/3073/3073412.png',
      },
    ],
  ],
  pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],
  public: path.resolve(__dirname, './public'),
  alias: {
    '@images': path.resolve(__dirname, '../images'),
  },
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/zh/': {
      lang: 'zh-CN',
    },
  },
  markdown: {
    // anchor: false,
    // links: false,
    // emoji: false,
    // toc: false,
    code: {
      // lineNumbers: false,
      // highlightLines: false, 
    },
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@vuepress/, path.resolve(__dirname, './')),
    },
  },
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '语言',
      },
    },
    // 默认主题配置
    colorMode: 'auto',
    colorModeSwitch: true,
    docsDir: 'docs',
    navbar: [
      // NavbarItem
      {
        text: 'Examples',
        link: '/demo/example.md',
      },
      {
        text: 'Settings',
        link: '/demo/settings.md',
      },
    ],
    logo: 'https://img.freepik.com/free-photo/hand-holding-writing-checklist-application-form-document-clipboard-white-background-3d-illustration_56104-1551.jpg?w=1800&t=st=1666609151~exp=1666609751~hmac=942f6b97b2e28927b59d1462e016554996865c59eaf69b8e5f56e9ea53022526',
    logoDark: 'https://img.freepik.com/free-photo/purple-calendar-clock-icon-3d-reminder-notification-concept-website-ui-purple-background-3d-rendering-illustration_56104-1317.jpg?w=2000&t=st=1666609220~exp=1666609820~hmac=aa9fe7ce4b51c388fcd86e059aae8223ab4e34b2d03a8bc641836f0818b6a6ee',
    sidebar: {
      '/': [
        {
          text: 'Infra Delivery Platform',
          collapsible: false,
          children: [
            '/infra/project', 
          ],
        },
        {
          text: 'OpenAPI Documentation',
          collapsible: false,
          children: [
            '/infra/open-api/overview',
            '/infra/open-api/access-token',
            '/infra/open-api/create-project',
            '/infra/open-api/update-project',
            '/infra/open-api/delete-project',
            '/infra/open-api/list-project',
            '/infra/open-api/query-project',
          ],
        },
        {
          text: 'Knowledge Summary',
          collapsible: false,
          children: [
            '/infra/note/01', 
            '/infra/note/02',
            '/infra/note/03',
          ],
        },
      ],
    },
    sidebarDepth: 3,
  }),
});
