<script setup>
import { useProductStore } from "@/stores/ProductStore";

const productStore = useProductStore();
productStore.fill();
</script>

<template>
  <div class="container">
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
