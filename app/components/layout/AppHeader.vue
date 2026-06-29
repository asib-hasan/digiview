<template>
  <header class="w-full fixed top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-cyan-900/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300">
    <!-- Top Row: Logo, Search, Socials -->
    <div class="container mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      
      <!-- Logo -->
      <NuxtLink to="/" class="flex-shrink-0 relative group">
        <div class="absolute -inset-1 bg-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <img src="/images/logo.png" alt="Digiview Logo" class="relative h-12 md:h-14 object-contain brightness-0 invert" />
      </NuxtLink>

      <!-- Search Bar -->
      <div class="flex-1 max-w-xl w-full mx-auto relative group">
        <div class="flex items-center w-full bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50 focus-within:border-cyan-500/50 focus-within:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300">
          <input 
            type="text" 
            placeholder="Search equipment..." 
            class="flex-1 bg-transparent px-6 py-2.5 outline-none text-slate-200 placeholder-slate-500 text-sm"
          />
          <button class="bg-cyan-600/20 hover:bg-cyan-500/30 transition-colors px-6 py-2.5 text-cyan-400 flex items-center justify-center border-l border-slate-700/50">
            <Icon name="lucide:search" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Socials & Sign In -->
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-3">
          <a href="#" class="social-btn" aria-label="Facebook">
            <Icon name="lucide:facebook" class="w-4 h-4" />
          </a>
          <a href="#" class="social-btn" aria-label="X (Twitter)">
            <Icon name="lucide:twitter" class="w-4 h-4" />
          </a>
          <a href="#" class="social-btn" aria-label="Instagram">
            <Icon name="lucide:instagram" class="w-4 h-4" />
          </a>
          <a href="#" class="social-btn" aria-label="YouTube">
            <Icon name="lucide:youtube" class="w-4 h-4" />
          </a>
        </div>
        
        <NuxtLink to="/signin" class="relative inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-white transition-all duration-200 bg-cyan-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 hover:bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] uppercase tracking-wider">
          Sign In
        </NuxtLink>
      </div>
    </div>

    <!-- Bottom Row: Navigation Menu -->
    <div class="border-t border-slate-800/50 bg-slate-900/40">
      <div class="container mx-auto px-4 md:px-8">
        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center justify-between">
          <NuxtLink 
            v-for="(link, index) in navLinks" 
            :key="index"
            :to="link.path"
            class="flex-1 text-center py-3 px-2 text-xs font-bold text-slate-300 hover:text-cyan-400 border-r border-slate-800/50 last:border-r-0 first:border-l border-l-slate-800/50 uppercase tracking-widest transition-all duration-300 hover:bg-cyan-500/5 hover:shadow-[inset_0_-2px_0_rgba(6,182,212,0.8)]"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>
        
        <!-- Mobile Nav Toggle -->
        <div class="md:hidden py-3 flex justify-between items-center">
          <span class="font-bold text-cyan-400 uppercase tracking-widest text-xs">Menu</span>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-slate-300 hover:text-cyan-400 focus:outline-none transition-colors">
            <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-show="mobileMenuOpen" class="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-cyan-900/30 absolute w-full left-0">
      <nav class="flex flex-col">
        <NuxtLink 
          v-for="(link, index) in navLinks" 
          :key="index"
          :to="link.path"
          class="py-4 px-6 text-sm font-bold text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 border-b border-slate-800/50 last:border-b-0 uppercase tracking-widest transition-colors"
          @click="mobileMenuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Products', path: '/products' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Services', path: '/services' },
  { name: 'Resources', path: '/resources' },
  { name: 'Our Partners', path: '/partners' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
]
</script>

<style scoped>
.social-btn {
  @apply w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300;
}
</style>
