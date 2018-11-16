(function() {
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".run");
const closeButton = document.querySelector(".modal__content__close");
const cancelButton = document.querySelector(".modal__content__cancel");
const alertButton = document.querySelector(".modal__content__uninstall");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function message ()  {
  modal.classList.toggle("show-modal");
  function func() {
    alert( 'Shazam were removed from your computer' );
  }
  setTimeout(func, 500);
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
cancelButton.addEventListener("click", toggleModal);
alertButton.addEventListener("click", message);
window.addEventListener("click", windowOnClick);

})();