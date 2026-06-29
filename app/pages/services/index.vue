<template>
  <div>
    <PageHero
      title="Our Services"
      subtitle="Professional installation, maintenance, consultancy, and shipping services — delivering complete lifecycle support for your infrastructure investments."
      label="Services"
    />

    <section class="bg-white">
      <AlternatingGrid 
        title="Our Capabilities" 
        highlight="Explore" 
        description="We offer end-to-end solutions, from installation and maintenance to civil construction and marine logistics."
        :items="formattedServices" 
      />
    </section>


  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { services } from '~/data/services'

useSeoMeta({
  title: 'Services — ATT | Installation, Maintenance & Consultancy',
  description: 'ATT provides professional ITS installation, preventive maintenance, expert consultancy, and marine shipping services across Bangladesh.',
})

const formattedServices = computed(() => {
  return services.map((s, index) => {
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
      features: s.highlights || [],
    }
  })
})
</script>
