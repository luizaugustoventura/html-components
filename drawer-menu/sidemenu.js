let container = document.getElementById("sidemenuContainer");
let fakeContent = document.getElementById("fakeContent");
let menu = document.getElementById("sidemenu");
let open = false;

function openMenu() { 
    container.style.width = open ? '100%' : 0;
    fakeContent.style.width = open ? '100%' : 0;
    menu.style.width = open ? '150px' : 0;
    open = open ? false : true; 
}

fakeContent.addEventListener('click', openMenu);