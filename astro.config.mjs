// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com", // 替换为你的实际域名
  integrations: [
    mdx(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          zh: 'zh-CN',
        },
      },
      // 自定义sitemap配置
      customPages: [
        'https://example.com/',
        'https://example.com/about',
        'https://example.com/how',
        'https://example.com/cases',
        'https://example.com/articles',
        'https://example.com/zh/',
        'https://example.com/zh/about',
        'https://example.com/zh/how',
        'https://example.com/zh/cases',
        'https://example.com/zh/articles',
      ],
      // 排除不需要索引的页面
      filter: (page) => !page.includes('/api/') && !page.includes('/admin/'),
      // 设置变更频率和优先级
      changefreq: 'weekly',
      priority: 0.7,
      // 最后修改时间
      lastmod: new Date(),
    })
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
