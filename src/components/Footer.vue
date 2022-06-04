<script setup>
import { useStore } from '@/stores/index.js';
const { footerItems } = useStore();
</script>

<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="row">
        <section class="footer__grid">
          <div class="footer__column">
            <h4 class="footer__column-title">Navigation</h4>
            <ul class="footer__list">
              <li
                v-for="item in footerItems.navigation"
                :key="item.label"
                class="footer__list-item_nav"
              >
                <RouterLink :to="item.url" class="footer_link">
                  {{ item.label }}
                </RouterLink>
              </li>
            </ul>
          </div>
          <div class="footer__column desktop">
            <h4 class="footer__column-title">Location</h4>
            <ul class="footer__list">
              <li
                v-for="item in footerItems.location"
                :key="item.label"
                class="footer__list-item"
              >
                <a href="#" class="footer_link">{{ item.label }}</a>
              </li>
            </ul>
            <h4 class="footer__column-title">Working hours</h4>
            <ul class="footer__list">
              <li
                v-for="item in footerItems.workinghours"
                :key="item.label"
                class="footer__list-item"
              >
                <a href="#" class="footer_link">{{  item.label }}</a>
              </li>
            </ul>
          </div>
          <div class="footer__logo desktop">
            <img src="/images/logo.jpg" alt="logo" />
          </div>
          <div class="footer__column right">
            <h4 class="footer__column-title">Contact</h4>
            <ul class="footer__list">
              <li
                v-for="item in footerItems.contact"
                :key="item.label"
                class="footer__list-item"
              >
                <a href="#" class="footer_link">{{ item.label }}</a>
              </li>
            </ul>
          </div>
          <div class="footer__column right">
            <h4 class="footer__column-title">Info</h4>
            <ul class="footer__list">
              <li
                v-for="item in footerItems.info"
                :key="item.label"
                class="footer__list-item_info"
              >
                <a href="#" class="footer_link">{{ item.label }}</a>
              </li>
            </ul>
            <h4 class="footer__column-title">Policies</h4>
            <ul class="footer__list">
              <li
                v-for="item in footerItems.policies"
                :key="item.label"
                class="footer__list-item_policies"
              >
                <a href="#" class="footer_link">{{ item.label }}</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <section class="footer__bottom">
      <div class="row">
        <div class="footer__bottom-content">
          <div class="footer__text">
            Find us on
          </div>
          <div class="footer__socials">
            <a href="#" class="footer__social-link">
              <box-icon type='logo' name='facebook-square'></box-icon>
            </a>
            <a href="#" class="footer__social-link">
              <box-icon name='instagram-alt' type='logo' color='white' ></box-icon>
            </a>
            <a href="#" class="footer__social-link">
              <box-icon name='youtube' type='logo' color='white' ></box-icon>
            </a>
            <a href="#" class="footer__social-link">
              <box-icon name='twitter' type='logo' color='white' ></box-icon>
            </a>
            <a href="#" class="footer__social-link">
              <box-icon name='linkedin-square' type='logo' color='white' ></box-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  z-index: 20;
  &__top {  
    background: var(--grey-shade);
    padding: 4rem 0 5rem;
    @media only screen and (max-width: 800px) {
      padding: 5rem 0;
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    gap: 2rem;
    @media only screen and (max-width: 800px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      row-gap: 3rem;
    }
  }
  &__column {
    &.right {
      text-align: right;
    }
    &.center {
      text-align: center;
    }
    @media only screen and (max-width: 800px) {
      &:nth-of-type(4) {
        text-align: center;
      }
    }
    @media only screen and (max-width: 600px) {
      text-align: left !important;
    }
  }
  &__column-title {
    font-family: var(--font-style);
    text-transform: uppercase;
    color: var(--pure-black);
    font-size: var(--text-md);
    margin-bottom: 0.7rem;
  }
  &__list {
    color: var(--pure-black);
    font-size: var(--text-base);
    font-weight: 500;
    margin-bottom: 20px;
  }
  &__list-item {
    padding: 0.2rem 0;
    margin-bottom: 0.5rem;
    &_nav  {
    &:hover {
      text-decoration: underline;
      }
    }
    &_info {
    &:hover {
      text-decoration: underline;
      }
    }
    &_policies {
    &:hover {
      text-decoration: underline;
      }
    }
  }
  &__logo {
    max-width: 100%;
    padding: 0 3rem;
    overflow: hidden;
    img {
      max-height: 200px;
      border-radius: var(--border-radius);
    }
  }
  &__bottom {
    background: var(--pure-black);
  }
  &__bottom-content {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    font-weight: 500;
    justify-content: center;
    gap: 1rem;
    @media only screen and (max-width: 600px) {
      padding: 2rem 0;
      flex-direction: column-reverse;
      gap: 2rem;
    }
  }
  &__socials {
    display: flex;
    gap: 2rem;
    transition: 0.5s;
  }
  &__text {
    display: flex;
    color: var(--pure-white);
    text-transform: uppercase;
    text-align: center;
  }
  &__social-link {
    &:hover {
        margin-top: -5px;
      }
    }
  }
</style>