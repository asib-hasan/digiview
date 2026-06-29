<template>
  <div v-if="service">
    <PageHero
      :title="service.title"
      :subtitle="service.shortDesc"
      label="Services"
      parent="Services"
      parent-to="/services"
    />

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Back to List -->
        <NuxtLink to="/services" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/></svg>
          Back to List
        </NuxtLink>

        <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <!-- Image Column (Left Side) -->
          <div v-if="service.image" class="lg:col-span-5 lg:sticky lg:top-24 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
            <img :src="service.image" :alt="service.title" class="w-full h-full object-cover" />
          </div>

          <!-- Content Column (Right Side) -->
          <div :class="service.image ? 'lg:col-span-7' : 'lg:col-span-12 max-w-4xl'">
            <!-- Icon + label -->
            <div class="flex items-center gap-4 mb-8">
              <div v-if="!service.image" :class="['w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg flex-shrink-0', service.color || 'from-slate-700 to-slate-900']">
                <component :is="iconComponent" :size="32" />
              </div>
              <div>
                <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider">ATT Service</div>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900">{{ service.title }}</h2>
              </div>
            </div>

            <!-- Dynamic Content (from Summernote) -->
            <div v-if="service.content" class="prose prose-slate max-w-none prose-lg mb-10" v-html="service.content"></div>

            <!-- Fallback for current static data -->
            <template v-else>
              <p class="text-slate-600 leading-relaxed text-lg mb-10">{{ service.description }}</p>

              <!-- Highlights -->
              <div class="bg-slate-50 rounded-2xl p-8 mb-10">
                <h3 class="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>
                  Service Highlights
                </h3>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div v-for="h in service.highlights" :key="h" class="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100">
                    <svg class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                    <span class="text-sm text-slate-700 font-medium">{{ h }}</span>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center text-center px-4">
    <div>
      <div class="text-6xl font-black text-slate-200 mb-4">404</div>
      <h1 class="text-2xl font-bold text-slate-800 mb-3">Service Not Found</h1>
      <NuxtLink to="/services" class="px-6 py-3 bg-primary-700 text-white font-semibold rounded-xl">Back to Services</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as icons from '@lucide/vue'
import { services } from '~/data/services'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const service = computed(() => services.find(s => s.slug === slug.value))
const otherServices = computed(() => services.filter(s => s.slug !== slug.value))
const iconComponent = computed(() => (icons as any)[service.value?.icon ?? 'Wrench'] || icons.Wrench)

useSeoMeta({
  title: computed(() => service.value ? `${service.value.title} — ATT Services` : 'Service Not Found'),
  description: computed(() => service.value?.shortDesc ?? ''),
})
</script>
