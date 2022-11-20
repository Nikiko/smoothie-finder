<template>
  <Menu as="div" class="relative inline-block text-left bg-primary text-primary-content ml-2 rounded-full">
    <div class="h-10 flex items-center">
      <MenuButton
        class="
          inline-flex 
          items-center 
          w-full 
          justify-center 
          rounded-lg
          px-4 
          py-2 
          text-sm 
          font-medium 
          focus:outline-none 
          focus-visible:ring-2
        ">
        <svg width="20" 
          height="20" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          class="
            inline-block 
            h-5 
            w-5 
            mr-2 
            stroke-primary-content 
            md:h-6 
            md:w-6
        ">
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 
              4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 
              2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01
            ">
          </path>
        </svg>
        Colors
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="
        absolute 
        right-0 
        mt-2 
        w-56 
        origin-top-right 
        rounded-[18px]
        bg-white 
        shadow-lg 
        focus:outline-none 
        bg-base-100
        text-base-content
      ">
        <div class="px-1 py-1">

          <MenuItem 
            v-for="color in colors" 
            :key="color"
            class="rounded-[16px]"
          >
            <div :class="['group flex w-full items-center rounded-md px-2 py-2 text-sm']">
              <div @click="$colorMode.preference = color" 
                :class="[
                $colorMode.preference === color ? 'bg-base-200' : '', 
                'w-full overflow-hidden rounded-lg hover:bg-base-200']" 
              >
                <div class=" w-full cursor-pointer font-sans">
                  <div class="grid grid-cols-5 grid-rows-3">
                    <div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div class="flex-grow text-sm text-left">{{ color }}</div>
                      <div :class="[color, 'flex items-center flex-shrink-0 flex-wrap gap-1']">
                        <div class="bg-base-100 w-4 h-4 rounded-full"></div>
                        <div class="bg-primary w-4 h-4 rounded-full"></div>
                        <div class="bg-secondary w-4 h-4 rounded-full"></div>
                        <div class="bg-accent w-4 h-4 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MenuItem>

        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
  const colorMode = useColorMode()
</script>

<script>
  export default defineComponent({
    data() {
      return {
        // todo: add mor colors e.g. grey-scale, contrast or vibrant
        colors: [
          'light',
          'dark'
        ]
      }
    }
  })
</script>