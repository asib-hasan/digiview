<template>
  <div>
    <PageHero
      title="Our Solutions"
      subtitle="Intelligent Transportation Systems tailored for Bangladesh's roads, bridges, ports and infrastructure — from concept through to long-term maintenance."
      label="ITS Solutions"
    />

    <section class="bg-white">
      <AlternatingGrid 
        title="Our Solutions" 
        highlight="Explore" 
        description="We offer end-to-end ITS solutions, from toll management to ship building and weighing infrastructure."
        :items="formattedSolutions" 
      />
    </section>


  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { solutions } from '~/data/solutions'

useSeoMeta({
  title: 'Solutions — ATT | Intelligent Transportation Systems Bangladesh',
  description: 'Explore ATT\'s complete range of ITS solutions: toll collection, security, traffic monitoring, bridge safety, HTMS, customized software and more.',
})

const formattedSolutions = computed(() => {
  return solutions.map((s, index) => {
    // Provide a default image based on index if none exists
    const defaultImages = [
      '/slider/hero_traffic_system.png',
      '/slider/hero_toll_collection.png',
      '/slider/hero_access_security.png',
    ]
    const imgUrl = s.image || defaultImages[index % defaultImages.length]

    return {
      id: s.slug,
      title: s.title,
      description: s.description || s.shortDesc,
      image: imgUrl,
      features: s.features || (s as any).achievements || [],
    }
  })
})
</script>
