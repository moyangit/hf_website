<script setup lang="ts">
useHead({
  title: 'Blog Grids | Play Tailwind',
  meta: [
    { name: 'description', content: '' }
  ],
})

const localePath = useLocalePath()

const { locale } = useI18n()
const { data: hotBlogs, pending, error } = await useFetch(`https://strapi-production-54ec.up.railway.app/api/blogs?sort=viewCount:desc&pagination[limit]=3&&populate[coverImg]=true&populate[category]=true&&locale=${locale.value}`)
const { data: newBlogs } = await useFetch(`https://strapi-production-54ec.up.railway.app/api/blogs?sort=publishedAt:desc&pagination[limit]=3&&populate[coverImg]=true&populate[category]=true&&locale=${locale.value}`)

const { data: topBlogs } = await useFetch(`https://strapi-production-54ec.up.railway.app/api/blogs?pagination[limit]=1&populate[coverImg]=true&populate[category]=true&&locale=${locale.value}&&filters[pin]=true`)


const { data: categorys } = await useFetch(`https://strapi-production-54ec.up.railway.app/api/categories?locale=${locale.value}&&filters[disable]=false`)

const topBlog = computed(() => topBlogs.value?.data?.[0] || null)
// import MarkdownIt from 'markdown-it'

// const md = new MarkdownIt()

// // 渲染成 HTML
// function renderMarkdown(markdown) {
//   return md.render(markdown || '')
// }
</script>

<template>
  <!-- ====== Banner Section Start -->
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
                    <a href="javascript:void(0)" class="flex items-center gap-[10px] text-base font-medium text-gray-900 dark:text-white">
                      <span class="text-gray-900 dark:text-white"> / </span>
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <!-- ====== Banner Section End -->

  <!--<div v-for="blog in blogs.data" :key="blog.id">
      <h2>{{ blog.name }}</h2>
      <div v-html="renderMarkdown(blog.content)" class="prose max-w-none"></div>
    </div>-->

    <div class="bg-gray-100/50 dark:bg-gray-900/95">

        <section
        id="catetry"
        class="p-5 relative z-20 overflow-hidden lg:pb-[10px] lg:pt-[10px] max-w-7xl mx-auto w-auto"
      >

        <div class="mx-auto px-4 py-4 ">
            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <!-- 选中状态 -->
              <a href="#" class="
                px-4 py-2 
                rounded-full 
                text-sm font-medium 
                transition duration-200
                bg-white text-gray-700
                border border-gray-200
                hover:bg-gray-50 hover:shadow-sm
                shadow-md
                dark:bg-gray-700 dark:text-gray-300
                dark:border-gray-600
                dark:hover:bg-gray-600
              ">
                全部
              </a>
              
              <!-- 未选中状态 -->
              <a href="#" class="
                px-4 py-2 
                rounded-full 
                text-sm font-medium 
                transition duration-200
                bg-white text-gray-700
                border border-gray-200
                hover:bg-gray-50 hover:shadow-sm
                dark:bg-gray-800 dark:text-gray-300
                dark:border-gray-700
                dark:hover:bg-gray-700
              " v-for="cate in categorys.data">
                {{ cate.name }}
              </a>
              
              
            </div>
          </div>
      </section>
    </div>
    



