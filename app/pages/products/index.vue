<template>
  <div>
    <PageHero
      title="Our Products"
      subtitle="A complete line of traffic data collection, weigh-in-motion, access control, and traffic safety products for highways, ports, and urban infrastructure."
      label="Product Range"
    />

    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Intro -->
        <div class="max-w-3xl mx-auto text-center mb-14">
          <p class="text-slate-600 leading-relaxed text-lg">
            ATT supplies a complete line of traffic data collection and traffic safety products. Customers include State and Federal DOTs, Cities, Counties, Municipalities, and private businesses. Our knowledgeable product representatives will help you find exactly what suits your needs.
          </p>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in products"
            :key="product.slug"
            :title="product.title"
            :description="product.shortDesc"
            :specs="product.specs"
            :image="product.image || '/product.png'"
            :link="`/products/${product.slug}`"
          />
        </div>
      </div>
    </section>


  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'

useSeoMeta({
  title: 'Products — ATT | Traffic & ITS Hardware Bangladesh',
  description: 'Browse ATT\'s full product range: traffic counters, WIM controllers, axle sensors, access control hardware, solar systems, outdoor displays and more.',
})
</script>
