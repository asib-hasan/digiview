<template>
  <header class="w-full fixed top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
    <!-- Top Row: Logo, Search, Socials -->
    <div class="container mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      
      <!-- Logo -->
      <NuxtLink to="/" class="flex-shrink-0 relative group">
        <img src="/images/logo.png" alt="Digiview Logo" class="relative h-12 md:h-14 object-contain" />
      </NuxtLink>

      <!-- Search Bar -->
      <div class="flex-1 max-w-xl w-full mx-auto relative group">
        <div class="flex items-center w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200 focus-within:border-amber-600 focus-within:ring-2 focus-within:ring-amber-100 transition-all duration-300">
          <input 
            type="text" 
            placeholder="Search equipment..." 
            class="flex-1 bg-transparent px-6 py-2.5 outline-none text-slate-700 placeholder-slate-400 text-sm"
          />
          <button class="bg-amber-50 hover:bg-amber-100 transition-colors px-6 py-2.5 text-amber-600 flex items-center justify-center border-l border-slate-200">
            <Icon name="lucide:search" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Socials & Sign In -->
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-3">
          <a href="#" class="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50 transition-all duration-300" aria-label="Facebook">
            <Icon name="lucide:facebook" class="w-4 h-4" />
          </a>
          <a href="#" class="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50 transition-all duration-300" aria-label="X (Twitter)">
            <Icon name="lucide:twitter" class="w-4 h-4" />
          </a>
          <a href="#" class="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50 transition-all duration-300" aria-label="Instagram">
            <Icon name="lucide:instagram" class="w-4 h-4" />
          </a>
          <a href="#" class="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50 transition-all duration-300" aria-label="YouTube">
            <Icon name="lucide:youtube" class="w-4 h-4" />
          </a>
        </div>
        
        <NuxtLink to="/signin" class="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-amber-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 hover:bg-amber-700 shadow-sm hover:shadow-md uppercase tracking-wider">
          Sign In
        </NuxtLink>
      </div>
    </div>

    <!-- Bottom Row: Navigation Menu -->
    <div class="border-t border-slate-100 bg-slate-50/50">
      <div class="container mx-auto px-4 md:px-8">
        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center justify-between">
          <NuxtLink 
            v-for="(link, index) in navLinks" 
            :key="index"
            :to="link.path"
            class="flex-1 text-center py-3 px-2 text-xs font-bold text-slate-600 hover:text-amber-600 border-r border-slate-200/60 last:border-r-0 first:border-l border-l-slate-200/60 uppercase tracking-widest transition-all duration-300 hover:bg-amber-50/50"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>
        
        <!-- Mobile Nav Toggle -->
        <div class="md:hidden py-3 flex justify-between items-center">
          <span class="font-bold text-amber-600 uppercase tracking-widest text-xs">Menu</span>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-slate-600 hover:text-amber-600 focus:outline-none transition-colors">
            <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-show="mobileMenuOpen" class="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 shadow-lg">
      <nav class="flex flex-col">
        <NuxtLink 
          v-for="(link, index) in navLinks" 
          :key="index"
          :to="link.path"
          class="py-4 px-6 text-sm font-bold text-slate-600 hover:bg-amber-50 hover:text-amber-600 border-b border-slate-100 last:border-b-0 uppercase tracking-widest transition-colors"
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
  { name: 'Products', path: '#' },
  { name: 'Solutions', path: '#' },
  { name: 'Services', path: '#' },
  { name: 'Resources', path: '#' },
  { name: 'Our Partners', path: '#' },
  { name: 'About Us', path: '#' },
  { name: 'Contact Us', path: '#' },
]
</script>
