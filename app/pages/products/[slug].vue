<template>
  <div v-if="product">
    <PageHero
      :title="product.title"
      :subtitle="product.shortDesc"
      label="Products"
      parent="Products"
      parent-to="/products"
    />

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Back to List -->
        <NuxtLink to="/products" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/></svg>
          Back to List
        </NuxtLink>

        <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <!-- Image Column (Left Side) -->
          <div class="lg:col-span-5 lg:sticky lg:top-24 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
            <img :src="product.image || '/product.png'" :alt="product.title" class="w-full h-full object-cover" />
          </div>

          <!-- Content Column (Right Side) -->
          <div class="lg:col-span-7">
            <!-- Title section -->
            <div class="mb-8 border-l-4 border-slate-800 pl-6">
              <div class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">ATT Product</div>
              <h2 class="text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase tracking-wide">{{ product.title }}</h2>
            </div>

            <!-- Dynamic Content (from Summernote) -->
            <div v-if="product.content" class="prose prose-slate max-w-none prose-lg mb-10" v-html="product.content"></div>

            <!-- Fallback for current static data -->
            <template v-else>
              <p class="text-slate-600 leading-relaxed text-lg mb-10">{{ product.description }}</p>

              <!-- Specs -->
              <div class="bg-slate-50 border-t border-slate-200 p-8 mb-8">
                <h3 class="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
                  Technical Specifications
                </h3>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div v-for="spec in product.specs" :key="spec" class="flex items-start gap-3 bg-white p-4 border-l-2 border-primary-500 shadow-sm">
                    <span class="text-sm text-slate-700 font-medium">{{ spec }}</span>
                  </div>
                </div>
              </div>

              <!-- Applications -->
              <div class="bg-primary-50 border-t border-primary-200 p-8">
                <h3 class="text-sm font-black text-slate-900 uppercase tracking-widest mb-5">
                  Typical Applications
                </h3>
                <div class="flex flex-wrap gap-3">
                  <span v-for="app in product.applications" :key="app" class="px-4 py-2 bg-white text-primary-800 text-sm font-bold uppercase tracking-wider rounded-none border border-primary-100 shadow-sm">
                    {{ app }}
                  </span>
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
      <h1 class="text-2xl font-bold text-slate-800 mb-3">Product Not Found</h1>
      <NuxtLink to="/products" class="px-6 py-3 bg-primary-700 text-white font-semibold rounded-xl">Back to Products</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as icons from '@lucide/vue'
import { products } from '~/data/products'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const product = computed(() => products.find(p => p.slug === slug.value))
const otherProducts = computed(() => products.filter(p => p.slug !== slug.value))
const iconComponent = computed(() => (icons as any)[product.value?.icon ?? 'Activity'] || icons.Activity)

useSeoMeta({
  title: computed(() => product.value ? `${product.value.title} — ATT Products` : 'Product Not Found'),
  description: computed(() => product.value?.shortDesc ?? ''),
})
</script>
