const img = document.getElementById('img-gallery');

img.addEventListener('click', function(e) {
    const tgt = e.target;
    const zoomed = document.querySelectorAll(".zoomed");
    if (zoomed.length) {
      zoomed[0].classList.remove("zoomed");
      zoomed[0].style.zIndex = "1";
    }
    if (zoomed.length && (zoomed[0].alt === tgt.alt)) {
      return;
    }
    tgt.style.zIndex = "10";
    tgt.classList.toggle('zoomed')
  });

