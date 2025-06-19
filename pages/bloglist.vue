<script setup lang="ts">
useHead({
  title: 'Blog Grids | Play Tailwind',
  meta: [
    { name: 'description', content: '' }
  ],
})

/**const { locale } = useI18n()
const { data: blogs, pending, error } = await useFetch(`http://localhost:1337/api/questionlists?locale=${locale.value}`)

import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

// 渲染成 HTML
function renderMarkdown(markdown) {
  return md.render(markdown || '')
}**/
</script>
<template>
    <main class="flex-grow pt-20 pb-12 bg-gray-100/50 dark:bg-gray-900/95">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- 左侧内容：博客列表 (占2/3宽度) -->
          <div class="lg:w-2/3 space-y-8">
            <!-- 分类标题 -->
            <div class="mb-6">
              <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-900 dark:text-white">
                博客列表
              </h1>
              <p class="text-neutral-500 dark:text-neutral-400 mt-2">探索前沿技术，服务需要的您</p>
            </div>
            
            <!-- 博客文章列表 -->
            <div class="space-y-8">
              <!-- 博客文章卡片 1 -->
              <article class="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow card-hover">
                <div class="md:flex">
                  <div class="md:w-1/3">
                    <img src="https://picsum.photos/600/400?random=10" alt="Vue 3 组合式API教程" class="h-full w-full object-cover">
                  </div>
                  <div class="p-6 md:w-2/3">
                    <div class="flex items-center space-x-2 mb-3">
                      <span class="px-2 py-1 text-xs font-medium text-gray-900 dark:text-white rounded-full">前端开发</span>
                      <span class="text-sm text-gray-900 dark:text-white">2023-06-15</span>
                    </div>
                    <h2 class="text-xl font-bold text-neutral-800 dark:text-white mb-2 hover:text-primary dark:hover:text-primary transition-colors">
                      <a href="#">Vue 3 组合式API完全指南：从入门到精通</a>
                    </h2>
                    <p class="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-2">
                      深入探讨Vue 3的组合式API，学习如何构建更高效、更易维护的组件。本文将从基础语法到高级模式，全面解析组合式API的使用技巧。
                    </p>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-2">
                        <img src="https://picsum.photos/40/40?random=1" alt="作者头像" class="w-8 h-8 rounded-full">
                        <span class="text-sm text-neutral-600 dark:text-neutral-300">张开发</span>
                      </div>
                      <div class="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <span><i class="fa fa-eye mr-1"></i> 2.4k</span>
                        <span><i class="fa fa-comment mr-1"></i> 36</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              
              <!-- 博客文章卡片 2 -->
              <article class="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow card-hover">
                <div class="md:flex">
                  <div class="md:w-1/3">
                    <img src="https://picsum.photos/600/400?random=11" alt="Tailwind CSS高级技巧" class="h-full w-full object-cover">
                  </div>
                  <div class="p-6 md:w-2/3">
                    <div class="flex items-center space-x-2 mb-3">
                      <span class="px-2 py-1 text-xs font-medium text-gray-900 dark:text-white rounded-full">CSS</span>
                      <span class="text-sm text-gray-900 dark:text-white">2023-05-28</span>
                    </div>
                    <h2 class="text-xl font-bold text-neutral-800 dark:text-white mb-2 hover:text-primary dark:hover:text-primary transition-colors">
                      <a href="#">Tailwind CSS高级技巧：自定义工具类与响应式设计</a>
                    </h2>
                    <p class="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-2">
                      除了使用默认工具类，Tailwind CSS还提供了强大的自定义功能。本文将介绍如何通过配置文件扩展Tailwind，创建符合项目需求的工具类和组件。
                    </p>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-2">
                        <img src="https://picsum.photos/40/40?random=2" alt="作者头像" class="w-8 h-8 rounded-full">
                        <span class="text-sm text-neutral-600 dark:text-neutral-300">李设计</span>
                      </div>
                      <div class="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <span><i class="fa fa-eye mr-1"></i> 1.8k</span>
                        <span><i class="fa fa-comment mr-1"></i> 24</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              
              <!-- 博客文章卡片 3 -->
              <article class="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow card-hover">
                <div class="md:flex">
                  <div class="md:w-1/3">
                    <img src="https://picsum.photos/600/400?random=12" alt="JavaScript性能优化" class="h-full w-full object-cover">
                  </div>
                  <div class="p-6 md:w-2/3">
                    <div class="flex items-center space-x-2 mb-3">
                      <span class="px-2 py-1 text-xs font-medium text-gray-900 dark:text-white rounded-full">JavaScript</span>
                      <span class="text-sm text-gray-900 dark:text-white">2023-05-10</span>
                    </div>
                    <h2 class="text-xl font-bold text-neutral-800 dark:text-white mb-2 hover:text-primary dark:hover:text-primary transition-colors">
                      <a href="#">JavaScript性能优化：从代码到运行时的全面指南</a>
                    </h2>
                    <p class="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-2">
                      优化JavaScript代码是前端开发中的重要环节。本文将从代码结构、算法选择到浏览器渲染机制，全方位介绍提升JavaScript性能的实用技巧。
                    </p>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-2">
                        <img src="https://picsum.photos/40/40?random=3" alt="作者头像" class="w-8 h-8 rounded-full">
                        <span class="text-sm text-neutral-600 dark:text-neutral-300">王架构</span>
                      </div>
                      <div class="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <span><i class="fa fa-eye mr-1"></i> 3.1k</span>
                        <span><i class="fa fa-comment mr-1"></i> 42</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              
              <!-- 博客文章卡片 4 -->
              <article class="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow card-hover">
                <div class="md:flex">
                  <div class="md:w-1/3">
                    <img src="https://picsum.photos/600/400?random=13" alt="React vs Vue" class="h-full w-full object-cover">
                  </div>
                  <div class="p-6 md:w-2/3">
                    <div class="flex items-center space-x-2 mb-3">
                      <span class="px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">框架对比</span>
                      <span class="text-sm text-neutral-500 dark:text-neutral-400">2023-04-22</span>
                    </div>
                    <h2 class="text-xl font-bold text-neutral-800 dark:text-white mb-2 hover:text-primary dark:hover:text-primary transition-colors">
                      <a href="#">React vs Vue 2023：深入对比与技术选型指南</a>
                    </h2>
                    <p class="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-2">
                      React和Vue是目前最流行的两个前端框架，各有其优势和适用场景。本文将从性能、生态系统、学习曲线等多个维度进行对比，帮助你做出最合适的技术选择。
                    </p>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-2">
                        <img src="https://picsum.photos/40/40?random=4" alt="作者头像" class="w-8 h-8 rounded-full">
                        <span class="text-sm text-neutral-600 dark:text-neutral-300">赵分析</span>
                      </div>
                      <div class="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <span><i class="fa fa-eye mr-1"></i> 4.2k</span>
                        <span><i class="fa fa-comment mr-1"></i> 78</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            
            <!-- 分页 -->
            <div class="flex justify-center mt-10">
              <nav class="inline-flex rounded-md shadow-sm" aria-label="分页">
                <a href="#" class="px-3 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50 dark:bg-neutral-700 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-600">
                  <span class="sr-only">上一页</span>
                  <i class="fa fa-chevron-left"></i>
                </a>
                <a href="#" class="px-3 py-2 border border-neutral-300 bg-primary text-sm font-medium text-white hover:bg-primary/90 dark:bg-primary dark:border-primary dark:text-white">
                  1
                </a>
                <a href="#" class="px-3 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:bg-neutral-700 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-600">
                  2
                </a>
                <a href="#" class="px-3 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:bg-neutral-700 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-600">
                  3
                </a>
                <span class="px-3 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-700 dark:bg-neutral-700 dark:border-neutral-600 dark:text-neutral-300">
                  ...
                </span>
                <a href="#" class="px-3 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:bg-neutral-700 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-600">
                  8
                </a>
                <a href="#" class="px-3 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50 dark:bg-neutral-700 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-600">
                  <span class="sr-only">下一页</span>
                  <i class="fa fa-chevron-right"></i>
                </a>
              </nav>
            </div>
          </div>
          
          <!-- 右侧内容：热门推荐和分类 (占1/3宽度) -->
          <div class="lg:w-1/3 space-y-8">
            <!-- 搜索框 -->
            <div class="bg-white dark:bg-gray-700 rounded-xl p-5 shadow-sm">
              <div class="relative">
                <input type="text" placeholder="搜索文章..." class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white">
                <i class="fa fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            
            <!-- 热门文章 -->
            <div class="bg-white dark:bg-gray-700 rounded-xl p-5 shadow-sm">
              <h3 class="text-lg font-semibold text-neutral-800 dark:text-white mb-4 flex items-center">
                <i class="fa fa-fire text-red-500 mr-2"></i> 热门文章
              </h3>
              <div class="space-y-4">
                <a href="#" class="flex group">
                  <img src="https://picsum.photos/100/100?random=20" alt="文章缩略图" class="w-16 h-16 rounded-lg object-cover">
                  <div class="ml-3">
                    <h4 class="text-sm font-medium text-neutral-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      如何用React Hooks重构你的项目
                    </h4>
                    <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">2023-06-05 · 3.5k 阅读</p>
                  </div>
                </a>
                <a href="#" class="flex group">
                  <img src="https://picsum.photos/100/100?random=21" alt="文章缩略图" class="w-16 h-16 rounded-lg object-cover">
                  <div class="ml-3">
                    <h4 class="text-sm font-medium text-neutral-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      CSS Grid完全指南：从入门到精通
                    </h4>
                    <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">2023-05-20 · 2.8k 阅读</p>
                  </div>
                </a>
                <a href="#" class="flex group">
                  <img src="https://picsum.photos/100/100?random=22" alt="文章缩略图" class="w-16 h-16 rounded-lg object-cover">
                  <div class="ml-3">
                    <h4 class="text-sm font-medium text-neutral-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      JavaScript异步编程：从回调地狱到Async/Await
                    </h4>
                    <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">2023-05-08 · 4.2k 阅读</p>
                  </div>
                </a>
                <a href="#" class="flex group">
                  <img src="https://picsum.photos/100/100?random=23" alt="文章缩略图" class="w-16 h-16 rounded-lg object-cover">
                  <div class="ml-3">
                    <h4 class="text-sm font-medium text-neutral-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      前端性能优化：从理论到实践
                    </h4>
                    <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">2023-04-15 · 5.7k 阅读</p>
                  </div>
                </a>
              </div>
            </div>
            
            <!-- 分类 -->
            <div class="bg-white dark:bg-gray-700 rounded-xl p-5 shadow-sm">
              <h3 class="text-lg font-semibold text-neutral-800 dark:text-white mb-4 flex items-center">
                <i class="fa fa-folder-open text-primary mr-2"></i> 文章分类
              </h3>
              <div class="space-y-2">
                <a href="#" class="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors group">
                  <span class="text-neutral-700 dark:text-neutral-300 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    <i class="fa fa-code mr-2"></i> 前端开发
                  </span>
                  <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full text-gray-900 dark:text-white">24</span>
                </a>
                <a href="#" class="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors group">
                  <span class="text-neutral-700 dark:text-neutral-300 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    <i class="fa fa-server mr-2"></i> 后端开发
                  </span>
                  <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full text-gray-900 dark:text-white">18</span>
                </a>
                <a href="#" class="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors group">
                  <span class="text-neutral-700 dark:text-neutral-300 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    <i class="fa fa-database mr-2"></i> 数据库
                  </span>
                  <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full text-gray-900 dark:text-white">12</span>
                </a>
                <a href="#" class="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors group">
                  <span class="text-neutral-700 dark:text-neutral-300 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    <i class="fa fa-mobile mr-2"></i> 移动开发
                  </span>
                  <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full text-gray-900 dark:text-white" >9</span>
                </a>
                <a href="#" class="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors group">
                  <span class="text-neutral-700 dark:text-neutral-300 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    <i class="fa fa-cloud mr-2"></i> 云计算
                  </span>
                  <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full text-gray-900 dark:text-white">7</span>
                </a>
              </div>
            </div>
            
            <!-- 标签云 -->
            <div class="bg-white dark:bg-gray-700 rounded-xl p-5 shadow-sm">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <i class="fa fa-tags text-secondary mr-2"></i> 热门标签
              </h3>
              <div class="flex flex-wrap gap-2">
                <a href="#" class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-300 rounded-full hover:bg-primary hover:bg-gray-200 transition-colors">JavaScript</a>
                <a href="#" class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-300 rounded-full hover:bg-primary hover:bg-gray-200 transition-colors">Vue.js</a>
                <a href="#" class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-300 rounded-full hover:bg-primary hover:bg-gray-200 transition-colors">React</a>
                <a href="#" class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-300 rounded-full hover:bg-primary hover:bg-gray-200 transition-colors">TypeScript</a>
                <a href="#" class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-300 rounded-full hover:bg-primary hover:bg-gray-200 transition-colors">Tailwind CSS</a>
                <a href="#" class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-300 rounded-full hover:bg-primary hover:bg-gray-200 transition-colors">Node.js</a>
                <a href="#" class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-300 rounded-full hover:bg-primary hover:bg-gray-200 transition-colors">性能优化</a>
                <a href="#" class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-300 rounded-full hover:bg-primary hover:bg-gray-200 transition-colors">前端架构</a>
                <a href="#" class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-300 rounded-full hover:bg-primary hover:bg-gray-200 transition-colors">Webpack</a>
                <a href="#" class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-300 rounded-full hover:bg-primary hover:bg-gray-200 transition-colors">Vite</a>
              </div>
            </div>
            
            <!-- 订阅 -->
            <div class="bg-gradient-to-br from-primary/90 to-secondary/90 dark:from-primary dark:to-secondary rounded-xl p-6 text-gray-900 dark:text-white shadow-lg">
              <h3 class="text-lg font-semibold mb-2">订阅更新</h3>
              <p class="text-sm text-gray-900 dark:text-white mb-4">获取最新的技术文章和行业动态</p>
              <form class="space-y-3">
                <input type="email" placeholder="输入你的邮箱" class="w-full px-4 py-2 rounded-lg bg-white/20 border border-gray/30 placeholder-gray-900/60 dark:placeholder-white text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                <button type="submit" class="w-full px-4 py-2 bg-gray-700 text-white text-primary font-medium rounded-lg hover:bg-gray-600 transition-colors">
                  订阅
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>
