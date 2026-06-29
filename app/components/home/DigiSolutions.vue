<template>
  <section class="py-24 bg-white relative overflow-hidden">

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      
      <div class="flex flex-col md:flex-row items-end md:items-center justify-between mb-16 gap-6">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-px w-8 bg-amber-600"></div>
            <span class="text-amber-600 font-bold text-xs uppercase tracking-widest">Solutions</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">ADVANCED WORKFLOWS</h2>
          <p class="text-slate-600 text-lg font-light">End-to-end integration for live sports, newsrooms, and cinematic virtual production.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Workflow 1 -->
        <div class="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-500 aspect-[16/9] lg:aspect-[21/9]">
          <img src="/products/Camera/3.webp" alt="Virtual Production" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out opacity-90" />
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>

          <!-- Glass Panel -->
          <div class="absolute bottom-6 left-6 right-6 lg:left-8 lg:bottom-8 lg:w-1/2 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 z-20 group-hover:border-amber-300 shadow-sm transition-all duration-500">
            <h3 class="text-2xl font-bold text-slate-900 mb-2 tracking-wide group-hover:text-amber-600 transition-colors">Virtual Production</h3>
            <p class="text-slate-600 font-light text-sm mb-4">Seamless integration with Unreal Engine for real-time VFX, utilizing our top-tier camera tracking solutions.</p>
            <NuxtLink to="/solutions" class="inline-flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-widest hover:text-amber-600 transition-colors">
              Explore Setup <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Workflow 2 -->
        <div class="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-500 aspect-[16/9] lg:aspect-[21/9]">
          <img src="/products/13.webp" alt="Live Broadcasting" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out opacity-90" />
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>

          <!-- Glass Panel -->
          <div class="absolute bottom-6 left-6 right-6 lg:left-8 lg:bottom-8 lg:w-1/2 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 z-20 group-hover:border-amber-300 shadow-sm transition-all duration-500">
            <h3 class="text-2xl font-bold text-slate-900 mb-2 tracking-wide group-hover:text-amber-600 transition-colors">Live OB Vans</h3>
            <p class="text-slate-600 font-light text-sm mb-4">Compact, ultra-reliable routing and mixing hardware designed for the rigorous demands of outdoor broadcasting.</p>
            <NuxtLink to="/solutions" class="inline-flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-widest hover:text-amber-600 transition-colors">
              Explore Setup <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
