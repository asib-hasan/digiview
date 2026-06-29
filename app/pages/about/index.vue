<template>
  <div class="bg-[#f8f9fa] min-h-screen font-sans">
    <PageHero
      title="About Us"
      subtitle="Bangladesh's leading Intelligent Transportation Systems provider — over 25 years of excellence in toll collection, traffic monitoring, and infrastructure technology."
    />

    <!-- As Unique As You (Intro) -->
    <section class="py-20 bg-[#f8f9fa] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="animate-fade-up">
            <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Asian Traffic Technologies Ltd.
            </h2>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
              ATT is a multi-dimensional business-oriented company having activities in the sectors of Toll Management & Operation, Ship Building, Navigation & Ship Rescue, Weighing Management, Civil Work & Building Construction, Human & Vehicle Access Control Systems, CCTV Surveillance & Security Systems, and Parking Management.
            </p>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
              With a multidisciplinary team of engineers, technicians, and project managers, we bring together expertise in electronics, software, civil engineering, and project management to deliver complete solutions that perform reliably in Bangladesh's demanding environment.
            </p>
          </div>
          <div class="relative animate-fade-up delay-200">
            <!-- Decorative abstract shape like Square's -->
            <div class="absolute -inset-4 bg-slate-200 rounded-[3rem] transform rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="ATT Office" class="relative rounded-[2.5rem] w-full h-[500px] object-cover shadow-lg" />
          </div>
        </div>
      </div>
    </section>

    <!-- Animated Counters Section -->
    <section class="py-16 bg-white border-b border-slate-100 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(stat, idx) in companyStats" :key="stat.label" class="text-center animate-fade-up" :class="`delay-${(idx + 1) * 100}`">
            <div class="text-4xl md:text-5xl font-black text-primary-700 mb-2">
              <AnimatedCounter :value="stat.value" :suffix="stat.suffix" :duration="2000" />
            </div>
            <div class="font-bold text-slate-800 uppercase tracking-widest text-sm mb-1">{{ stat.label }}</div>
            <div class="text-xs text-slate-500 font-medium">{{ stat.sub }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section id="mission-vision" class="py-24 relative overflow-hidden">
      <!-- Background Image with Blue Overlay -->
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" class="w-full h-full object-cover" alt="Cityscape" />
        <div class="absolute inset-0 bg-primary-700/80 mix-blend-multiply"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-12 animate-fade-up">Vision & Mission</h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Vision Card -->
          <div class="bg-[#f8f9fa] rounded-2xl p-10 lg:p-12 shadow-xl border-t-4 border-primary-700 animate-fade-up delay-100">
            <svg class="w-16 h-16 text-primary-700 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <h3 class="text-3xl font-black text-slate-900 mb-6">Vision</h3>
            <p class="text-lg text-slate-700 leading-relaxed">
              In a world where complexity increasingly touches every aspect of our daily lives, we will lead in bringing sense and simplicity to people.
            </p>
          </div>

          <!-- Mission Card -->
          <div class="bg-[#f8f9fa] rounded-2xl p-10 lg:p-12 shadow-xl border-t-4 border-accent-500 animate-fade-up delay-200">
            <svg class="w-16 h-16 text-accent-600 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 class="text-3xl font-black text-slate-900 mb-6">Mission</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-slate-700 text-lg leading-relaxed">To hold the leadership in Bangladesh by means of continuous strive in offering quality management for Operation & Maintenance of ETC for Roads & Highways.</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-slate-700 text-lg leading-relaxed">To become the market leader for Highways Systems Technology development in Bangladesh.</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-primary-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-slate-700 text-lg leading-relaxed">To provide proper security system all over Bangladesh.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Sister Concerns Grid (Like Square's) -->
    <section class="py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-12 text-center animate-fade-up">Sister Concerns</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-[#f5f5f5] rounded-2xl h-56 flex flex-col items-center justify-center p-6 text-center hover:shadow-md transition-shadow animate-fade-up delay-100">
            <img src="/images/logo.png" alt="Mehboob & Masood Navigation" class="h-20 object-contain mb-4 mix-blend-multiply" />
            <h3 class="font-black text-slate-900 text-lg mb-1">Mehboob & Masood Navigation</h3>
            <p class="text-slate-500 font-medium text-[10px] uppercase tracking-widest">Ship Operation & Logistics</p>
          </div>
          <div class="bg-[#f5f5f5] rounded-2xl h-56 flex flex-col items-center justify-center p-6 text-center hover:shadow-md transition-shadow animate-fade-up delay-200">
            <img src="/images/logo.png" alt="Shams Navigation" class="h-20 object-contain mb-4 mix-blend-multiply" />
            <h3 class="font-black text-slate-900 text-lg mb-1">Shams Navigation</h3>
            <p class="text-slate-500 font-medium text-[10px] uppercase tracking-widest">Carrier Operation</p>
          </div>
          <div class="bg-[#f5f5f5] rounded-2xl h-56 flex flex-col items-center justify-center p-6 text-center hover:shadow-md transition-shadow animate-fade-up delay-300">
            <img src="/images/logo.png" alt="Engr. Mehboob Ship Builders" class="h-20 object-contain mb-4 mix-blend-multiply" />
            <h3 class="font-black text-slate-900 text-lg mb-1">Engr. Mehboob Ship Builders</h3>
            <p class="text-slate-500 font-medium text-[10px] uppercase tracking-widest">Manufacturing</p>
          </div>
          <div class="bg-[#f5f5f5] rounded-2xl h-56 flex flex-col items-center justify-center p-6 text-center hover:shadow-md transition-shadow animate-fade-up delay-400">
            <img src="/images/logo.png" alt="A M Corporation" class="h-20 object-contain mb-4 mix-blend-multiply" />
            <h3 class="font-black text-slate-900 text-lg mb-1">A M Corporation</h3>
            <p class="text-slate-500 font-medium text-[10px] uppercase tracking-widest">General Trading & Supply</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Board of Directors (Circular Grid) -->
    <section class="py-24 bg-[#f8f9fa] overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-fade-up">
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-4">Board of Directors</h2>
          <div class="w-24 h-1 bg-primary-700 mx-auto rounded-full"></div>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div v-for="(member, idx) in board" :key="member.name" class="group animate-fade-up" :class="`delay-${(idx + 1) * 100}`">
            <div class="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 shadow-lg ring-4 ring-white group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
              <img :src="`/People_images/${member.image}`" :alt="member.name" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 class="text-2xl font-black text-slate-900 mb-1">{{ member.name }}</h3>
            <div class="text-primary-700 font-bold uppercase tracking-widest text-xs mb-4">{{ member.title }}</div>
            <p class="text-slate-600 leading-relaxed text-sm">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import AnimatedCounter from '~/components/common/AnimatedCounter.vue'

useSeoMeta({
  title: 'About ATT — Asian Traffic Technologies Ltd',
  description: 'Learn about Asian Traffic Technologies Ltd — our mission, vision, board of directors, and 25+ years of delivering ITS solutions in Bangladesh.',
})

const companyStats = [
  { value: 2002, label: 'Year Established', sub: 'Inception of ATT', suffix: '' },
  { value: 80, label: 'Market Share', sub: 'In Core Businesses', suffix: '%' },
  { value: 500, label: 'Workforce', sub: 'Technical & Commercial', suffix: '+' },
  { value: 31, label: 'Owned Vessels', sub: 'Cargo & Tankers', suffix: '' },
]

const board = [
  {
    name: 'Engr. Mehboob Kabir',
    image: 'mehboob_kabir.PNG',
    title: 'Managing Director',
    bio: 'B.Sc in CSE, DBA from Mehran Engineering University. Guided ATT\'s business strategies and rapid growth since 1998.',
  },
  {
    name: 'Dr. Sifat Farhana Nahid',
    image: 'sifat_farhana.PNG',
    title: 'Deputy Managing Director',
    bio: 'M.B.B.S in Dhaka National Medical College. Key person in PR and Finance, ensuring operational health.',
  },
  {
    name: 'Md. Masood Karim',
    image: 'masood_karim.PNG',
    title: 'Chief Executive Officer',
    bio: 'M.B.A from University of Technology, Sydney. With ATT since 2002, managing teams locally and internationally.',
  },
  {
    name: 'Md. Shafat K. Siddiky',
    image: 'shafat.PNG',
    title: 'Business Development',
    bio: 'MBA from UK. Joined ATT in 2006, managing the company\'s overall business development issues.',
  },
]
</script>
