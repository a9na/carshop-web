<script setup>
const props = defineProps({
  size: String,
  price: Number | String,
});
</script>

<template>
  <div class="product-price">
    <span class="product-price--currency" :class="{ lg: props.size === 'lg' }">
      USD
    </span>
    <span class="product-price--amount" :class="{ lg: props.size === 'lg' }">
      {{ price }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.product-price {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  &--currency {
    font-family: var(--font-style);
    font-weight: 300;
    font-size: var(--text-3);
    color: var(--blue-2-opaque);
    margin-right: 5px;
    margin-bottom: -2px;
    @media only screen and (max-width: 600px) {
      font-size: var(--text-lg);
    }
    &.lg {
      font-size: var(--text-4);
      @media only screen and (max-width: 800px) {
        font-size: var(--text-3);
      }
    }
  }
  &--amount {
    font-family: var(--font-style);
    font-weight: 600;
    font-size: var(--text-4);
    @media only screen and (max-width: 600px) {
      font-size: var(--text-2);
    }
    &.lg {
      font-size: var(--text-5);
      @media only screen and (max-width: 800px) {
        font-size: var(--text-4);
      }
    }
  }
}
</style>