'use strict';

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const btn = document.getElementById("btn-modal");
const start = document.getElementById("start");
let modal = document.getElementById("modal");
let span = document.getElementsByClassName("close")[0];

const checkEnableButton = () => {
  btn.disabled = !(
      firstName.value && 
      lastName.value && 
      email.value &&
      start.value !== 'Choose'
   )
}


firstName.addEventListener('change', checkEnableButton)
lastName.addEventListener('change', checkEnableButton)
start.addEventListener('change', checkEnableButton)
email.addEventListener('change', checkEnableButton)

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
