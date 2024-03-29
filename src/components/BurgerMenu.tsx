const BurgerMenu = () => {
  return (
    <button
      id="burger-menu-btn"
      class="flex flex-col justify-evenly lg:hidden items-center h-10 w-10"
      role="button"
    >
      <div class="h-[4px] w-full bg-black" />
      <div class="h-[4px] w-full bg-black" />
      <div class="h-[4px] w-full bg-black" />
    </button>
  );
};

export default BurgerMenu;
