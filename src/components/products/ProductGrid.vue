<script setup>
import useTouch from '@/composables/useTouch.js';
defineProps({
   items: Array,
});
const { isTouchDevice } = useTouch();
</script>

<template>
  <div v-dragscroll="!isTouchDevice" class="product-grid">
  <ProductCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<style lang="scss" scoped>
.product-grid {
  display: flex;
  padding: 0.5rem 0 2rem;
  gap: 1rem;
  overflow-y: visible;
  overflow-x: auto;
  flex-wrap: nowrap;
  transition: padding-left 800ms ease-out;
  margin-left: 1rem;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0;
  }
  @media only screen and(max-width: 800px) {
    margin-top: 2rem;
  }
  @media only screen and(max-width: 600px) {
  }
}
</style>