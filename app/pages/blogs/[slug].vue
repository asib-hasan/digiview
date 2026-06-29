<template>
  <div v-if="blog" class="bg-white min-h-screen pb-20">
    <!-- Hero Background Header -->
    <div class="relative w-full max-w-[1920px] mx-auto h-[400px] flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img v-if="blog.image" :src="blog.image" :alt="blog.title" class="w-full h-full object-cover" />
        <div v-else class="w-full h-full bg-gradient-to-br from-primary-900 to-primary-800"></div>
        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-black/60"></div>
      </div>

      <!-- Top Left Back Button -->
      <div class="absolute top-6 left-4 sm:left-6 lg:left-8 z-20">
        <NuxtLink to="/blogs" class="inline-flex items-center text-sm font-semibold text-white/80 hover:text-white transition-colors group">
          <svg class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to all blogs
        </NuxtLink>
      </div>

      <!-- Header Content -->
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
        <div class="mb-4">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-primary-400/30 shadow-lg">
            {{ blog.category }}
          </span>
        </div>
        
        <h1 class="text-3xl md:text-5xl lg:text-5xl font-black text-white mb-4 leading-tight drop-shadow-md">
          {{ blog.title }}
        </h1>
        
        <div class="flex items-center justify-center gap-6 text-sm text-white/80 font-medium">

          <span class="flex items-center gap-2">
            <svg class="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            {{ blog.date }}
          </span>
        </div>
      </div>
    </div>

    <!-- Blog Content -->
    <article class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div class="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-primary-600 hover:prose-a:text-primary-700 mx-auto" v-html="blog.content"></div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { blogs } from '~/data/blogs'

const route = useRoute()
const blog = computed(() => blogs.find(b => b.slug === route.params.slug))

if (!blog.value) {
  throw createError({ statusCode: 404, statusMessage: 'Blog not found', fatal: true })
}

useSeoMeta({
  title: () => `${blog.value?.title} — ATT Blog`,
  description: () => blog.value?.excerpt,
})
</script>
