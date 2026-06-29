<template>
  <div class="bg-white min-h-screen text-slate-800">
    <DigiHeroSlider />
    <DigiCategories />
    <DigiFeatures />
    <DigiSolutions />
    <DigiProductGrid />
    <DigiMarquee />
    <DigiCTA />
  </div>
</template>

<script setup lang="ts">
import DigiHeroSlider from '~/components/home/DigiHeroSlider.vue'
import DigiFeatures from '~/components/home/DigiFeatures.vue'
import DigiCategories from '~/components/home/DigiCategories.vue'
import DigiSolutions from '~/components/home/DigiSolutions.vue'
import DigiProductGrid from '~/components/home/DigiProductGrid.vue'
import DigiMarquee from '~/components/home/DigiMarquee.vue'
import DigiCTA from '~/components/home/DigiCTA.vue'

useSeoMeta({
  title: 'Digiview — Advanced Broadcast Technologies',
  description: 'Digiview — Your trusted partner for professional broadcasting equipment, camera systems, and futuristic studio parts.',
})
</script>
