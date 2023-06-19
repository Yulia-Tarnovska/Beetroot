let formAbout = document.getElementById('form-about');
let aboutAlert = document.getElementsByClassName('about-alert')[0];
let aboutCloseButton = document.getElementById('aboutCloseButton');
let aboutSubmit = document.getElementById('aboutSubmit');

    window.onload = function () {
        let formAbout = document.getElementById('form-about');
        aboutSubmit.onclick = function (){
          for(var i=0; i < formAbout.elements.length; i++){
            if(formAbout.elements[i].value === '' && formAbout.elements[i].hasAttribute('required')){
              alert('There are some required fields!');
              return false;
            }

              if(formAbout.elements[i].type === 'email'){
                    let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    if(!regEx.test(formAbout.elements[i].value))
                    {
                    alert('Wrong email format');
                    return false;
                }
            
              }
          }
          alert('Your message is sent');
          formAbout.reset();
          return false;
        }
      }