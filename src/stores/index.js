import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state() {
    return {
      footerItems: {
        navigation: [
          { label: 'Mainpage', url: '/' },
          { label: 'Offer', url: '/category/all' },
          { label: 'About us', url: '/about' },
          { label: 'Review', url: '/ReviewPage' },
          { label: 'Contact', url: '/contact' },
          { label: 'Cart', url: '/cart' },
          { label: 'Account', url: '/account' },
        ],
        location: [
          { label: 'adress city' },
        ],
        workinghours: [
          { label: 'Monday- Friday' },
          { label: '9:00 am to 5:00 pm' },
        ],
        contact: [{ label: 'carshop@gmail.com' }, { label: 'phone number' }],
        info: [
          { label: 'Trade/Sell' },
          { label: 'Home delivery' },
          { label: 'Warranty programs' },
          { label: 'Stores' },
          { label: 'Service' },
          { label: 'Specials' },
          { label: 'Careers' },
        ],
        policies: [
          { label: 'Privacy policy' },
          { label: 'Terms & conditions' },
          { label: 'Cookie policy' },
        ],
      },
    };
  },
  getters: {},
  actions: {},
});