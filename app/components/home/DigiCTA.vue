<template>
  <section class="py-24 bg-white relative overflow-hidden border-t border-slate-200">
    <div class="container mx-auto px-4 md:px-8 relative z-10 text-center">
      <div class="max-w-4xl mx-auto bg-slate-900 p-12 md:p-16 rounded-3xl shadow-xl relative overflow-hidden group">
        
        <!-- Subtle branding accent -->
        <div class="absolute top-0 left-0 w-full h-1 bg-amber-600"></div>

        <div class="relative z-10">
          <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">READY TO UPGRADE YOUR STUDIO?</h2>
          <p class="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">Consult with our broadcast engineers to design and integrate the ultimate production workflow tailored to your needs.</p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink to="/contact" class="w-full sm:w-auto px-10 py-4 bg-amber-600 text-white font-bold rounded hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 uppercase tracking-wider">
              Request a Quote
            </NuxtLink>
            
            <NuxtLink to="/products" class="w-full sm:w-auto px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded transition-colors flex items-center justify-center gap-2 uppercase tracking-wider">
              Browse Inventory
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
