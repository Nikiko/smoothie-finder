<template>
  <ContentList path="/smoothies" :query="query" v-slot="{ list }">
    <template v-for="article in list" :key="article._path">
      <div class="flex flex-1 min-w-[18em] m-3 hover:scale-[1.03] transition-all duration-300">
        <div class="flex bg-base-100 flex-col rounded-xl shadow-lg grow">
          <div class="relative overflow-hidden bg-no-repeat bg-cover">
            <img :src="article.img" class="w-full object-cover aspect-square rounded-t-xl" />
            <NuxtLink :to="article._path">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
            </NuxtLink>
            <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
              style="left: 0; bottom: 0">
              <path 
                class="fill-base-100"
                :d="randomItem(svg_paths)">
              </path>
            </svg>
          </div>
          <div class="p-6 bg-base-100 rounded-b-xl grow">
            <NuxtLink :to="article._path">
              <h5 class="text-[1.5em] font-bold mb-4 hover:text-primary transition-all duration-300">{{ article.title }}</h5>
            </NuxtLink>
            <ul class="mb-3">
              <li v-for="category in article.categories" class="inline-block bg-base-300 px-2 py-1 rounded mx-1 text-[0.9em]">
                {{ category }}
              </li>
            </ul>
            <ul class="mb-2">
              <li v-for="ingridients in article.ingridients" class="inline-block not-last-after:content-[',\00a0'] text-base-content/50">
                {{ ingridients }}
              </li>
            </ul>
          </div>
          <div class="flex p-6 pt-0">
              <CircularChart class="mr-2" :value="article.nutritions.calories.value" :percent="article.nutritions.calories.percent" text="CAL"></CircularChart>
              <CircularChart class="mx-2" :value="article.nutritions.carbohydrates.value" :percent="article.nutritions.carbohydrates.percent" text="CHO"></CircularChart>
              <CircularChart class="mx-2" :value="article.nutritions.fat.value" :percent="article.nutritions.fat.percent" text="FAT"></CircularChart>
              <CircularChart class="ml-2" :value="article.nutritions.proteins.value" :percent="article.nutritions.proteins.percent" text="PRT"></CircularChart>
            </div>
        </div>
      </div>
    </template>
    <!-- flexbox hack for adjusting last row -->
    <div v-for="n in 15" :key="n" class="flex flex-1 min-w-[18em] m-3 invisible h-0"></div>
  </ContentList>
</template>

<script>
  export default defineComponent({
    props: ['query'],
    data() {
      return {
        svg_paths: [
          'M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
          'M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
          'M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ]
      }
    },
    methods: {
      randomItem (items) {
        return items[Math.floor(Math.random()*items.length)];
      }
    },
  })
</script>