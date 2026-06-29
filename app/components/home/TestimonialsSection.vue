<template>
  <section class="py-24 bg-slate-50 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div v-animate="'animate-fade-up'" class="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-200 mb-5">
          Client Success Stories
        </div>
        <h2 v-animate="'animate-fade-up delay-100'" class="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          What Our Partners Say
        </h2>
        <p v-animate="'animate-fade-up delay-200'" class="text-slate-600 text-lg">
          Trusted by government agencies, port authorities, and private enterprises across Bangladesh to deliver mission-critical infrastructure.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="testimonial.author"
          v-animate="`animate-fade-up delay-${(index + 3) * 100}`"
          class="bg-white rounded-3xl p-8 shadow-sm hover:shadow-card transition-shadow duration-300 border border-slate-100 flex flex-col h-full relative z-10"
        >
          <!-- Quote Icon -->
          <svg class="w-10 h-10 text-accent-500 mb-6 opacity-30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          
          <p class="text-slate-700 leading-relaxed flex-grow italic mb-8">
            "{{ testimonial.quote }}"
          </p>
          
          <div class="flex items-center gap-4 mt-auto">
            <div class="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 shrink-0">
              <img v-if="testimonial.avatar" :src="testimonial.avatar" :alt="testimonial.author" class="w-full h-full object-cover"/>
              <span v-else>{{ testimonial.author.charAt(0) }}</span>
            </div>
            <div>
              <div class="font-bold text-slate-900">{{ testimonial.author }}</div>
              <div class="text-sm text-primary-600 font-medium">{{ testimonial.role }}</div>
              <div class="text-xs text-slate-500">{{ testimonial.company }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: "ATT's implementation of the Electronic Toll Collection system has drastically reduced congestion on our major highways. Their local support team is incredibly responsive and understands the unique challenges we face.",
    author: "Engr. Rahman",
    role: "Project Director",
    company: "Roads & Highways Department",
    avatar: "" 
  },
  {
    quote: "The Weigh-in-Motion systems provided by ATT have been crucial in protecting our bridge infrastructure from overloaded cargo. The accuracy and durability of their scales are unmatched in the region.",
    author: "M. Hossain",
    role: "Operations Manager",
    company: "National Bridge Authority",
    avatar: ""
  },
  {
    quote: "We partnered with ATT for our port's access control and CCTV surveillance. The integration of LPR and biometric systems has secured our perimeter while maintaining smooth logistics flow.",
    author: "S. Ahmed",
    role: "Chief Security Officer",
    company: "Port Logistics Ltd.",
    avatar: ""
  }
]
</script>
