<style>
  .open .navigation {
    display: block;
    transform: translateX(0);
  }
</style>

<template>
  <!-- Mobile Nav Bar -->
  <div :class="{open: open}">
    <div class="sticky top-[59px] inset-x-0 z-20 px-4 sm:px-6 sm:top-[71px] md:px-8 lg:hidden bg-base-100 border-t border-base-200">
      <div class="flex items-center py-4">

        <!-- Navigation Toggle -->
        <button type="button" class="text-base-content" @click.stop="toggleNavi">
          <span class="sr-only">Toggle Navigation</span>
          <svg class="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <!-- End Navigation Toggle -->

        <!-- Breadcrumb -->
        <ol class="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
          <li class="flex items-center text-sm text-base-content">
            <NuxtLink to="/" class="">Start</NuxtLink>
            <svg v-if="route.name !== 'index'" class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-base-content" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </li>
          <li v-if="route.name !== 'index'" class="text-sm font-semibold truncate text-base-content">
            {{ route.name }}
          </li>
        </ol>
        <!-- End Breadcrumb -->
      </div>
    </div>
    <!-- End Mobile Nav Bar -->

    <!-- Navigation -->
    <div :class="[{'hidden': !open}, 'absolute top-0 left-0 right-0 bottom-0 backdrop-blur-sm z-[48] bg-base-300/30 lg:hidden transition-all']">

    </div>
    <div 
      v-click-outside.stop="closeNavi"
      class="
      navigation
      bg-base-100 
      -translate-x-full 
      transition-all 
      duration-300 
      transform 
      fixed 
      top-0 
      left-0 
      bottom-0 
      z-[49]
      w-64 
      pt-7 
      pb-10 
      overflow-y-auto 
      scrollbar-y 
      lg:block 
      lg:translate-x-0 
      lg:right-auto 
      lg:bottom-0
      " 
    >
    
      <!-- Logo -->
    <div class="px-6">
      <NuxtLink to="/" class="flex items-center text-xl font-semibold" @click="toggleNavi">
        <img class="w-8 mr-2 relative top-[-4px]" src="/src/img/logo.svg" alt="Smoothie App logo" />
        <span class="mr-4 leading-[1.1em]"><span class="text-secondary">Smoothie</span> <span class="text-primary">finder</span></span>
      </NuxtLink>
    </div>
    <!-- End Logo -->
    
      <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
        <ul class="space-y-1.5">

          <li>
            <NuxtLink to="/" class="flex items-center gap-x-3.5 py-2 px-2.5 text-lg rounded-md hover:bg-base-200" @click="toggleNavi">
              <Icon name="fluent:home-20-regular" class="w-7 h-7" />
              Start
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/recipes" class="flex items-center gap-x-3.5 py-2 px-2.5 text-lg rounded-md hover:bg-base-200" @click="toggleNavi">
              <Icon name="fluent:drink-to-go-20-regular" class="w-7 h-7" />
              Recipes
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/ingridients" class="flex items-center gap-x-3.5 py-2 px-2.5 text-lg rounded-md hover:bg-base-200" @click="toggleNavi">            
              <Icon name="fluent:food-apple-20-regular" class="w-7 h-7" />
              Ingridients
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/nutritions" class="flex items-center gap-x-3.5 py-2 px-2.5 text-lg rounded-md hover:bg-base-200" @click="toggleNavi">
              <Icon name="fluent:branch-20-regular" class="w-7 h-7" />
              Nutritions
            </NuxtLink>
          </li>

        </ul>
      </nav>
    </div>
  </div>
  <!-- End Navigation -->
</template>

<script setup>
  const route = useRoute()
</script>

<script>
  export default defineComponent({
    data() {
      return {
        open: false
      }
    },
    methods: {
      toggleNavi() {
        this.open = !this.open;
      },
      closeNavi() {
        this.open = false;
      }
    },
  })
</script>