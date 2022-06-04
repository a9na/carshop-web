<script setup>
import { useProducts } from '@/stores/products.js';
import { random } from 'lodash';
const productsStore = useProducts();
const route = useRoute();
const productRow = ref(null);
const { left } = useElementBounding(productRow);
const product = ref();
const BG_COUNT = 5;
const randN = ref();
const genDifferentNumber = (value, { from = 1, to }) => {
  let n = 0;
  do {
    n = random(from, to);
  } while (n === value);
  return n;
};
watchEffect(() => {
  const {
    params: { productId },
  } = route;
  product.value = productsStore.getProductById(productId);
  randN.value = genDifferentNumber(randN.value, { to: BG_COUNT });
});
</script>

<template>
  <div class="product-page">
    <img class="wrapper-img" :src="`/images/products/${product.imageUrl}`" />
    <div class="row-wrapper row-wrapper--overview">
      <div ref="productRow" class="row">
        <div class="product-overview">
          <div class="product-overview__image">
            <img
              :src="`/images/products/${product.imageUrl}`"
              alt="product image"
            />
          </div>
          <ProductInfo
            :key="route.params.productId"
            :item="product"
            class="product-overview__info"
          />
        </div>
      </div>
    </div>

    <div class="row-wrapper row-wrapper--products">
      <div class="row">
        <h3>Not the right fit for you? Check out these models.</h3>
      </div>
      <ProductGrid
        class="row-wrapper__product-grid"
        :items="productsStore.getRandomProducts(8)"
        :style="{
          paddingLeft: `${left}px`,
          paddingRight: `${left}px`,
        }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-page {
  padding-top: 5rem;
  @media only screen and(max-width: 1000px) {
    padding-top: 3rem;
  }
}
.wrapper-img {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 900px;
  max-width: 100vw;
  z-index: -1;
  filter: opacity(0.15) saturate(0.3);
}
.row-wrapper {
  &--overview {
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    @media only screen and(max-width: 1000px) {
      padding-bottom: 6rem;
    }
  }
  &--products {
    background-color: var(--pure-white);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1rem 0 6rem;
    h3 {
      font-size: var(--text-4);
      margin-bottom: 1.5rem;
    }
    @media only screen and(max-width: 1000px) {
      padding-top: 8rem;
    }
  }
  &__product-grid {
    padding-bottom: 8rem;
    @media only screen and(max-width: 800px) {
      padding-bottom: 5rem;
    }
    @media only screen and(max-width: 500px) {
      padding-bottom: 3rem;
    }
  }
}
.product-overview {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  padding-bottom: 26vh;
  @media only screen and(max-width: 1000px) {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
  }
  &__image {
    flex: 1;
    max-width: 700px;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    grid-column: 1 / 7;
    padding: 1rem;
    @media only screen and (max-width: 600px) {
      transform: scale(1.06);
      padding: 0.25rem;
    }
    img {
      transition: all 500ms cubic-bezier(0.26, 0.22, 0.27, 1.45);
      display: block;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      object-position: center;
      border-radius: var(--border-radius-lg);
      &:hover {
        transform: rotate(0deg) scale(1);
      }
    }
  }
  &__info {
    flex: 1;
    grid-column: 7 / -1;
    width: 100%;
    max-width: 700px;
  }
}
</style>