<template>
  <section class="py-16 bg-white border-t border-slate-200 overflow-hidden relative">
    <!-- Fade edges -->
    <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
    <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

    <div class="container mx-auto px-4 md:px-8 mb-8 text-center relative z-20">
      <p class="text-slate-500 font-bold text-xs uppercase tracking-widest">TRUSTED BY INDUSTRY LEADERS WORLDWIDE</p>
    </div>

    <!-- Marquee Track -->
    <div class="flex whitespace-nowrap overflow-hidden relative z-0">
      <div class="animate-marquee flex gap-16 items-center pr-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
        <!-- Logo Placeholders (CSS Text styling to look like logos) -->
        <div v-for="n in 2" :key="n" class="flex gap-16 items-center">
          <div class="font-black text-2xl text-slate-800 tracking-tighter">SONY</div>
          <div class="font-black text-2xl text-slate-800 tracking-wider">PANASONIC</div>
          <div class="font-black text-2xl text-slate-800 italic">ARRI</div>
          <div class="font-black text-2xl text-slate-800">RED</div>
          <div class="font-black text-2xl text-slate-800 tracking-tight">BLACKMAGIC</div>
          <div class="font-black text-2xl text-slate-800">CANON</div>
          <div class="font-black text-2xl text-slate-800 italic">GRASS VALLEY</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  width: max-content;
  animation: marquee 30s linear infinite;
}
</style>
