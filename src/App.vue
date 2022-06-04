<script setup></script>

<template>
  <Header />

  <main class="container main">
    <RouterView />
  </main>

  <Footer />
</template>

<style lang="scss">
@import '@/assets/styles/variables';
* {
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  scrollbar-color: var(--color-dark);
  scroll-behavior: smooth;
}
body {
  font-family: var(--font-style);
  line-height: 1.5;
  font-weight: 400;
  overflow-x: hidden;
  position: relative;
}

::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: var(--pure-white);
}
 ::-webkit-scrollbar-thumb {
  background: var(--color-lighter);
  border-radius: 100vw;
&:hover {
  background: var(--color-dark);
}}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
ul {
  list-style: none;
}
img {
  max-width: 100%;
}
a {
  color: inherit;
  text-decoration: none;
  display: block;
}
.no-scrollbar {
  overflow: hidden;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-style);
  line-height: 1.02;
  font-weight: 700;
}
h2 {
  font-size: var(--text-6);
  @media only screen and (max-width: 800px) {
    font-size: var(--text-4);
  }
  @media only screen and (max-width: 800px) {
    font-size: var(--text-3);
  }
}
button {
  font: inherit;
  font-size: var(--text-base);
  color: inherit;
  transition: all 250ms ease-out;
}
.row {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.container {
  width: 100%;
}

.btn {
  padding: 0.9rem 2.2rem;
  margin-bottom: 4px;
  text-transform: uppercase;
  border: none;
  border-radius: var(--border-radius);
  color: var(--pure-white);
  font-size: var(--text-base);
  font-weight: 700;
  cursor: pointer;
  &--primary {
    background: var(--color-dark);
    &:hover {
      background: var(--cornflower-blue);
    }
  }
  &--secondary {
    background: var(--color-dark);
    &:hover {
      background: var(--cornflower-blue);
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 0.9rem 1.5rem;
    font-size: var(--text-sm);
  }
}
.desktop {
  @media only screen and (max-width: 800px) {
    display: none !important;
  }
}
.tablet {
  @media only screen and (min-width: 800px) {
    display: none !important;
  }
  display: block;
}
.mobile {
  @media only screen and (min-width: 600px) {
    display: none !important;
  }
  display: block;
}
.main {
  margin-top: 60px;
  flex: 1;
  display: flex;
  flex-direction: column;
  @media only screen and(min-width: 800px) {
    padding-top: 4rem;
  }
}
</style>