<!-- ====== Top Blog Start -->
 <div class="bg-gray-100/50 dark:bg-gray-900/95  " v-if="topBlog">
    <section
      id="hot"
      class="p-5 dark:bg-dark max-w-7xl mx-auto w-auto"
    >
      <div class="mx-auto w-auto p-4">
        <div class="wow fadeInUp" data-wow-delay=".2s">
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="w-full px-4 lg:w-1/2">
              <NuxtLink :to="`/blog/${topBlog.slug}`">
                <div
                    class="mb-4 h-[150px] md:h-[340px] overflow-hidden rounded-[5px] "
                  >
                    <img
                      :src="'https://strapi-production-54ec.up.railway.app' + topBlog.coverImg[0].url"
                      alt="about image"
                      class="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                </div>
              </NuxtLink>
              
            </div>

            <div class="w-full px-4 lg:w-1/2">

              <div class="mb-12 max-w-[540px] lg:mb-0">
                <span
                  class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-white rounded-[5px] bg-gray-500">
                  {{topBlog.category.name}}
                </span>
                <span
                  class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-gray-900 dark:text-white rounded-[5px] bg-primary">
                  {{topBlog.publishTime}}
                </span>

                <h2
                  class="mb-5 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-[40px] sm:leading-[1.2]"
                >
                <NuxtLink :to="`/blog/${topBlog.slug}`">
                  {{topBlog.title}}
                </NuxtLink>
                  
                </h2>
                <p
                  class="mb-10 text-base leading-relaxed text-gray-900 dark:text-white"
                >
                  {{topBlog.desc}}
                  <br />
                </p>

                
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
  

  <!-- ====== Blog Section Start -->
    <div class="bg-gray-100/50 dark:bg-gray-900">

      <section class="p-5 dark:bg-dark max-w-7xl mx-auto w-auto">
  
        <div class="flex items-center justify-between p-4">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">最热门</h2>
          <a href="#" class="text-gray-900 dark:text-white transition-colors flex items-center">
            更多
            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <!-- <h2 class="p-5 md:pt-10 text-3xl font-semibold text-gray-900 dark:text-white">最热门</h2> -->

        <div class="mx-auto w-auto p-4">
          <div class="flex flex-wrap -mx-4">

            <div class="w-full px-4 md:w-1/2 lg:w-1/3" v-for="hot in hotBlogs.data" :key="hot.documentId">
              <div class="mb-10 wow fadeInUp group" data-wow-delay=".1s">
                
                  <NuxtLink :to="`/blog/${hot.slug}`">
                    <div
                        class="mb-4 h-[150px] md:h-[200px] overflow-hidden rounded-[5px] "
                      >
                        <img
                          :src="'https://strapi-production-54ec.up.railway.app' + hot.coverImg[0].url"
                          alt="about image"
                          class="w-full transition group-hover:rotate-6 group-hover:scale-125"
                        />
                    </div>
                  </NuxtLink>
         
                <div>
                  <div class="flex items-center justify-between">
                    
                    <span
                      class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-white rounded-[5px] bg-gray-500">
                      {{hot.category && hot.category.name}}
                    </span>

                    <span
                      class="inline-block py-0.5 mb-6 text-xs font-medium leading-loose text-center text-gray-900 dark:text-white rounded-[5px]">
                      {{hot.publishTime}}
                    </span>
                  </div>

                  
                  <h3>
                    <NuxtLink :to="`/blog/${hot.slug}`">
                      <a href="javascript:void(0);"
                        class="inline-block mb-4 text-xl font-semibold text-dark text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                        {{hot.title}}
                      </a>
                    </NuxtLink>
                  </h3>
                  <p class="max-w-[370px] text-base text-gray-900 dark:text-white">
                    {{hot.desc}}
                  </p>
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </section>
    </div>
  
  <!-- ====== Blog Section End -->


    <div class="bg-gray-100/50 dark:bg-gray-900">

      <section class="p-5 dark:bg-dark max-w-7xl mx-auto w-auto">
  
          <div class="flex items-center justify-between p-4">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">最新</h2>
            <nuxt-link :to="localePath('bloglist')" class="text-gray-900 dark:text-white transition-colors flex items-center">
              更多
              <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </nuxt-link>
          </div>
          <!-- <h2 class="p-5 md:pt-10 text-3xl font-semibold text-gray-900 dark:text-white">最热门</h2> -->

          <div class="mx-auto w-auto p-4">
            <div class="flex flex-wrap -mx-4">
              
              <div class="w-full px-4 md:w-1/2 lg:w-1/3" v-for="newB in newBlogs.data" :key="newB.documentId">
              <div class="wow fadeInUp group" data-wow-delay=".1s">
                  <NuxtLink :to="`/blog/${newB.slug}`">
                    <div
                        class="mb-4 h-[150px] md:h-[200px] overflow-hidden rounded-[5px] "
                      >
                        <img
                          :src="'https://strapi-production-54ec.up.railway.app' + newB.coverImg[0].url"
                          alt="about image"
                          class="w-full transition group-hover:rotate-6 group-hover:scale-125"
                        />
                    </div>
                  </NuxtLink>
                <div>
                  <div class="flex items-center justify-between">
                    
                    <span
                      class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-white rounded-[5px] bg-gray-500">
                      {{newB.category && newB.category.name}}
                    </span>

                    <span
                      class="inline-block py-0.5 mb-6 text-xs font-medium leading-loose text-center text-gray-900 dark:text-white rounded-[5px]">
                      {{newB.publishTime}}
                    </span>
                  </div>

                  
                  <h3>
                    <NuxtLink :to="`/blog/${newB.slug}`">
                      <a href="javascript:void(0);"
                        class="inline-block mb-4 text-xl font-semibold text-dark text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                        {{newB.title}}
                      </a>
                    </NuxtLink>
                  </h3>
                  <p class="max-w-[370px] text-base text-gray-900 dark:text-white">
                    {{newB.desc}}
                  </p>
                </div>
              </div>
            </div>
              
            
            </div>

          
          </div>
        </section>
    </div>
  

  <BackToTopBtn/>

  <MadeWithBtn/>
</template>

<style>

</style>