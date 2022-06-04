<script setup></script>

<template>
  <div class="contact-page">
    <div class="row">
      <div class="contact">
        <div class="contact-header">
          <h2 class="contact-header__title">Contact the team!</h2>
          <p class="contact-header__description">
            Fill out the form below to get in touch with one of our team members.
            We will try to get to you shortly.
          </p>
        </div>
        <div class="contact__content">
          <ContactForm class="contact__content--form" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-page {
  padding: 2rem 0 6rem;
  flex: 1;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateY(4px);
}
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 6rem;
  &__content {
    display: flex;
    justify-content: space-around;
    gap: 4rem;
    width: 100%;
    max-width: 1400px;
    @media only screen and (max-width: 1000px) {
      flex-direction: column;
      gap: 4rem;
    }
    &--card {
      flex: 1;
    }
    &--form {
      flex: 2;
    }
  }
}
.contact-header {
  margin-bottom: 4rem;
  &__title {
    font-size: var(--text-5);
    margin-bottom: 0.25em;
  }
  &__description {
    font-size: var(--text-l);
    font-weight: bold;
    color: var(--color-dark);
  }
}
</style>