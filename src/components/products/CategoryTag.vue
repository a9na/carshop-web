<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <div class="category">
    <p>{{ name }}</p>
  </div>
</template>

<style lang="scss" scoped>
.category {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: var(--text-sm);
  background: var(--burg-200);
  color: var(--burg-800);
  font-weight: bold;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  color: var(--burg-800);
  transition: all 250ms ease-out;
  &:hover {
    background: var(--blue-1-opaque);
  }
}
</style>