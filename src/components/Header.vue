<script setup>
import useNavDrawer from '@/composables/useNavDrawer.js';
import useCategoryBar from '@/composables/useCategoryBar.js';
const { categoryBarOpen, closeCategoryBar } = useCategoryBar();
const { openNavDrawer } = useNavDrawer();
const { y } = useWindowScroll();
</script>

<template>
  <div class="container header__wrapper"
    :class="{ colored: y > 1 || categoryBarOpen }">
    <div class="row">
      <header class="header">
        <div
          class="header__hamburger icon__wrapper left tablet"
          @click="openNavDrawer"
        >
          <box-icon class="icon" size="md" name="menu-alt-left" />
        </div>
        <RouterLink to="/" class="router-link" @click="closeCategoryBar">
          <HeaderLogo />
        </RouterLink>
        <NavBar />
        <div class="header__hamburger icon__wrapper right tablet">
          <a href="/Account">
            <box-icon name='user' color='#00003c'></box-icon>
          </a>
        </div>
        <NavDrawer />
      </header>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &__wrapper {
    transition: all 250ms ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    &.colored {
      background: var(--grey-shade);
      box-shadow: var(--grey-shade);
    }
  }
  .icon {
    &__wrapper {
      cursor: pointer;
      padding: 1rem;
      display: flex;
      &.left {
        margin-left: -1rem;
      }
      &.right {
        margin-right: -1rem;
      }
    }
  }
}
</style>