<script setup>
const formData = reactive({
  name: '',
  email: '',
  message: '',
  subject: '',
});
</script>

<template>
  <form class="contact-form">
    <div class="contact-form__outer">
      <div class="contact-form__groups">
        <div class="contact-form__group">
          <label for="name">
            <box-icon type='solid' name='face'></box-icon>
            <span>Name* </span>
          </label>
          <input id="name" v-model="formData.name" type="text" autocomplete="off"/>
        </div>
        <div class="contact-form__group">
          <label for="email">
            <box-icon name='envelope' type='solid' ></box-icon>
            <span>Email adress* </span>
          </label>
          <input id="email" v-model="formData.email" type="email" autocomplete="off"/>
        </div>
        <div class="contact-form__group">
          <label for="email">
            <box-icon type='solid' name='notepad'></box-icon>
            <span>Subject* </span>
          </label>
          <input id="email" v-model="formData.email" type="email" autocomplete="off"/>
        </div>
      </div>
      <div class="contact-form__groups contact-form__groups--message">
        <div class="contact-form__group--message">
          <label for="message">
            <box-icon name='message-dots'></box-icon>
            <span>Message* </span>
          </label>
          <textarea id="message" v-model="formData.message"></textarea>
        </div>
      </div>
    </div>
    <button class="btn btn--primary">
      <span>Send message!</span>
      <box-icon class="icon" size="sm" type="solid" name="send"></box-icon>
    </button>
  </form>
</template>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  &__outer {
    display: flex;
    gap: 1rem;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      textarea {
        min-height: 200px;
      }
    }
  }
  &__group {
    display: flex;
    flex-direction: column;
    text-align: left;
    flex: 1;
    &--message {      
      display: flex;
      flex-direction: column;
      text-align: left;
      height: 100%;
      textarea {
        flex: 1;
      }
    }
  }
  &__groups {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 2;
    &--message {
      flex: 3;
    }
  }
  label {
    display: flex;
    gap: 0.5rem;
    font-size: var(--text-base);
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0.25rem;

    .icon {
      color: var(--color-dark);
    }
  }
  input,
  textarea {
    display: block;
    font-family: inherit;
    font-size: var(--text-lg);
    font-weight: 500;
    font-style: inherit;
    width: 500px;
    padding: 0.5rem;
    padding: 0.75rem 1rem;
    color: var(--pure-black);
    background: var(--white-opaque);
    border: 2px solid var(--color-dark);
    border-radius: var(--border-radius-lg);
    
    transition: all 250ms ease-out;
    width: 100%;
    &:focus {
      outline: none;
      background: var(--pure-white);
    }
  }
  .btn {
    background-color: var(--color-dark);
    color: var(--pure-white);
    display: flex;
    align-self: flex-end;
    .icon {
      margin-left: 0.5rem;
    }
    &:hover {
      .icon {
        transform: translateX(0.5rem);
      }
    }
  }
}
</style>