let activeMenu = document.querySelectorAll('.text-menu');
activeMenu.forEach(btn => btn.addEventListener("click",(e) => {
     e.preventDefault();
     const activeButton = document.querySelector(".text-menu.active")
     activeButton.classList.remove("active");
     activeButton.children[0].classList.replace('fa-solid', 'fa-regular');
     btn.children[0].classList.add("fa-solid");
     btn.classList.add("active");
  }));


function changeGradient(classValue) {
  let header = document.getElementsByClassName('header-wrapper')[0];
  header.classList.forEach(item => {
    if(item.includes('gradient')) {
      header.classList.remove(item)
    }
  }) 
  header.classList.add(classValue);
}


const smoothButton = document.getElementById("smoothScroll");
const whatWeDo = document.getElementById("projects-wrapper"); 

document.getElementById('img-gallery').addEventListener('click', function(e) {
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
})

let formSubmit = document.getElementById('submit');
formSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Form was submitted')
})

// function initMap() {
//   const myLatLng = { lat: -25.363, lng: 131.044 };
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: myLatLng,
//   });

//   new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: "Hello World!",
//   });
// }

// window.initMap = initMap;

// const map = new google.maps.Map(document.getElementById("map"), mapOptions);

// let marker = createHTMLMapMarker({
//   latlng: latLng,
//   map: map,
//   html: `<img id="marker-img" src="./assets/Pin.png">`
// });

// marker.addListener("click", () => {
//   alert("It's your location");
// });

