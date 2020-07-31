const imagenes = document.querySelectorAll('.img-gallery');
const imagenesLight = document.querySelector('.add-img');
const contenedorLight = document.querySelector('.image-light');
const iconMenu2 = document.querySelector('#icon-menu');

// cambio el src de la imagen por el de la imagen que clickeo
imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
})

// si doy click fuera de la imagen se cierra el lightbox
contenedorLight.addEventListener('click', (e)=>{
    if (e.target != imagenesLight) {
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('show-image')
        iconMenu2.style.opacity = '1';
    }
    
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('show-image');
    iconMenu2.style.opacity = '0';
}