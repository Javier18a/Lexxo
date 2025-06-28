// Código JavaScript para la tienda de productos

function showProductInfo(producto) {
  document.getElementById('modal-img').src = producto.imagen;
  document.getElementById('modal-nombre').textContent = producto.nombre;
  document.getElementById('modal-precio').textContent = 'Precio: ' + producto.precio;
  document.getElementById('modal-material').textContent = 'Material: ' + producto.material;
  if (producto.oferta) {
    document.getElementById('modal-oferta').textContent = 'Oferta: ' + producto.oferta;
    document.getElementById('modal-oferta').style.display = 'block';
  } else {
    document.getElementById('modal-oferta').style.display = 'none';
  }
  document.getElementById('product-modal').style.display = 'flex';
}
function closeProductInfo() {
  document.getElementById('product-modal').style.display = 'none';
}

//Animación de entrada 

const sliderImages = [
  "img/product - LX/Logo-black-removebg-preview.png",
  "img/product - LX/C1-removebg-preview.png",
  "img/product - LX/S2-removebg-preview.png",
  "img/product - LX/16.png",
  "img/product - LX/C4-removebg-preview.png",
  "img/product - LX/S5-removebg-preview.png",
  "img/product - LX/20-removebg-preview.png"
];
let sliderIndex = 0;
const sliderImg = document.getElementById('slider-img');

function showNextImage() {
  sliderImg.style.opacity = 0;
  setTimeout(() => {
    sliderIndex = (sliderIndex + 1) % sliderImages.length;
    sliderImg.src = sliderImages[sliderIndex];
    sliderImg.onload = () => {
      sliderImg.style.opacity = 1;
    };
  }, 500);
}
setInterval(showNextImage, 2200);



// Smooth scroll para enlaces internos

document.querySelectorAll('.smooth-scroll').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});