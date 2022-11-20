<style>
  .circular-chart text {
    text-anchor: middle;
  }
  .circle {
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
  }
  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }
</style>

<template>
  <svg viewBox="0 0 36 36" class="circular-chart block max-w-full max-h-[250px]">
    <path class="fill-none stroke-base-200 stroke-2"
      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <path :class="[percent >= 50 ? 'stroke-bad' : percent >= 20 ? 'stroke-middle' : 'stroke-good', 'circle fill-none stroke-[2.4]']"
      :stroke-dasharray="percent + ', 100'"
      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <text v-if="text" x="18" y="15.35" class="text-[0.38em] font-bold fill-base-content/30">{{ text }}</text>
    <text x="18" y="25.55" :class="[percent >= 50 ? 'fill-bad' : percent >= 20 ? 'fill-middle' : 'fill-good', 'text-[10px] font-bold']">{{ value }}</text>
  </svg>
</template>

<script>
  export default {
    props: {
      percent: {
        required: true,
      },
      value: {
        required: true,
      },
      text: {
        required: false,
      }
    },
    computed: {
      applyColor() {
        // todo -> custom ranges e.g. reverse for proteins!
        if (this.percent >= 50) {
          return 'bad'
        } else if (this.percent >= 20) {
          return 'middle'
        }
        return 'good'
      }
    },
  }
</script>
