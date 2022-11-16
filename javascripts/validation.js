function emailValidation() {
    const form = document.getElementById('form');
    const confir = document.getElementById('email_confirm');
    const element = document.createElement('p');
    const message = document.createTextNode("Les E-mails ne correspondent pas ");
    const champ = document.getElementById('content_field');
    element.appendChild(message);
    element.setAttribute('id', 'alert');
    element.classList.add("alert_color");
    confir.addEventListener('input', e => {
      if(form.email.value !== form.email_confirm.value) {
        if (!document.getElementById('alert')) {
          champ.parentNode.insertBefore(element, champ);
          confir.classList.add("alert_bg");
        }
      } else {
        confir.classList.remove("alert_bg");
        element.parentNode.removeChild(element);
      }
    });
  };
  
  window.onload = function() {
    emailValidation();
  };
  
  
  