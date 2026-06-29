<template>
  <section class="py-24 bg-slate-900 relative overflow-hidden">
    <!-- Abstract Glow -->
    <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      
      <div class="flex flex-col md:flex-row items-end md:items-center justify-between mb-16 gap-6">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-px w-8 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            <span class="text-blue-400 font-bold text-xs uppercase tracking-widest">Solutions</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">ADVANCED WORKFLOWS</h2>
          <p class="text-slate-400 text-lg font-light">End-to-end integration for live sports, newsrooms, and cinematic virtual production.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Workflow 1 -->
        <div class="group relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 aspect-[16/9] lg:aspect-[21/9]">
          <div class="absolute inset-0 bg-blue-950 mix-blend-multiply opacity-50 group-hover:opacity-20 transition-opacity z-10"></div>
          <img src="/products/Camera/3.webp" alt="Virtual Production" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out opacity-60 group-hover:opacity-100" />
          
          <!-- Glass Panel -->
          <div class="absolute bottom-6 left-6 right-6 lg:left-8 lg:bottom-8 lg:w-1/2 p-6 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-slate-700/50 z-20 group-hover:border-blue-500/30 transition-all duration-500">
            <h3 class="text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-blue-400 transition-colors">Virtual Production</h3>
            <p class="text-slate-300 font-light text-sm mb-4">Seamless integration with Unreal Engine for real-time VFX, utilizing our top-tier camera tracking solutions.</p>
            <NuxtLink to="/solutions" class="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-blue-400 transition-colors">
              Explore Setup <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Workflow 2 -->
        <div class="group relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 aspect-[16/9] lg:aspect-[21/9]">
          <div class="absolute inset-0 bg-cyan-950 mix-blend-multiply opacity-50 group-hover:opacity-20 transition-opacity z-10"></div>
          <img src="/products/13.webp" alt="Live Broadcasting" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out opacity-60 group-hover:opacity-100" />
          
          <!-- Glass Panel -->
          <div class="absolute bottom-6 left-6 right-6 lg:left-8 lg:bottom-8 lg:w-1/2 p-6 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-slate-700/50 z-20 group-hover:border-cyan-500/30 transition-all duration-500">
            <h3 class="text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-cyan-400 transition-colors">Live OB Vans</h3>
            <p class="text-slate-300 font-light text-sm mb-4">Compact, ultra-reliable routing and mixing hardware designed for the rigorous demands of outdoor broadcasting.</p>
            <NuxtLink to="/solutions" class="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-cyan-400 transition-colors">
              Explore Setup <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
