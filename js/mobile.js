(() => {
  const refs = {
    openMobileBtn: document.querySelector("[data-mobile-open]"),
    closeMobileBtn: document.querySelector("[data-mobile-close]"),
    modal: document.querySelector("[data-mobile]"),
    body: document.querySelector("body"),
    menuList: document.querySelector(".mob-menu-list"),
  };

  refs.openMobileBtn.addEventListener("click", toggleMobile);
  refs.closeMobileBtn.addEventListener("click", toggleMobile);
  refs.menuList.addEventListener("click", removeMobile);

  function toggleMobile() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }

  function removeMobile() {
    refs.modal.classList.add("is-hidden");
    refs.body.classList.remove("no-scroll");
  }
})();
