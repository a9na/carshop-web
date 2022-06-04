<script setup>
import { useProducts } from '@/stores/products.js';
import { useCategories } from '@/stores/categories.js';
const productsStore = useProducts();
const categoriesStore = useCategories();
const route = useRoute();
const category = ref();
const products = ref([]);
const query = ref('');
const filteredProducts = computed(() =>
   products.value.filter((product) => {
    if (!query.value) {
      return true;
    }
    return product.name.toLowerCase().includes(query.value.toLowerCase());
  })
);
const hasProducts = computed(() => filteredProducts.value?.length > 0);
watchEffect(() => {
  const {
    params: { categoryId },
  } = route;
  if (categoryId) {
    category.value = categoriesStore.getCategoryById(categoryId);
    products.value = productsStore.getProductsByCategory(category.value.tagId);
  }
});
</script>

<template>
  <div class="category-page">
    <div class="row category">
      <div class="category__head">
        <h2 class="category__title">{{ category.label }}</h2>
        <input
          v-if="products && products.length > 0"
          v-model.trim="query"
          type="search"
          placeholder="Search by keyword..."
        />
      </div>
      <div>
        <p v-if="!hasProducts" class="category__not-found">No products</p>
        <section v-else class="product-grid">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :item="product"
            class="product-card"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-page {
  background-image: black; ////
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  transform: translateY(4px);
}
.category {
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-repeat: no-repeat;
    background-size: 300px;
    background-position: -20px -50px;
    padding: 2rem 0 4rem;
    gap: 2rem;
    @media only screen and (max-width: 800px) {
      padding: 2rem 0 3rem;
    }
    @media only screen and (max-width: 600px) {
      padding: 1rem 0 2rem;
    }
    input {
      display: block;
      color: var(--blue-2-opaque);
      background: var(--pure-white);
      width: 500px;
      padding: 0.75rem 1rem;
      border: 2px solid var(--blue-1-opaque);
      border-radius: var(--border-radius-lg);
      font-family: inherit;
      font-size: var(--text-lg);
      font-weight: 500;
      transition: all 250ms ease-out;
      @media only screen and (max-width: 800px) {
        display: none;
      }
      &:focus {
        outline: none;
        border-color: var(--blue-1-opaque);
      }
      &::placeholder {
        color: var(--color-dark);
      }
    }
  }
  &__title {
    font-size: var(--text-8);
    text-align: center;
    @media only screen and (max-width: 800px) {
      font-size: var(--text-6);
    }
    @media only screen and (max-width: 600px) {
      font-size: var(--text-5);
    }
  }
  &__not-found {
    font-size: var(--text-3);
    font-weight: 500;
    text-align: center;
    padding: 4rem 0;
  }
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding-bottom: 10rem;
}
</style>