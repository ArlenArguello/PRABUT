const navCont = document.querySelector('.navegacion-contenedor');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = navCont.getAttribute('data-visible');
    
    if(visibility ==='false'){
        navCont.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true)
    }else if (visibility ==='true'){
        navCont.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false)

    }
})