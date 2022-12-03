module.exports = {
  base:'vuepress',
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    sidebar: 'auto',
    nav: [ // 导航栏
      {
        text: '文档',
        link: '/'
      }, {
        text: '官网',
        link: 'https://www.clueai.cn/'
      }
    ]
  },
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4']
  },
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/en/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Making NLP part of every developer toolkit.'
    }
  }
}