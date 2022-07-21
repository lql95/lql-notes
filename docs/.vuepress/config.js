const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "lql-notes",
  description: 'vdoing博客主题模板',
  base: '/lql-notes/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,

  plugins: [
    // vssue 评论插件
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "d3ec4ca6363950ca41a2",
        clientSecret: "897465b6393f1d663e6128d2fab6959a0c0333cc",
        owner: "lql95",
        repo: "lql-notes",
      },
    ],
    // Markdown 增强
    [
      "md-enhance",
      {
        // 启用流程图
        flowchart: true,
        // Enable mermaid
        mermaid: true,
        // 启用 TeX 支持
        tex: true,
      },
    ],
  ],
}