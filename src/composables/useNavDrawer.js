const isNavDrawerOpen = ref(false);

export default () => {
  const isCategoryDropdownOpen = ref(false);

  const openNavDrawer = () => {
    isNavDrawerOpen.value = true;
    isCategoryDropdownOpen.value = false;
  };

  const closeNavDrawer = () => {
    isNavDrawerOpen.value = false;
    isCategoryDropdownOpen.value = false;
  };

  const toggleCategoryDropdown = () => {
    isCategoryDropdownOpen.value = !isCategoryDropdownOpen.value;
  };

  return {
    isNavDrawerOpen: readonly(isNavDrawerOpen),
    isCategoryDropdownOpen: readonly(isCategoryDropdownOpen),
    openNavDrawer,
    closeNavDrawer,
    toggleCategoryDropdown,
  };
};