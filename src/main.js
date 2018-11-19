(function() {
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".run");
const closeButton = document.querySelector(".modal__close");
const cancelButton = document.querySelector(".modal__cancel");
const alertButton = document.querySelector(".modal__uninstall");

const toggleModal = function() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function message ()  {
  modal.classList.toggle("show-modal");
  setTimeout(() => alert('Shazam were removed from your computer'), 0);
}

function initModal() {
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
cancelButton.addEventListener("click", toggleModal);
alertButton.addEventListener("click", message);
window.addEventListener("click", windowOnClick);
}
initModal();
})();