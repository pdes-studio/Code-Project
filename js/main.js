

const btnMenu = document.querySelector('.btn-menu');
const Menu = document.querySelector('.menu');

btnMenu.addEventListener('click', function(){
  const menuAtivo = Menu.classList.toggle('active');  
});