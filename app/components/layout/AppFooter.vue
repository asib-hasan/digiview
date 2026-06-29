<template>
  <footer class="bg-gray-900 text-gray-300 font-sans border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
        
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <NuxtLink to="/" class="inline-block mb-6">
            <img src="/images/logo.png" alt="Digiview Logo" class="h-10 w-auto brightness-0 invert" />
          </NuxtLink>
          <p class="text-gray-400 mb-6 max-w-sm leading-relaxed">
            Digiview is a leading broadcast technologies company, providing state-of-the-art cameras, studio equipment, and production solutions for professionals worldwide.
          </p>
          <div class="flex items-center gap-4">
            <a href="#" aria-label="Facebook" class="social-icon">
              <Icon name="lucide:facebook" class="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" class="social-icon">
              <Icon name="lucide:twitter" class="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" class="social-icon">
              <Icon name="lucide:instagram" class="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube" class="social-icon">
              <Icon name="lucide:youtube" class="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" class="social-icon">
              <Icon name="lucide:linkedin" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Products -->
        <div>
          <h3 class="text-white font-bold mb-6 uppercase tracking-wider text-sm">Products</h3>
          <ul class="space-y-4">
            <li><NuxtLink to="/products" class="footer-link">Cameras & Lenses</NuxtLink></li>
            <li><NuxtLink to="/products" class="footer-link">Studio Parts</NuxtLink></li>
            <li><NuxtLink to="/products" class="footer-link">Audio Equipment</NuxtLink></li>
            <li><NuxtLink to="/products" class="footer-link">Lighting Solutions</NuxtLink></li>
            <li><NuxtLink to="/products" class="footer-link">TV & Broadcasting</NuxtLink></li>
          </ul>
        </div>

        <!-- Solutions -->
        <div>
          <h3 class="text-white font-bold mb-6 uppercase tracking-wider text-sm">Solutions</h3>
          <ul class="space-y-4">
            <li><NuxtLink to="/solutions" class="footer-link">Live Broadcasting</NuxtLink></li>
            <li><NuxtLink to="/solutions" class="footer-link">Studio Integration</NuxtLink></li>
            <li><NuxtLink to="/solutions" class="footer-link">Cinematic Production</NuxtLink></li>
            <li><NuxtLink to="/solutions" class="footer-link">Corporate AV</NuxtLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h3>
          <ul class="space-y-4">
            <li><NuxtLink to="/about" class="footer-link">About Us</NuxtLink></li>
            <li><NuxtLink to="/partners" class="footer-link">Our Partners</NuxtLink></li>
            <li><NuxtLink to="/resources" class="footer-link">Resources</NuxtLink></li>
            <li><NuxtLink to="/contact" class="footer-link">Contact Us</NuxtLink></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {{ currentYear }} Digiview Broadcast Technologies. All rights reserved.</p>
        <div class="flex gap-6">
          <NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-white transition-colors">Terms of Service</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer-link {
  display: inline-block;
  color: #9ca3af;
  transition: all 0.2s ease-in-out;
}
.footer-link:hover {
  color: #60a5fa; /* blue-400 */
  transform: translateX(4px);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: #9ca3af;
  transition: all 0.3s ease;
}
.social-icon:hover {
  background: #2563eb; /* blue-600 */
  color: #ffffff;
  transform: translateY(-2px);
}
</style>
