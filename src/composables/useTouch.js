export default () => {
  const isTouchDevice = computed(
    () =>
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
  );

  return {
    isTouchDevice,
  };
};