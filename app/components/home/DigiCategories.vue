<template>
  <section class="py-20 bg-slate-50 relative overflow-hidden">
    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Category 1 -->
        <NuxtLink to="/products/cameras" class="group relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[4/3] bg-white border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-500 shadow-sm">
          <img src="/products/3.webp" alt="Professional Cameras" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-10 z-10">
            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span class="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                View Catalog <Icon name="lucide:arrow-right" class="w-4 h-4" />
              </span>
              <h3 class="text-4xl font-black text-white mb-3 tracking-tight">CAMERAS & LENSES</h3>
              <div class="h-1 w-12 bg-amber-600 mb-4 rounded-full group-hover:w-24 transition-all duration-500"></div>
              <p class="text-slate-200 line-clamp-2 max-w-md font-light text-lg">Next-generation broadcasting cameras, CCTV solutions, and premium optical lenses for 4K/8K production.</p>
            </div>
          </div>
        </NuxtLink>

        <!-- Category 2 -->
        <NuxtLink to="/products/studio" class="group relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[4/3] bg-white border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-500 shadow-sm">
          <img src="/products/13.webp" alt="Studio Equipment" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-10 z-10">
            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span class="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Explore Gear <Icon name="lucide:arrow-right" class="w-4 h-4" />
              </span>
              <h3 class="text-4xl font-black text-white mb-3 tracking-tight">STUDIO & AUDIO PARTS</h3>
              <div class="h-1 w-12 bg-amber-600 mb-4 rounded-full group-hover:w-24 transition-all duration-500"></div>
              <p class="text-slate-200 line-clamp-2 max-w-md font-light text-lg">Equip your studio with industry-leading audio interfaces, intelligent lighting systems, and broadcasting hardware.</p>
            </div>
          </div>
        </NuxtLink>

      </div>
    </div>
  </section>
</template>
