<template>
  <section class="relative bg-slate-900 py-10 md:py-16 overflow-hidden flex flex-col items-center justify-center text-center">
    <!-- Background Image or Pattern -->
    <div v-if="bgImage" class="absolute inset-0 z-0 overflow-hidden">
      <img :src="bgImage" alt="Background" class="w-full h-full object-cover opacity-40 animate-bg-zoom" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/80"></div>
    </div>
    <div v-else class="absolute inset-0 z-0 bg-slate-900 overflow-hidden">
      <img src="/slider/1.webp" alt="ATTBD Background" class="w-full h-full object-cover opacity-50 mix-blend-luminosity animate-bg-zoom" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
    </div>

    <!-- Neuro Animation Background -->
    <NeuroAnimation />

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
        <NuxtLink to="/" class="flex items-center gap-1.5 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </NuxtLink>
        <span class="text-slate-600">›</span>
        <span v-if="parent" class="flex items-center gap-2">
          <NuxtLink :to="parentTo" class="hover:text-white transition-colors">{{ parent }}</NuxtLink>
          <span class="text-slate-600">›</span>
        </span>
        <span class="text-white">{{ title }}</span>
      </nav>

      <!-- Label -->
      <div v-if="label" class="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500/10 text-accent-400 text-xs font-semibold rounded-full border border-accent-500/20 mb-6">
        {{ label }}
      </div>

      <!-- Animated Title -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
        <span class="text-primary-500 drop-shadow-lg">{{ title.charAt(0) }}</span><span class="stroke-rest">{{ title.slice(1) }}</span>
      </h1>
      
      <p v-if="subtitle" class="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mt-2 opacity-0 animate-fade-in-up line-clamp-1 px-4">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import NeuroAnimation from './NeuroAnimation.vue'

defineProps<{
  title: string
  subtitle?: string
  label?: string
  parent?: string
  parentTo?: string
  bgImage?: string
}>()
</script>

<style scoped>
.stroke-rest {
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
  background-image: linear-gradient(90deg, #ffffff 0%, #ffffff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  animation: fillText 5s ease-in-out infinite;
  animation-delay: 0.5s;
}

@keyframes fillText {
  0%, 10% {
    background-size: 0% 100%;
    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
  }
  40%, 60% {
    background-size: 100% 100%;
    -webkit-text-stroke: 1.5px transparent;
  }
  90%, 100% {
    background-size: 0% 100%;
    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
  animation-delay: 1.5s;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-bg-zoom {
  animation: bgZoom 20s ease-in-out infinite alternate;
}

@keyframes bgZoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
