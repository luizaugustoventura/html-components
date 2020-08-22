let modalFade = document.getElementById("modal-fade");
let modalContent = document.getElementById("modal-content");

function openModal() {
    modalFade.style.display = 'flex';
}

function closeModal() {
    modalFade.style.display = 'none';
}

modalFade.onclick = closeModal;
modalContent.onclick = (event) => event.stopPropagation();