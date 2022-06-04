<script setup></script>

<template>
  <div class="about-page">
    <div class="row">
      <h1 class="about-page__title">About us</h1>
        <div class="about-page__info"> From used cars to completely new ones, we've got it all.</div>
        <div class="about-page__images">  
          <img class="about-page__images___one" src="/images/products/usedcars.jpg" alt="used cars" />
          <img class="about-page__images___two" src="/images/products/newcars.jpg" alt="new cars" />
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  padding: 2rem 0 6rem;
  flex: 1;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateY(4px);
  font-size: var(--text-6);
  font-family: var(--font-style);
  &__title {
    font-size: var(--text-6);
    @media only screen and (max-width: 800px) {
      font-size: var(--text-5);
    }
    @media only screen and (max-width: 600px) {
      font-size: var(--text-4);
    }
  }
  &__info {
    margin: 25px 25px 0 0;
  }
  &__images {
      margin-top: 80px;
      width: 110%;
      height: auto;
      display: flex; 
    &___one {
      flex: 50%;
      margin: 0 -25px;
    }
    &___two {
      flex: 50%;
    }
}    

}
</style>