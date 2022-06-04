<script setup></script>

<template>
  <div class="header-logo">
    <img src="/images/logo.jpg" alt="logo" class="header-logo__img" />
  </div>
</template>

<style lang="scss" scoped>
.header-logo {
  height: 100%;
  overflow: hidden;
  transition: all 250ms ease-out;
  &:hover {
    .header-logo__img {
      filter: brightness(1.07);
    }
  }
  &__img {
    max-height: 100%;
    height: 60px;
    user-select: none;
    display: block;
    transition: all 250ms ease-out;
    transform: scale(1.4) translateY(2px);
  }
}
</style>