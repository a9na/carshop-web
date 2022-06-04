<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <div class="product-card">
    <RouterLink
      :to="{ name:'productPage', params: { productId: item.id } }"
      class="product-card__link">
      <div class="product__image">
        <img :src="`/images/products/${item.imageUrl}`" alt="product image" />
      </div>
    </RouterLink>
    <div class="product-card__content">
      <div class="product">
        <div class="product__info">
          <h5 class="product__name">{{ item.name }}</h5>
          <p class="product__description">
            {{ item.description }}
          </p>
        </div>
      </div>
      <div class="product-card__bottom">
        <ProductPrice class="product__price" :price=" item.price" />
        <div class="product__buttons">
          <button class="btn btn--primary">Add to cart
            <box-icon name='cart' type='solid' animation='tada' color='white' ></box-icon>
          </button>
          <button class="btn btn--secondary">Add to wishlist
            <box-icon name='bookmark-heart' color='white'></box-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  background: var(--pure-white);
  flex: 0 0 300px;
  outline: 2px transparent;
  transition: outline 500ms ease-out;
  &:hover {
    z-index: 10;
    box-shadow: var(--color-dark);
    .product__image {
      img {
        transform: scale(1.08) !important;
      }
    }
  }
  @media only screen and(max-width: 600px) {
    flex: 0 0 250px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.3rem 1rem 1rem;
  }

  &__bottom {
    margin-top: auto;
  }
  .product {
    &__image {
      overflow: hidden;
      display: block;
      img {
        transition: all 500ms ease-out;
        display: block;
        transform: scale(1);
      }
    }
    &__info {
      margin-bottom: 0.5rem;
    }
    &__name {
      font-size: var(--text-2);
      margin-bottom: 0.5em;
      margin-top: 0.4em;
      font-weight: 800;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      @media only screen and (max-width: 600px) {
        font-size: var(--text-lg);
      }
    }
    &__description {
      font-size: var(--text-md);
      line-height: 1.3;
      max-height: 5ch;
      overflow: hidden;
      @media only screen and (max-width: 600px) {
        font-size: var(--text-base);
      }
    }
    &__price {
      display: flex;
      justify-content: flex-end;
      align-items: baseline;
      margin: 0.75rem 0;
      &--currency {
        font-family: var(--font-style);
        font-weight: 300;
        font-size: var(--text-3);
        margin-right: 3px;
        @media only screen and (max-width: 600px) {
          font-size: var(--text-lg);
        }
      }
      &--amount {
        font-family: var(--font-style);
        font-weight: 600;
        font-size: var(--text-4);
        @media only screen and (max-width: 600px) {
          font-size: var(--text-2);
        }
      }
    }
    &__buttons {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 0.75rem;
    }
  }
}
</style>