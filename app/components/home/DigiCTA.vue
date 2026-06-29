<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Deep futuristic background -->
    <div class="absolute inset-0 bg-slate-950"></div>
    <div class="absolute inset-0 bg-[url('/slider/1.webp')] bg-cover bg-center opacity-10 mix-blend-screen"></div>
    
    <!-- Neon grid floor -->
    <div class="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(transparent_95%,rgba(6,182,212,0.3)_100%),linear-gradient(90deg,transparent_95%,rgba(6,182,212,0.3)_100%)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] [transform-origin:bottom] opacity-30 pointer-events-none"></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10 text-center">
      <div class="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-cyan-900/50 p-12 md:p-16 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.1)] relative overflow-hidden group">
        
        <!-- Glowing corners -->
        <div class="absolute top-0 left-0 w-16 h-16 border-t border-l border-cyan-500 rounded-tl-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div class="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-cyan-500 rounded-br-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        <!-- Core light -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-600/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/30 transition-colors duration-700"></div>

        <div class="relative z-10">
          <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">READY TO UPGRADE YOUR STUDIO?</h2>
          <p class="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">Consult with our broadcast engineers to design and integrate the ultimate production workflow tailored to your needs.</p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink to="/contact" class="w-full sm:w-auto relative group/btn overflow-hidden px-10 py-4 bg-cyan-600 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] flex items-center justify-center gap-2 uppercase tracking-wider">
              <span class="relative z-10">Request a Quote</span>
              <div class="absolute inset-0 h-full w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity z-0"></div>
            </NuxtLink>
            
            <NuxtLink to="/products" class="w-full sm:w-auto px-10 py-4 bg-slate-800/80 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-600 transition-all flex items-center justify-center gap-2 uppercase tracking-wider hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Browse Inventory
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
