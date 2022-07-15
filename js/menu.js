
// -------MENU--------

const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu-navegacion');

// console.log(menu)
// console.log(hamburguesa)

hamburguesa.addEventListener('click', ()=>{ menu.classList.toggle('spread')
})

window.addEventListener('click', e=>{
  if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguesa )
  {
  menu.classList.toggle('spread')
  }
})


// ======FORMULARIO DE INICIO DE SESIÒN Y  REGISTRO =====

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("elegir");


function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";


}
function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "120px";


}

//============== TEMA TABS =============================

const tabsContainer = document.querySelector('.tema-tabs');
temasSeccion = document.querySelector('.temas-seccion');

tabsContainer.addEventListener('click', (e) =>{
  if(e.target.classList.contains('tab-item') && !e.target.classList.contains('active')){
    tabsContainer.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    const target = e.target.getAttribute('data-target');
    temasSeccion.querySelector('.tema-content.active').classList.remove('active');
    temasSeccion.querySelector(target).classList.add('active');
  }
});








