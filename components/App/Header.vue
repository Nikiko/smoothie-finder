<template>
  <header class="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full text-sm py-2.5 sm:py-4 lg:pl-64 sm bg-base-100 lg:bg-base-200">
    <div class="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8">

      <!-- Logo -->
      <div class="mr-5 lg:mr-0 lg:hidden">
        <NuxtLink to="/" class="flex items-center text-l font-semibold">
          <img class="w-8 mr-2 relative top-[-4px]" src="/src/img/logo.svg" alt="Smoothie App logo" />
          <span class="mr-8"><span class="text-secondary">Smoothie</span> <span class="text-primary">finder</span></span>
        </NuxtLink>
      </div>
      <!-- End Logo -->

      <!-- Search Icon  -->
      <div class="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
        <div class="sm:hidden">
          <button type="button" class="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium align-middle focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 bg-primary text-primary-content transition-all text-xs">
            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <!-- End Search Icon  -->

        <!-- Search bar  -->
        <!-- todo: implement current site search for recipes, ingridients ans nutritions -->
        <div class="hidden sm:block">
          <label for="icon" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <input type="text" id="icon" name="icon" class="py-2 h-10 px-4 pl-11 block w-full rounded-full text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-base-200 lg:bg-base-100" placeholder="Search">
          </div>
        </div>
        <!-- End Search bar  -->

        <div class="flex flex-row items-center justify-end gap-2">
          <ThemeSwitcher></ThemeSwitcher>
        </div>

      </div>
    </div>
  </header>
</template>
