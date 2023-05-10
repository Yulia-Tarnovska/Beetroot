let body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "#2B3040";


function openTab(evt, tabName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    if(evt.currentTarget.className) {
      evt.currentTarget.className += " active";
  }
}

(function reset_activeClass() {
  let tablinks = document.getElementsByClassName("tablinks");
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[0].style.display = "block";
  }
  tabcontent[0].style.display = "block";
  tablinks[0].className = "active";
  openTab({}, 'information');
})();

function buyFunction() {
    window.open("https://store.epicgames.com/ru/p/far-cry-6", "_blank");
  }


  // $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // }); 
  // $('.slider-nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: true,
  //   focusOnSelect: true
  // });
 
  // $('a[data-slide]').click(function(e) {
  //   e.preventDefault();
  //   var slideno = $(this).data('slide');
  //   $('.slider-nav').slick('slickGoTo', slideno - 1);
  // });