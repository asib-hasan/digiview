<template>
  <section class="py-24 bg-white border-t border-slate-200">
    <div class="container mx-auto px-4 md:px-8">
      
      <div class="flex flex-col md:flex-row items-end md:items-center justify-between mb-12 gap-6">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <div class="h-px w-8 bg-amber-600"></div>
            <span class="text-amber-600 font-bold text-xs uppercase tracking-widest">Hardware</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">FEATURED EQUIPMENT</h2>
        </div>
        <NuxtLink to="/products" class="group flex items-center gap-2 text-slate-500 hover:text-amber-600 font-bold uppercase tracking-widest text-xs transition-colors">
          View All Inventory
          <span class="w-8 h-8 rounded-full border border-slate-200 group-hover:border-amber-300 group-hover:bg-amber-50 flex items-center justify-center transition-all">
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </span>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(product, index) in products" 
          :key="index"
          class="group relative bg-white rounded-xl border border-slate-200 hover:border-amber-300 transition-all duration-300 flex flex-col hover:shadow-lg shadow-sm"
        >
          <div class="relative aspect-square overflow-hidden bg-white p-8 flex items-center justify-center border-b border-slate-100 rounded-t-xl">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="max-w-full max-h-full object-contain transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500 relative z-10"
            />
            
            <div class="absolute top-4 right-4 z-20">
              <span v-if="product.isNew" class="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
                NEW
              </span>
            </div>
          </div>
          
          <div class="p-6 flex-1 flex flex-col relative z-10 bg-white rounded-b-xl">
            <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Icon name="lucide:cpu" class="w-3 h-3 text-amber-600" /> {{ product.category }}
            </span>
            <h3 class="font-bold text-slate-800 mb-4 line-clamp-2 text-lg group-hover:text-amber-600 transition-colors">
              {{ product.name }}
            </h3>
            <div class="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <span class="font-mono text-sm font-semibold text-slate-600">{{ product.price }}</span>
              <button class="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 hover:text-white hover:shadow-md transition-all" aria-label="Add to quote">
                <Icon name="lucide:plus" class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const products = [
  {
    name: 'Professional Studio Camera 4K',
    category: 'OPTICS',
    image: '/products/1.webp',
    price: 'REQ QUOTE',
    isNew: true
  },
  {
    name: 'Broadcast Audio Interface console',
    category: 'AUDIO',
    image: '/products/2.webp',
    price: 'REQ QUOTE',
    isNew: false
  },
  {
    name: 'High-Intensity LED Studio Light',
    category: 'LUMENS',
    image: '/products/Lighting/1.webp',
    price: 'REQ QUOTE',
    isNew: true
  },
  {
    name: 'Advanced Wireless Microphone System',
    category: 'AUDIO',
    image: '/products/4.webp',
    price: 'REQ QUOTE',
    isNew: false
  },
  {
    name: 'Bi-Color LED Panel Light',
    category: 'LUMENS',
    image: '/products/Lighting/2.webp',
    price: 'REQ QUOTE',
    isNew: false
  },
  {
    name: 'Cinematic PTZ Camera System',
    category: 'OPTICS',
    image: '/products/5.webp',
    price: 'REQ QUOTE',
    isNew: true
  },
  {
    name: 'Studio Softbox Lighting Kit',
    category: 'LUMENS',
    image: '/products/Lighting/6.webp',
    price: 'REQ QUOTE',
    isNew: false
  },
  {
    name: 'Master Control Switcher Panel',
    category: 'CONTROL',
    image: '/products/12.webp',
    price: 'REQ QUOTE',
    isNew: false
  }
]
</script>
