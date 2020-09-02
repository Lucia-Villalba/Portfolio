const iconMenu = document.querySelector('#icon-menu');
const menu = document.querySelector('.menu');
/*
console.log(menu);
console.log(iconMenu);  */

// Le agrega la clase spread al menu cuando clickeo el icono
iconMenu.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

// Al clickear cualquier parte de la ventana
// Esconder menu al clickear fuera de el o en un item
window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target!=iconMenu){
        
    menu.classList.toggle("spread")
    }
})