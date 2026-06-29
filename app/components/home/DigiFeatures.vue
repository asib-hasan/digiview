<template>
  <section class="py-24 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
    <!-- Grid Background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4">
          <Icon name="lucide:activity" class="w-4 h-4" /> System Capabilities
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">NEXT-GEN BROADCAST TECH</h2>
        <p class="text-slate-400 text-lg font-light">Experience the future of production with zero-latency transmission, AI-driven automation, and uncompromised 8K resolution support.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Feature 1 -->
        <div class="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-500">
          <div class="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] group-hover:bg-cyan-500/20 transition-all duration-500"></div>
          <div class="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-500 relative z-10">
            <Icon name="lucide:radio" class="w-7 h-7" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3 tracking-wide">Zero Latency TX</h3>
          <p class="text-slate-400 font-light leading-relaxed relative z-10">Instantaneous data transmission ensuring live broadcasts hit the airwaves without a millisecond of delay.</p>
        </div>

        <!-- Feature 2 -->
        <div class="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-500">
          <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-all duration-500"></div>
          <div class="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-500 relative z-10">
            <Icon name="lucide:monitor-play" class="w-7 h-7" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3 tracking-wide">8K Ultra HD Ready</h3>
          <p class="text-slate-400 font-light leading-relaxed relative z-10">Future-proof your studio with hardware fully certified for 8K resolution workflows and high-dynamic-range color.</p>
        </div>

        <!-- Feature 3 -->
        <div class="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 hover:bg-slate-900 transition-all duration-500">
          <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] group-hover:bg-purple-500/20 transition-all duration-500"></div>
          <div class="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-500 relative z-10">
            <Icon name="lucide:cpu" class="w-7 h-7" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3 tracking-wide">AI Automation</h3>
          <p class="text-slate-400 font-light leading-relaxed relative z-10">Smart mixing consoles and PTZ cameras that track subjects and balance audio automatically using neural engines.</p>
        </div>

      </div>
    </div>
  </section>
</template>
