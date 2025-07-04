<template>
  <header class="bg-white/80 dark:bg-gray-900/90 shadow-sm sticky top-0 z-50 pl-20 pr-20 backdrop-blur-sm">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-none lg:w-[220px]">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden items-center space-x-1 ml-10">
        <div class="relative" >
          <button 
            @click.stop="toggleLanguageDropdown"
            class="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <GlobeAltIcon class="h-5 w-5" />
            <span class="ml-1 text-sm">{{ selectedLocale && selectedLocale.toUpperCase() }}</span>
            <ChevronDownIcon class="ml-1 h-4 w-4" />
          </button>

          <!-- 语言下拉菜单 -->
          <div 
            v-show="languageDropdownOpen"
            class="dropdown-menu absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700"
          >
            <a 
              v-for="locale in languages"
              :key="locale.code"
              href="#"
              @click.prevent="changeLanguage(locale)"
              class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {{ locale.name }}
            </a>
          </div>
        </div>
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12 text-gray-700 dark:text-gray-300">

        <nuxt-link :to="localePath('index')" class="text-sm/6 font-semibold ">{{ $t('home') }}</nuxt-link>
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            {{ $t('Product') }}
            <ChevronDownIcon class="size-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" class="size-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div class="flex-auto">
                    <a :href="item.href" class="block font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <!-- <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                  <component :is="item.icon" class="size-5 flex-none text-gray-400" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </div> -->
            </PopoverPanel>
          </transition>
        </Popover>
        <nuxt-link :to="localePath('price')" class="text-sm/6 font-semibold ">{{ $t('price') }}</nuxt-link>
        <nuxt-link :to="localePath('blogs')" class="text-sm/6 font-semibold">{{ $t('blogs') }}</nuxt-link>
        <nuxt-link :to="localePath('faqs')" class="text-sm/6 font-semibold">{{ $t('FAQS') }}</nuxt-link>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">

        <!-- 暗黑模式切换按钮 -->
        <button 
          @click="toggleDarkMode"
          class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle dark mode"
        >
          <MoonIcon v-if="isDarkMode" class="h-5 w-5" />
          <SunIcon v-else class="h-5 w-5" />
        </button>

        
        <div class="relative" ref="dropdownRef">
          <button 
            @click.stop="toggleLanguageDropdown"
            class="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <GlobeAltIcon class="h-5 w-5" />
            <span class="ml-1 text-sm">{{ selectedLocale.toUpperCase() }}</span>
            <ChevronDownIcon class="ml-1 h-4 w-4" />
          </button>

          <!-- 语言下拉菜单 -->
          <div 
            v-show="languageDropdownOpen"
            class="dropdown-menu absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700"
          >
            <a 
              v-for="locale in languages"
              :key="locale.code"
              href="#"
              @click.prevent="changeLanguage(locale)"
              class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {{ locale.name }}
            </a>
          </div>
        </div>

        <a 
          class="px-4 py-2 text-sm font-medium bg-yellow-600 rounded  text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          登录
        </a>
        <!-- <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> -->
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
          
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6 text-gray-700 dark:text-gray-300">
              <!-- <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Services
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'size-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton v-for="item in [...products, ...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                </DisclosurePanel>
              </Disclosure> -->
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Features</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Marketplace</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Company</a>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  GlobeAltIcon, 
  MoonIcon,
  SunIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const mobileMenuOpen = ref(false)

// 暗黑模式状态
const isDarkMode = ref(false)

// 初始化时检查系统偏好或本地存储
onMounted(() => {
  const savedMode = localStorage.getItem('darkMode')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  isDarkMode.value = savedMode ? savedMode === 'true' : systemPrefersDark
  updateDarkModeClass()

  document.addEventListener('click', handleClickOutside)
})

// 切换暗黑模式
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value.toString())
  updateDarkModeClass()
}

// 更新HTML class
const updateDarkModeClass = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}


//多语言
// 多语言相关状态
// const currentLanguage = ref('zh')
// const languages = ['zh', 'en', 'ja']

const { locale, locales } = useI18n()
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath()

const selectedLocale = ref(locale.value)

// 同步 locale 状态
watch(locale, (newLocale) => {
  selectedLocale.value = newLocale
})

const languageDropdownOpen = ref(false)

const toggleLanguageDropdown = () => {
  languageDropdownOpen.value = !languageDropdownOpen.value
}

const closeLanguageDropdown = () => {
  languageDropdownOpen.value = false
}

const changeLanguage = async (lc) => {
  //currentLanguage.value = lang
  var code = lc.code
  locale.value = code
  const currentRouteName = route.name?.toString().split('___')[0]
  if (currentRouteName) {
    const newPath = localePath(currentRouteName)
    await router.push(newPath)
  } else {
    await router.push(`/${code}`)
  }
  closeLanguageDropdown()
}

// 获取可选语言
const languages = computed(() => locales.value)


//

const dropdownRef = ref(null)

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    languageDropdownOpen.value = false
  }
}

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>