<script setup lang="ts">
useHead({
  title: 'Blog Grids | Play Tailwind',
  meta: [
    { name: 'description', content: '' }
  ],
})
const localePath = useLocalePath()
const route = useRoute()
const slug = route.params.slug

import { useRoute } from 'vue-router'
const { locale } = useI18n()
const { data: blog } = await useFetch(`https://strapi-production-54ec.up.railway.app/api/blogs?filter[slug]=${slug}&&locale=${locale.value}`)
const blogDetail = computed(() => blog.value?.data?.[0] || null)

</script>
<template>

  <div class="bg-white/80 dark:bg-gray-900/90">
      <div class="p-5 relative z-10 overflow-hidden max-w-7xl mx-auto w-auto">
        <!-- <div
          class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-stroke/0 via-stroke dark:via-dark-3 to-stroke/0">
        </div> -->
        <div class="mx-auto w-auto p-4">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full px-4">
              <div class="text-center">
                <ul class="flex items-center justify-left gap-[10px]">
                  <li>
                    <NuxtLink to="/"
                      class="flex items-center gap-[10px] text-base font-medium text-gray-900 dark:text-white">
                      Home
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="localePath('blogs')"
                      class="flex items-center gap-[10px] text-base font-medium text-gray-900 dark:text-white">
                      <span class="text-gray-900 dark:text-white"> / </span>
                      Blog
                    </NuxtLink>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="flex items-center gap-[10px] text-base font-medium text-gray-900 dark:text-white">
                      <span class="text-gray-900 dark:text-white"> / </span>
                      {{blogDetail.title}}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

    <main class="flex-grow pt-10 pb-12 bg-gray-300 dark:bg-gray-900/95">
      <div class="container sm:px-6 lg:px-8 max-w-7xl mx-auto w-auto">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- 左侧内容：博客列表 (占2/3宽度) -->
          <div class="p-2 lg:w-2/3 space-y-8 bg-white dark:bg-gray-900 rounded-xl md:p-10">
            <!-- 分类标题 -->
            <div class="mb-6">
              <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-900 dark:text-white">
                {{blogDetail.title}}
              </h1>
              <p class="text-neutral-500 dark:text-neutral-400 mt-2">{{blogDetail.desc}}</p>
              <MarkdownWithHighlight :source="blogDetail.content"  v-if="blogDetail.content"/>
              <!-- <Markdown :source="blogDetail.content" v-if="blogDetail.content"/> -->
              <!-- <div v-html="renderMarkdown(blogDetail.content)" class="prose max-w-none"></div> -->
            </div>
          
            <!-- 分页 -->
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
