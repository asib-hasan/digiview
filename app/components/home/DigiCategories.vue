<template>
  <section class="py-20 bg-slate-950 relative overflow-hidden">
    <!-- Background Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Category 1 -->
        <NuxtLink to="/products/cameras" class="group relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[4/3] bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500">
          <!-- Cyber Corners -->
          <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
          <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>

          <div class="absolute inset-0 bg-cyan-950 mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
          <img src="/products/3.webp" alt="Professional Cameras" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out opacity-70 group-hover:opacity-100" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex flex-col justify-end p-10 z-10">
            <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
              <span class="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                View Catalog <Icon name="lucide:arrow-right" class="w-4 h-4" />
              </span>
              <h3 class="text-4xl font-black text-white mb-3 tracking-tight">CAMERAS & LENSES</h3>
              <div class="h-1 w-12 bg-cyan-500 mb-4 rounded-full group-hover:w-24 transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
              <p class="text-slate-300 line-clamp-2 max-w-md font-light text-lg">Next-generation broadcasting cameras, CCTV solutions, and premium optical lenses for 4K/8K production.</p>
            </div>
          </div>
        </NuxtLink>

        <!-- Category 2 -->
        <NuxtLink to="/products/studio" class="group relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[4/3] bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
          <!-- Cyber Corners -->
          <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
          <div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>

          <div class="absolute inset-0 bg-blue-950 mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
          <img src="/products/13.webp" alt="Studio Equipment" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out opacity-70 group-hover:opacity-100" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex flex-col justify-end p-10 z-10">
            <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
              <span class="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Explore Gear <Icon name="lucide:arrow-right" class="w-4 h-4" />
              </span>
              <h3 class="text-4xl font-black text-white mb-3 tracking-tight">STUDIO & AUDIO PARTS</h3>
              <div class="h-1 w-12 bg-blue-500 mb-4 rounded-full group-hover:w-24 transition-all duration-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              <p class="text-slate-300 line-clamp-2 max-w-md font-light text-lg">Equip your studio with industry-leading audio interfaces, intelligent lighting systems, and broadcasting hardware.</p>
            </div>
          </div>
        </NuxtLink>

      </div>
    </div>
  </section>
</template>
