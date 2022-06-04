<script setup>
import useCategoryBar from '@/composables/useCategoryBar';
const { categoryBarOpen, toggleCategoryBar, closeCategoryBar } =
  useCategoryBar();
</script>

<template>
  <nav class="nav desktop">
    <ul class="nav__list nav__list--left">
      <li class="nav__item">
        <span class="nav__link" @click="toggleCategoryBar">
          Shop
          <box-icon name='chevrons-down' type='solid' animation='fade-down' color='#00003c' ></box-icon>
        </span>
      </li>
      <li class="nav__item">
        <RouterLink to="/About" class="nav__link">About Us</RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink to="/ReviewPage" class="nav__link">Reviews</RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink to="/Service" class="nav__link">Service</RouterLink>
      </li>
    </ul>
    <ul class="nav__list nav__list--right">
      <li class="nav__item">
        <RouterLink to="/Contact" class="nav__link with-icon">
        <box-icon name='contact' type='solid' color='white'></box-icon>
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink to="/Cart" class="nav__link with-icon">
        <box-icon type='solid' name='cart' color='white'></box-icon>
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink to="/Wishlist" class="nav__link with-icon">
        <box-icon name='bookmark-heart' color='white'></box-icon>
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink to="/Account" class="nav__link with-icon">
        <box-icon name='user' color='white'></box-icon>
        </RouterLink>
      </li>
    </ul>

    <transition name="fade">
      <NavCategoryBar
        v-show="categoryBarOpen"
        class="nav__category-bar"
        @close="closeCategoryBar"
      />
    </transition>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-left: 2rem;
  &__list {
    display: flex;
    gap: 1rem;
  }
  &__item {
    display: flex;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-dark)
  }
  &__link {
    display: flex;
    align-items: center;
    padding: 0.6rem 1.4rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all 250ms ease-out;
    .inner-icon {
      margin-left: 0.5rem;
      width: 18px;
      height: 18px;
    }
    &.with-icon {
      padding: 0.6rem;
      border-radius: 100rem;
      background: var(--color-dark);
      &:hover {
        background: var(--cornflower-blue);
      }
      .icon {
        height: 26px;
        width: 26px;
      }
    }
    &:hover {
      background: var(--cornflower-blue);
    }
  }
  &__category-bar {
    width: 100%;
    height: 50px;
    position: absolute;
    top: 60px;
    left: 0;
    box-shadow: var(--box-shadow-pastel-blue-sm);
  }
}
</style>