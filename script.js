function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}


let formMessage = document.getElementById('leave-message');
let messageSendButton = document.getElementsByClassName('btn-primary')[1];
let messageCloseButton = document.getElementById('messageCloseButton');
let message = document.getElementsByClassName('message-sent-alert')[0];
const modalContent = document.getElementById('exampleModal');


var msModal = new bootstrap.Modal(document.getElementById('exampleModal')); 

window.onload = function () {
    messageSendButton.onclick = function (e) {
        e.preventDefault();
        for (var i = 0; i < formMessage.elements.length; i++) {
            if (formMessage.elements[i].value === '' && formMessage.elements[i].hasAttribute('required')) {
                alert('There are some required fields!');
                return false;
            }

            if (formMessage.elements[i].type === 'email') {
                function checkEmail() {
                    let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    if (!regEx.test(formMessage.elements[i].value)) {
                        alert('Wrong email format');
                    }
                }
                checkEmail();
            }
        }
        alert('Message is sent!');
        formMessage.reset();
       

        msModal.hide();
        return false;
    };
};