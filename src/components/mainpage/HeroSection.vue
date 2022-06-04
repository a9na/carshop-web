<script setup></script>

<template>
  <section class="section-hero row">
    <div class="section-hero__content">
      <h1 class="section-hero__title">Welcome to our car shop.</h1>
      <div class="section-hero__button">
        <a href="#offer-month">
          <button class="btn btn--primary">Show me some cars!</button>
        </a>
      </div>
    <div class="radar-spinner" :style="spinnerStyle">
      <div class="circle">
        <div class="circle-inner-container">
          <div class="circle-inner"></div>
        </div>
      </div>
      <div class="circle">
        <div class="circle-inner-container">
          <div class="circle-inner"></div>
        </div>
      </div>
      <div class="circle">
        <div class="circle-inner-container">
          <div class="circle-inner"></div>
        </div>
      </div>
      <div class="circle">
        <div class="circle-inner-container">
          <div class="circle-inner"></div>
        </div>  
        </div>
      </div>  
      <div class="section-hero__info">Looking for a perfect family car? Or need a service for your car? We've got it all.</div>
      <div class="wrapper">
        <img class="wrapper__image-one" src="/images/family-car.jpg" alt="family car" />
        <img class="wrapper__image-two" src="/images/car-repair.jpg" alt="car repair" />
      </div>
   </div> 
  </section>
</template>

<style lang="scss" scoped>
.section-hero {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);
  padding-bottom: 0;
  padding-top: 0;
  &row {
    position: relative;
  }
  @media only screen and(max-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and(max-width: 600px) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
  &__content {
    grid-column: 1 / span 7;
    transform: translateY(-2rem);
    z-index: 2;
    @media only screen and(max-width: 1000px) {
      grid-column: 1 / span 3;
      width: max-content;
      transform: translateY(0);
    }
    @media only screen and(max-width: 600px) {
      grid-column: 1 / -1;
      transform: translateY(0);
      width: fit-content;
      padding: 2rem 0;
      width: 100%;
    }
  }
  &__title {
    color: var(--color-dark);
    font-size: var(--text-8);
    margin-top: 80px;
    letter-spacing: 6px;
    text-shadow: rgb(20, 91, 243) 0 0, black 0 0;
    transition: text-shadow 200ms; 
    &:hover {
      text-shadow: rgb(20, 91, 243) -4px 0, black 4px 0; //plus
    }
    @media only screen and(max-width: 1200px) {
      font-size: var(--text-7);
    }
    @media only screen and(max-width: 800px) {
      font-size: var(--text-6);
    }
    @media only screen and(max-width: 600px) {
      font-size: var(--text-5);
    }
}

&__button {
    margin-top: 2rem;
    display: inline-block;
    position: relative;
  }
  
&__info {
  font-family: var(--font-style);
  font-size: 40px;
  color: var(--color-dark);
  margin-top: 100px;
  margin-bottom: -50px;
  text-align: justify;
  white-space: nowrap;
}
.radar-spinner {
  display: inline-block;
  height: 60px;
  width: 60px;
  position: absolute;
  margin-top: 28px;
  margin-left: 10px;
}

.radar-spinner .circle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  animation: radar-spinner-animation 2s infinite;
}

.radar-spinner .circle:nth-child(1) {
  padding: calc(60px * 5 * 2 * 0 / 110);
  animation-delay: 300ms;
}

.radar-spinner .circle:nth-child(2) {
  padding: calc(60px * 5 * 2 * 1 / 110);
  animation-delay: 300ms;
}

.radar-spinner .circle:nth-child(3) {
  padding: calc(60px * 5 * 2 * 2 / 110);
  animation-delay: 300ms;
}

.radar-spinner .circle:nth-child(4) { 
  padding: calc(60px * 5 * 2 * 3 / 110);
  animation-delay: 0ms;
}
.radar-spinner .circle-inner,
.radar-spinner .circle-inner-container {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: calc(60px * 5 / 110) solid transparent;
}

.radar-spinner .circle-inner {
  border-left-color: var(--color-dark);
  border-right-color: var(--color-dark);
}

@keyframes radar-spinner-animation {
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
}

.wrapper {
  margin-top: 80px;
  width: 200%;
  height: auto;
  display: flex;

&__image-one {
  flex: 50%;
  margin: 0 -30px;
}
&__image-two {
  flex: 50%;
}
}
</style>