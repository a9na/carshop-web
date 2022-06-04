<script setup>
import { useProducts } from '@/stores/products.js';
const { getRandomProducts, productsSections } = useProducts();

</script>

<template>
  <div class="mainpage-wrapper"></div>
  <div class="mainpage">
    <HeroSection />

    <ProductsSection
      v-for="section in productsSections"
      :id="section.id"
      :key="section.id"
      :title="section.title"
      :items="getRandomProducts(section.itemCount)"
      :icon="section.icon"
      :offset="left"
      class="mainpage__products"
     />
  </div>
</template>

<style lang="scss" scoped>
.mainpage {
  padding: 3rem 0 6rem;
  overflow-x: hidden;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  transform: translateY(4px);
  @media only screen and(max-width: 800px) {
    padding-bottom: 4rem;
  }
  &__products {
    margin-bottom: 3rem;
    @media only screen and(max-width: 800px) {
      margin-bottom: 1rem;
    }
  }
  &__categories {
    margin-top: 10rem;
    @media only screen and(max-width: 800px) {
      margin-top: 6rem;
    }
  }
}
.mainpage-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: 5vw -5vh, 0 -30vw;
  background-size: 40%, 200%;
}
</style>