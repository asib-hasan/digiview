<template>
  <div>
    <PageHero
      title="Our Projects"
      subtitle="A track record of successful ITS project delivery for government agencies and private sector clients across Bangladesh."
      label="Projects Portfolio"
    />

    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filter tabs -->
        <div class="flex flex-wrap gap-3 mb-10 justify-center">
          <button
            v-for="cat in categories"
            :key="cat.key"
            :class="[
              'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200',
              activeCategory === cat.key
                ? 'bg-primary-900 text-white shadow-lg border-primary-900'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-accent-500 hover:text-primary-900',
            ]"
            @click="activeCategory = cat.key"
          >
            {{ cat.label }}
            <span :class="['ml-1.5 text-xs', activeCategory === cat.key ? 'text-white/70' : 'text-slate-400']">
              ({{ cat.key === 'all' ? projects.length : projects.filter(p => p.category === cat.key).length }})
            </span>
          </button>
        </div>

        <!-- Projects grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="project in filteredProjects"
            :key="project.slug"
            :to="`/projects/${project.slug}`"
            class="group bg-white border border-slate-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden"
          >
            <!-- Top industrial accent line -->
            <div :class="['absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r z-10', project.color]"></div>
            
            <div class="h-48 w-full bg-slate-100 relative overflow-hidden">
              <img :src="project.image || '/slider/hero_toll_collection.png'" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
            </div>
            
            <div class="p-6 flex-1 flex flex-col">
              <div class="mb-4">
                <span :class="['text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-slate-100 text-slate-800']">
                  {{ categoryLabel(project.category) }}
                </span>
              </div>
              
              <h3 class="text-lg font-black text-slate-900 mb-3 group-hover:text-primary-600 transition-colors uppercase tracking-wide leading-snug">{{ project.title }}</h3>
              <p class="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">{{ project.shortDesc }}</p>
              
              <div class="pt-5 border-t border-slate-100 flex flex-col gap-2">
                <div class="flex items-start justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <span>Client:</span>
                  <span class="text-slate-900 text-right max-w-[60%] leading-tight">{{ project.client }}</span>
                </div>
                <div class="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <span>Year:</span>
                  <span class="text-slate-900">{{ project.year }}</span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Empty state -->
        <div v-if="filteredProjects.length === 0" class="text-center py-16 text-slate-400">
          No projects found in this category.
        </div>
      </div>
    </section>


  </div>
</template>

<script setup lang="ts">
import { projects, projectCategories } from '~/data/projects'

useSeoMeta({
  title: 'Projects — ATT | ITS Project Portfolio Bangladesh',
  description: 'Explore ATT\'s portfolio of completed and ongoing ITS projects across Bangladesh — toll systems, traffic monitoring, access control, and more.',
})

const route = useRoute()
const activeCategory = ref((route.query.cat as string) || 'all')

const categories = projectCategories

const filteredProjects = computed(() =>
  activeCategory.value === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory.value)
)

function categoryLabel(cat: string) {
  return projectCategories.find(c => c.key === cat)?.label ?? cat
}

function categoryBadge(cat: string) {
  const map: Record<string, string> = {
    completed: 'bg-green-50 text-green-700',
    ongoing: 'bg-blue-50 text-blue-700',
    fisheries: 'bg-cyan-50 text-cyan-700',
  }
  return map[cat] ?? 'bg-slate-100 text-slate-600'
}
</script>
