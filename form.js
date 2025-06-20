var form = document.getElementById('contact-form');
var emailerror = document.getElementById ('email-error')




form.addEventListener('submit', function(e) {
    e.preventDefault () //e will help to prevent the behaviour of our submit button
//select input and check if it is empty or not
var name = document.getElementById('first-name').value;
var lastName = document.getElementById('last-name').value;
var email = document.getElementById('email').value;
 if (!name || !lastName || !email){
    alert ("All fields are required")
     

 }


var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
   // alert ("Please enter a valid email. Thank you!")
  
    emailerror.textContent = "Please enter a valid email."
    emailerror.style.color = "red"
}

});

