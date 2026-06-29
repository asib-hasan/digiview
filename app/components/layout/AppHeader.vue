<template>
  <header class="w-full fixed top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
    
    <!-- MAIN HEADER BAR (Always visible) -->
    <div class="container mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4">
      
      <!-- Logo -->
      <NuxtLink to="/" class="flex-shrink-0 relative group">
        <img src="/images/logo.png" alt="Digiview Logo" class="relative h-10 md:h-14 object-contain" />
      </NuxtLink>

      <!-- Desktop Search Bar -->
      <div class="hidden md:block flex-1 max-w-xl mx-auto relative group">
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

      <!-- Desktop Socials & Sign In -->
      <div class="hidden md:flex items-center gap-6">
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

      <!-- Mobile Menu Toggle Button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-slate-800 hover:text-amber-600 focus:outline-none transition-colors p-2 -mr-2">
        <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-7 h-7" />
      </button>

    </div>

    <!-- Desktop Navigation Menu Row -->
    <div class="hidden md:block border-t border-slate-100 bg-slate-50/50">
      <div class="container mx-auto px-4 md:px-8">
        <nav class="flex items-center justify-between">
          <NuxtLink 
            v-for="(link, index) in navLinks" 
            :key="index"
            :to="link.path"
            class="flex-1 text-center py-3 px-2 text-xs font-bold text-slate-600 hover:text-amber-600 border-r border-slate-200/60 last:border-r-0 first:border-l border-l-slate-200/60 uppercase tracking-widest transition-all duration-300 hover:bg-amber-50/50"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-show="mobileMenuOpen" class="md:hidden bg-white border-t border-slate-200 absolute w-full left-0 shadow-xl overflow-y-auto max-h-[calc(100vh-70px)]">
      <div class="p-4 flex flex-col gap-6">
        
        <!-- Mobile Search -->
        <div class="flex items-center w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200 focus-within:border-amber-600 focus-within:ring-2 focus-within:ring-amber-100 transition-all duration-300">
          <input 
            type="text" 
            placeholder="Search equipment..." 
            class="flex-1 bg-transparent px-4 py-3 outline-none text-slate-700 placeholder-slate-400 text-sm"
          />
          <button class="bg-amber-50 hover:bg-amber-100 transition-colors px-4 py-3 text-amber-600 flex items-center justify-center border-l border-slate-200">
            <Icon name="lucide:search" class="w-5 h-5" />
          </button>
        </div>

        <!-- Mobile Navigation -->
        <nav class="flex flex-col border-t border-b border-slate-100 py-2">
          <NuxtLink 
            v-for="(link, index) in navLinks" 
            :key="index"
            :to="link.path"
            class="py-3 px-2 text-sm font-bold text-slate-700 hover:bg-amber-50 hover:text-amber-600 uppercase tracking-widest transition-colors rounded-lg"
            @click="mobileMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>

        <!-- Mobile Socials & Sign In -->
        <div class="flex flex-col gap-4">
          <NuxtLink to="/signin" @click="mobileMenuOpen = false" class="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all duration-200 bg-amber-600 rounded-full hover:bg-amber-700 shadow-sm uppercase tracking-wider">
            Sign In
          </NuxtLink>
          
          <div class="flex items-center justify-center gap-4 py-2">
            <a href="#" class="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-amber-600 hover:bg-amber-50 transition-all" aria-label="Facebook">
              <Icon name="lucide:facebook" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-amber-600 hover:bg-amber-50 transition-all" aria-label="X (Twitter)">
              <Icon name="lucide:twitter" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-amber-600 hover:bg-amber-50 transition-all" aria-label="Instagram">
              <Icon name="lucide:instagram" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-amber-600 hover:bg-amber-50 transition-all" aria-label="YouTube">
              <Icon name="lucide:youtube" class="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
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
