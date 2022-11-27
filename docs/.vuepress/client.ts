import { defineClientConfig, usePageData } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 获取所有页面信息
    const pagesData = usePageData();
    // 查看信息
    console.log(pagesData.value);
  },
  setup() {
    console.log("root component setup invoked.");
  },
  rootComponents: [],
});
