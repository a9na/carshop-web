<script setup>
const emit = defineEmits(['close']);
</script>

<template>
  <div class="category-bar desktop">
    <div class="row">
      <nav class="category-bar__nav">
        <ul class="category-bar__list">
          <li class="category-bar__item">
            <RouterLink
              :to="`/category/new`"
              class="category-bar__link"
              @click="emit('close')"
            >
              New
            </RouterLink>
          </li>
          <li class="category-bar__item">
            <RouterLink
              :to="`/category/used`"
              class="category-bar__link"
              @click="emit('close')"
            >
              Used
            </RouterLink>
          </li>
          <li class="category-bar__item">
            <RouterLink
              :to="`/category/suvs`"
              class="category-bar__link"
              @click="emit('close')"
            >
              SUVs
            </RouterLink>
          </li>
          <li class="category-bar__item">
            <RouterLink
              :to="`/category/hatchbacks`"
              class="category-bar__link"
              @click="emit('close')"
            >
              Hatchbacks
            </RouterLink>
          </li>
          <li class="category-bar__item">
            <RouterLink
              :to="`/category/crossovers`"
              class="category-bar__link"
              @click="emit('close')"
            >
              Crossovers
            </RouterLink>
          </li>
          <li class="category-bar__item">
            <RouterLink
              :to="`/category/convertibles`"
              class="category-bar__link"
              @click="emit('close')"
            >
              Convertibles
            </RouterLink>
          </li>
          <li class="category-bar__item">
            <RouterLink
              :to="`/category/sedans`"
              class="category-bar__link"
              @click="emit('close')"
            >
              Sedans
            </RouterLink>
          </li>
          <li class="category-bar__item">
            <RouterLink
              :to="`/category/all`"
              class="category-bar__link"
              @click="emit('close')"
            >
              All
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-bar {
  background: var(--cornflower-blue);
  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .row {
    height: 100%;
  }
  &__list {
    display: flex;
  }
  &__item {
    margin: 0 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
  }
  &__link {
    padding: 0.4rem 1rem;
    border-radius: var(--border-radius);
    &:hover {
      background: var(--brown-800);
    }
  }
}
</style>