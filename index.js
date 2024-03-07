const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const gallery = document.querySelector('.gallery');


gallery.addEventListener('wheel', (e) => {
  e.preventDefault();
  gallery.scrollLeft += e.deltaY;
  gallery.style.scrollBehavior = 'auto';
});


rightBtn.addEventListener('click', () => {
  gallery.style.scrollBehavior = 'smooth';
  gallery.scrollLeft += 1200;
});


leftBtn.addEventListener('click', () => {
  gallery.style.scrollBehavior = 'smooth';
  gallery.scrollLeft -= 1200;
})