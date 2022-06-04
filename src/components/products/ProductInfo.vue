<script setup>
import { useCategories } from '@/stores/categories.js';
const props = defineProps({
  item: Object,
});
const { getCategoryTags } = useCategories();
const fullTags = getCategoryTags(props.item.tags);
const { width } = useWindowSize();
</script>

<template>
  <div class="product-info">
    <div class="product-info--inner">
      <div class="product-info__content">
        <div class="product-info__categories">
          <CategoryTag
            v-for="tag in fullTags"
            :key="tag.id"
            :name="tag.label"
          />
        </div>
        <h2 class="product-info__title">
          {{ item.name }}
        </h2>
        <p class="product-info__description">
          {{ item.description }}
        </p>
        <div class="product-info__price-bar">
          <ProductPrice
            :price="item.price"
            size="lg"
            class="product-info__price"
          />
        </div>
      </div>
      <div class="product-info__buttons">
        <button class="btn btn--primary">
          {{ width > 600 ? 'Add to cart' : 'Add' }}
          <box-icon name='cart' type='solid' animation='tada' color='white' ></box-icon>
        </button>
        <button class="btn btn--secondary">
          {{ width > 600 ? 'Add to wishlist' : 'Add'}}
            <box-icon name='bookmark-heart' color='white'></box-icon>
          </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-info {
  background-color: var(--pure-white);
  position: relative;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--color-dark);
  margin-right: 1rem;
  @media only screen and (max-width: 800px) {
    margin-left: -1rem;
  }
  .product-info--inner {
    background: var(--pure-white);
    padding: 2.5rem 3rem 2rem 2.5rem;
    border-radius: var(--border-radius-lg);
    @media only screen and (max-width: 800px) {
      padding: 2.25rem 1.5rem 1.75rem;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-size: var(--text-6);
    margin-top: 0.4em;
    margin-bottom: 0.5em;
    @media only screen and (max-width: 800px) {
      font-size: var(--text-5);
    }
  }
  &__description {
    max-width: 8ch;
    font-size: var(--text-xl);
    @media only screen and (max-width: 800px) {
      font-size: var(--text-md);
    }
  }
  &__price-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    gap: 2rem;
    min-height: 4rem;
    @media only screen and (max-width: 800px) {
      margin-top: 1.75rem;
      min-height: 3.25rem;
    }
  }
  &__price {
    margin-left: auto;
  }
  &__buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
    margin-left: auto;
    gap: 0.5rem;
    @media only screen and (max-width: 800px) {
      justify-content: space-between;
      > .btn {
        flex: 1;
      }
    }
  }
  &__categories {
    display: flex;
    position: absolute;
    margin-top: -1rem;
    margin-left: 2rem;
    gap: 0.25rem;
    @media only screen and (max-width: 800px) {
      left: 1rem;
    }
  }
}
</style>