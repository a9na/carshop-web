<script setup>
import useNavDrawer from '@/composables/useNavDrawer.js';
const {
  isNavDrawerOpen,
  isCategoryDropdownOpen,
  closeNavDrawer,
  toggleCategoryDropdown,
} = useNavDrawer();
</script>

<template>
  <div v-if="isNavDrawerOpen" class="nav-drawer tablet">
    <header class="nav-drawer__header row">
      <div class="icon__wrapper left" @click="closeNavDrawer">
        <box-icon class="icon" size="md" name="x" />
      </div>
      <RouterLink to="/" @click="closeNavDrawer">
        <HeaderLogo />
      </RouterLink>
      <div class="header__hamburger tablet icon__wrapper right">
        <a href="/account" class="nav-link-mobile icon__link">
        <box-icon name='user' color='#00003c'></box-icon>
        </a>
      </div>
    </header>
    <nav class="nav-drawer__nav row">
      <ul class="nav-drawer__list">
        <li class="nav-drawer__product">
          <span class="nav-drawer__link" @click="toggleCategoryDropdown">
            Shop
            <box-icon name='chevrons-down' type='solid' animation='fade-down' color='#00003c' ></box-icon>
          </span>
          <ul v-if="isCategoryDropdownOpen" class="nav-drawer-dropdown__list">
            <li class="nav-drawer-dropdown__product">
              <RouterLink
                :to="`/category/new`"
                class="nav-drawer-dropdown__link"
                @click="closeNavDrawer"
              >
                New
              </RouterLink>
            </li>
            <li class="nav-drawer-dropdown__product">
              <RouterLink
                :to="`/category/used`"
                class="nav-drawer-dropdown__link"
                @click="closeNavDrawer"
              >
              Used
              </RouterLink>
            </li>
            <li class="nav-drawer-dropdown__product">
              <RouterLink
                :to="`/category/suvs`"
                class="nav-drawer-dropdown__link"
                @click="closeNavDrawer"
              >
                SUVs
              </RouterLink>
            </li>
            <li class="nav-drawer-dropdown__product">
              <RouterLink
                :to="`/category/hatchbacks`"
                class="nav-drawer-dropdown__link"
                @click="closeNavDrawer"
              >
                Hatchbacks
              </RouterLink>
            </li>
            <li class="nav-drawer-dropdown__product">
              <RouterLink
                :to="`/category/crossovers`"
                class="nav-drawer-dropdown__link"
                @click="closeNavDrawer"
              >
               Crossovers
              </RouterLink>
            </li>
            <li class="nav-drawer-dropdown__product">
              <RouterLink
                :to="`/category/convertibles`"
                class="nav-drawer-dropdown__link"
                @click="closeNavDrawer"
              >
               Convertibles
              </RouterLink>
            </li>
            <li class="nav-drawer-dropdown__product">
              <RouterLink
                :to="`/category/sedans`"
                class="nav-drawer-dropdown__link"
                @click="closeNavDrawer"
              >
               Sedans
              </RouterLink>
            </li>
            <li class="nav-drawer-dropdown__product">
              <RouterLink
                :to="`/category/all`"
                class="nav-drawer-dropdown__link"
                @click="closeNavDrawer"
              >
               All
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="nav-drawer__product">
          <RouterLink
            to="/About"
            class="nav-drawer__link"
            @click="closeNavDrawer"
          >
            About us
          </RouterLink>
        </li>
        <li class="nav-drawer__product">
          <RouterLink
            to="/reviewpage"
            class="nav-drawer__link"
            @click="closeNavDrawer"
          >
            Reviews
          </RouterLink>
        </li>
        <li class="nav-drawer__product">
          <RouterLink
            to="/contact"
            class="nav-drawer__link"
            @click="closeNavDrawer"
          >
            Contact
          </RouterLink>
        </li>
      
      <li class="nav-drawer__product">
        <RouterLink
          to="/cart"
          class="nav-drawer__link"
          @click="closeNavDrawer"
        > 
          Cart
        </RouterLink>
      </li>
    </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.nav-drawer {
  height: 200vh;
  width: 100%;
  position: absolute;
  inset: 0;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }
  &__nav {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 450px;
  }
  &__list {
    flex: 1;
  }
  &__product {
    font-size: var(--text-3);
    font-weight: 600;
    margin: 0.5rem 0;
    text-transform: uppercase;
  }
  &__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-radius: var(--border-radius);
    cursor: pointer;
  }
}
.nav-drawer-dropdown {
  &__list {
    margin-bottom: 1rem;
  }
  &__product {
    font-weight: 400;
    text-transform: uppercase;
  }
  &__link {
    padding: 0.5rem 0;
  }
}
</style>