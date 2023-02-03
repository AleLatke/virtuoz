const dugme = document.getElementsByClassName("button")[0];
const glMeni = document.getElementsByClassName("glMeni ")[0];

dugme.addEventListener('click', () => {
 glMeni.classList.toggle("active")
});
