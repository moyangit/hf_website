<script setup lang="ts">
useHead({
  title: 'Blog Grids | Play Tailwind',
  meta: [
    { name: 'description', content: '' }
  ],
})

const localePath = useLocalePath()

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
  <!-- ====== Banner Section Start -->
  <div class="p-5 md:pl-20 md:pr-20 relative z-10 overflow-hidden bg-white/80 dark:bg-gray-900/90">
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
  <!-- ====== Banner Section End -->

  <!--<div v-for="blog in blogs.data" :key="blog.id">
      <h2>{{ blog.name }}</h2>
      <div v-html="renderMarkdown(blog.content)" class="prose max-w-none"></div>
    </div>-->

    <section
      id="catetry"
      class="p-5 md:p-20 relative z-20 overflow-hidden bg-white dark:bg-dark lg:pb-[10px] lg:pt-[10px] bg-gray-100/50 dark:bg-gray-900/95"
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
            ">
              技术
            </a>
            
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
            ">
              生活
            </a>
            
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
            ">
              旅行
            </a>
            
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
            ">
              美食
            </a>
            
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
            ">
              设计
            </a>
          </div>
        </div>
    </section>



<!-- ====== About Section Start -->
    <section
      id="hot"
      class="p-5 md:px-20 md:py-5 dark:bg-dark bg-gray-100/50 dark:bg-gray-900/95"
    >
      <div class="mx-auto w-auto p-4">
        <div class="wow fadeInUp" data-wow-delay=".2s">
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="w-full px-4 lg:w-1/2">
              <div
                    class="mb-4 sm:mb-8 sm:h-[200px] md:h-[340px] lg:h-[300px] xl:h-[400px] overflow-hidden rounded-[5px] "
                  >
                    <img
                      src="/images/blog/blog-01.jpg"
                      alt="about image"
                      class="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </div>
            </div>

            <div class="w-full px-4 lg:w-1/2">

              <div class="mb-12 max-w-[540px] lg:mb-0">
                <span
                  class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-white rounded-[5px] bg-gray-500">
                  网络安全
                </span>
                <span
                  class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-gray-900 dark:text-white rounded-[5px] bg-primary">
                  Dec 22, 2023
                </span>

                <h2
                  class="mb-5 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-[40px] sm:leading-[1.2]"
                >
                  About Us
                </h2>
                <p
                  class="mb-10 text-base leading-relaxed text-gray-900 dark:text-white"
                >
                  We Offer The Fastest & Simplest VPN.
                  <br />
                  <br />
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
                </p>

                <a
                  href="javascript:void(0)"
                  class="inline-flex items-center justify-center rounded-md border border-primary text-gray-900 dark:text-white px-7 py-3 text-center text-base font-medium hover:border-blue-dark hover:bg-blue-dark"
                >
                  Know More
                </a>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>

  
  <!-- ====== Blog Section Start -->
  <section class="p-5 md:px-20 pb-10 dark:bg-dark bg-gray-100/50 dark:bg-gray-900">
  
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
        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mb-10 wow fadeInUp group" data-wow-delay=".1s">
            <div class="mb-8 overflow-hidden rounded-[5px]">
              <a href="blog-details.html" class="block">
                <img src="/images/blog/blog-01.jpg" alt="image"
                  class="w-full transition group-hover:rotate-6 group-hover:scale-125" />
              </a>
            </div>
            <div>
              <div class="flex items-center justify-between">
                
                <span
                  class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-white rounded-[5px] bg-gray-500">
                  网络安全
                </span>

                <span
                  class="inline-block py-0.5 mb-6 text-xs font-medium leading-loose text-center text-gray-900 dark:text-white rounded-[5px]">
                  Dec 22, 2023
                </span>
              </div>

              
              <h3>
                <a href="blog-details.html"
                  class="inline-block mb-4 text-xl font-semibold text-dark text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                  Meet AutoManage, the best AI management tools
                </a>
              </h3>
              <p class="max-w-[370px] text-base text-gray-900 dark:text-white">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mb-10 wow fadeInUp group" data-wow-delay=".15s">
            <div class="mb-8 overflow-hidden rounded-[5px]">
              <a href="blog-details.html" class="block">
                <img src="/images/blog/blog-02.jpg" alt="image"
                  class="w-full transition group-hover:rotate-6 group-hover:scale-125" />
              </a>
            </div>
            <div>
              <span
                class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                Mar 15, 2023
              </span>
              <h3>
                <a href="blog-details.html"
                  class="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                  How to earn more money as a wellness coach
                </a>
              </h3>
              <p class="max-w-[370px] text-base text-gray-900 dark:text-white">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mb-10 wow fadeInUp group" data-wow-delay=".2s">
            <div class="mb-8 overflow-hidden rounded-[5px]">
              <a href="blog-details.html" class="block">
                <img src="/images/blog/blog-03.jpg" alt="image"
                  class="w-full transition group-hover:rotate-6 group-hover:scale-125" />
              </a>
            </div>
            <div>
              <span
                class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-gray-900 dark:text-white rounded-[5px] bg-primary">
                Jan 05, 2023
              </span>
              <h3>
                <a href="blog-details.html"
                  class="inline-block mb-4 text-xl font-semibold text-dark text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                  The no-fuss guide to upselling and cross selling
                </a>
              </h3>
              <p class="max-w-[370px] text-base text-gray-900 dark:text-white">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
        
      
      </div>

    
    </div>
  </section>
  <!-- ====== Blog Section End -->



  <section class="p-5 md:px-20 pb-10 dark:bg-dark bg-gray-100/50 dark:bg-gray-900">
  
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
        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mb-10 wow fadeInUp group" data-wow-delay=".1s">
            <div class="mb-8 overflow-hidden rounded-[5px]">
              <a href="blog-details.html" class="block">
                <img src="/images/blog/blog-01.jpg" alt="image"
                  class="w-full transition group-hover:rotate-6 group-hover:scale-125" />
              </a>
            </div>
            <div>
              <span
                class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-gray-900 dark:text-white rounded-[5px] bg-primary">
                Dec 22, 2023
              </span>
              <h3>
                <a href="blog-details.html"
                  class="inline-block mb-4 text-xl font-semibold text-dark text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                  Meet AutoManage, the best AI management tools
                </a>
              </h3>
              <p class="max-w-[370px] text-base text-gray-900 dark:text-white">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mb-10 wow fadeInUp group" data-wow-delay=".15s">
            <div class="mb-8 overflow-hidden rounded-[5px]">
              <a href="blog-details.html" class="block">
                <img src="/images/blog/blog-02.jpg" alt="image"
                  class="w-full transition group-hover:rotate-6 group-hover:scale-125" />
              </a>
            </div>
            <div>
              <span
                class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                Mar 15, 2023
              </span>
              <h3>
                <a href="blog-details.html"
                  class="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                  How to earn more money as a wellness coach
                </a>
              </h3>
              <p class="max-w-[370px] text-base text-gray-900 dark:text-white">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mb-10 wow fadeInUp group" data-wow-delay=".2s">
            <div class="mb-8 overflow-hidden rounded-[5px]">
              <a href="blog-details.html" class="block">
                <img src="/images/blog/blog-03.jpg" alt="image"
                  class="w-full transition group-hover:rotate-6 group-hover:scale-125" />
              </a>
            </div>
            <div>
              <span
                class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-gray-900 dark:text-white rounded-[5px] bg-primary">
                Jan 05, 2023
              </span>
              <h3>
                <a href="blog-details.html"
                  class="inline-block mb-4 text-xl font-semibold text-dark text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                  The no-fuss guide to upselling and cross selling
                </a>
              </h3>
              <p class="max-w-[370px] text-base text-gray-900 dark:text-white">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
        
      
      </div>

    
    </div>
  </section>

  <BackToTopBtn/>

  <MadeWithBtn/>
</template>

<style>

</style>