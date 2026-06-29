<template>
  <section class="py-24 bg-slate-900 border-t border-slate-800">
    <div class="container mx-auto px-4 md:px-8">
      
      <div class="flex flex-col md:flex-row items-end md:items-center justify-between mb-12 gap-6">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <div class="h-px w-8 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
            <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">Hardware</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight">FEATURED EQUIPMENT</h2>
        </div>
        <NuxtLink to="/products" class="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 font-bold uppercase tracking-widest text-xs transition-colors">
          View All Inventory
          <span class="w-8 h-8 rounded-full border border-slate-700 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 flex items-center justify-center transition-all">
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </span>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(product, index) in products" 
          :key="index"
          class="group relative bg-slate-950 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
        >
          <!-- Cyber Accent -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative aspect-square overflow-hidden bg-slate-900/50 p-8 flex items-center justify-center border-b border-slate-800">
            <div class="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              :src="product.image" 
              :alt="product.name"
              class="max-w-full max-h-full object-contain transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 relative z-10"
            />
            
            <div class="absolute top-4 right-4 z-20">
              <span v-if="product.isNew" class="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest shadow-[0_0_10px_rgba(6,182,212,0.2)] flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                NEW
              </span>
            </div>
          </div>
          
          <div class="p-6 flex-1 flex flex-col relative z-10 bg-slate-950 rounded-b-xl">
            <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Icon name="lucide:cpu" class="w-3 h-3 text-cyan-500" /> {{ product.category }}
            </span>
            <h3 class="font-bold text-white mb-4 line-clamp-2 text-lg group-hover:text-cyan-400 transition-colors">
              {{ product.name }}
            </h3>
            <div class="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between">
              <span class="font-mono text-sm text-slate-400">{{ product.price }}</span>
              <button class="w-10 h-10 rounded bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-cyan-600 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all" aria-label="Add to quote">
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
