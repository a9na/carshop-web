<script setup>
defineProps({
  title: String,
  offset: Number | String,
  items: Array,
  icon: Object,
});
</script>

<template>
  <section class="products-section">
    <div class="title-box row">
      <box-icon
        v-if="icon"
        class="icon"
        :name="icon.name"
        :type="icon.type || ''"
      />
      <h2>{{ title }}</h2>
    </div>
    <ProductGrid
      class="products-section__grid"
      :items="items"
      :style="{
        paddingLeft: `${offset}px`,
        paddingRight: `${offset}px`,
      }"
    />
  </section>
</template>

<style lang="scss" scoped>
.products-section {
  padding-top: 6rem;
  padding-bottom: 0;
  &__grid {
    margin-top: 2rem;
  }
}

.title-box {
  display: flex;
  align-items: center;
  position: relative;
  .icon {
    position: absolute;
    fill: var(--burg-600-opaque);
    z-index: -1;
    &[name='trending-up'] {
      left: -3rem;
      height: 160px;
      width: 160px;
    }
    &[name='discount'] {
      height: 120px;
      width: 120px;
      left: -2rem;
    }
  }
}
</style>