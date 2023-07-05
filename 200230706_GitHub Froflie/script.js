const myImg = document.querySelector('.my_img')
const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')
// console.log(sidebarOverlay)


function opneSidebar() {
    sidebar.classList.remove('is-active');
    sidebarOverlay.classList.remove('is-active');
}

myImg.addEventListener('click', opneSidebar)

function closSidebar() {
    sidebar.classList.add('is-acrive');
    sidebarOverlay.classList.add('is-active');
}
sidebarOverlay.addEventListener('click', closSidebar)