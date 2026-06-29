<template>
  <div v-if="project">
    <PageHero
      :title="project.title"
      :subtitle="project.shortDesc"
      :label="categoryLabel"
      parent="Projects"
      parent-to="/projects"
    />

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Main -->
          <div class="lg:col-span-2">
            <!-- Meta bar -->
            <div class="flex flex-wrap items-center gap-4 mb-8 p-5 bg-slate-50 rounded-2xl">
              <div class="flex items-center gap-2 text-sm">
                <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>
                <span class="text-slate-500">Client:</span>
                <span class="font-semibold text-slate-800">{{ project.client }}</span>
              </div>
              <div class="w-px h-4 bg-slate-200 hidden sm:block"></div>
              <div class="flex items-center gap-2 text-sm">
                <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>
                <span class="text-slate-500">Year:</span>
                <span class="font-semibold text-slate-800">{{ project.year }}</span>
              </div>
              <div class="w-px h-4 bg-slate-200 hidden sm:block"></div>
              <span :class="['text-xs font-semibold px-3 py-1.5 rounded-full', categoryBadge]">
                {{ categoryLabel }}
              </span>
            </div>

            <!-- Title section -->
            <div class="mb-8 border-l-4 border-slate-800 pl-6">
              <div class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">ATT Project Showcase</div>
              <h2 class="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-wide leading-tight">{{ project.title }}</h2>
            </div>
            
            <!-- Project Main Image -->
            <div class="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 border border-slate-200">
              <img :src="project.image || '/slider/hero_toll_collection.png'" :alt="project.title" class="w-full h-full object-cover" />
            </div>

            <p class="text-slate-600 leading-relaxed text-lg mb-10">{{ project.description }}</p>

            <!-- Achievements -->
            <div class="bg-slate-50 border-t border-slate-200 p-8">
              <h3 class="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
                Project Highlights & Scope
              </h3>
              <div class="grid sm:grid-cols-2 gap-3">
                <div v-for="achievement in project.achievements" :key="achievement" class="flex items-start gap-3 bg-white p-4 border-l-2 border-primary-500 shadow-sm">
                  <span class="text-sm text-slate-700 font-medium">{{ achievement }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <div class="bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl p-8 text-white">
              <h3 class="font-bold text-xl mb-3">Similar Project?</h3>
              <p class="text-white/60 text-sm mb-6 leading-relaxed">Talk to us about your requirements. We have the expertise to deliver.</p>
              <NuxtLink to="/contact" class="block text-center px-5 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-all hover:scale-105 text-sm mb-3">
                Start a Conversation
              </NuxtLink>
            </div>

            <!-- Other projects -->
            <div class="bg-slate-50 rounded-2xl p-6">
              <h4 class="font-bold text-slate-900 mb-4 text-sm">Other Projects</h4>
              <div class="space-y-3">
                <NuxtLink
                  v-for="p in otherProjects.slice(0, 5)"
                  :key="p.slug"
                  :to="`/projects/${p.slug}`"
                  class="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group"
                >
                  <svg class="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
                  <div>
                    <div class="text-sm text-slate-700 group-hover:text-blue-700 font-medium leading-snug">{{ p.title }}</div>
                    <div class="text-xs text-slate-400 mt-0.5">{{ p.year }}</div>
                  </div>
                </NuxtLink>
              </div>
              <NuxtLink to="/projects" class="flex items-center gap-1 mt-4 text-xs font-semibold text-blue-600 hover:underline">
                View all projects
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center text-center px-4">
    <div>
      <div class="text-6xl font-black text-slate-200 mb-4">404</div>
      <h1 class="text-2xl font-bold text-slate-800 mb-3">Project Not Found</h1>
      <NuxtLink to="/projects" class="px-6 py-3 bg-primary-700 text-white font-semibold rounded-xl">Back to Projects</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects, projectCategories } from '~/data/projects'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const project = computed(() => projects.find(p => p.slug === slug.value))
const otherProjects = computed(() => projects.filter(p => p.slug !== slug.value))

const categoryLabel = computed(() =>
  projectCategories.find(c => c.key === project.value?.category)?.label ?? 'Project'
)

const categoryBadge = computed(() => {
  const map: Record<string, string> = {
    completed: 'bg-green-50 text-green-700',
    ongoing: 'bg-blue-50 text-blue-700',
    fisheries: 'bg-cyan-50 text-cyan-700',
  }
  return map[project.value?.category ?? ''] ?? 'bg-slate-100 text-slate-600'
})

useSeoMeta({
  title: computed(() => project.value ? `${project.value.title} — ATT Projects` : 'Project Not Found'),
  description: computed(() => project.value?.shortDesc ?? ''),
})
</script>
