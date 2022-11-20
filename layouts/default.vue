<template>
  <div class="bg-base-200 min-h-screen overflow-hidden text-base-content relative">
    <!-- Head -->
    <AppHeader></AppHeader>
    <AppNavigation></AppNavigation>
    <!-- Head -->

    <!-- Content -->
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
      <slot />
    </div>
    <!-- End Content -->
  </div>
</template>

<script setup>
  const title = 'Smoothie finder'
  useHead({
    title
  })
</script>