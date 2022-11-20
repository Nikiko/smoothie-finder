<template>
  <!-- Note -->
  <div class="flex justify-center bg-base-300 p-4 rounded-xl text-base-content mb-6">
    This is currently work in progress
  </div>
  <!-- End Note -->

  <!-- Smoothies List -->
  <!-- todo: use a carousel for display smoothies on start page -->
  <section class="mb-32 text-center">
    <div class="flex flex-row flex-wrap">
      <SmoothiesList :limit="8"></SmoothiesList>
    </div>
  </section>
  <!-- End Smoothies List -->
</template>