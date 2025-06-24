var form = document.getElementById('contact-form');
var emailerror = document.getElementById ('email-error')
//var radio = document.getElementsByName ('query-type') //select by attribute name
//var message = document.getElementById ('message').value






var consent = document.getElementById ('consent');
var button = document.getElementById ('submit_btn');

consent.addEventListener('change', function(){ //logic to enable disabled submit button
    if (consent.checked ){ //if consent is true
        button.disabled = false
    }
    else {
        button.disabled = true
    }
})

form.addEventListener('submit', function(e) {
    e.preventDefault () //e will help to prevent the behaviour of our submit button
//select input and check if it is empty or not
var name = document.getElementById('first-name').value;
var lastName = document.getElementById('last-name').value;
var email = document.getElementById('email').value;
var radio = document.getElementsByName ('query-type');
var message = document.getElementById ('message').value;
var consent = document.getElementById ('consent').checked; //.checked will return false or true.



var Selected = false


for (var i = 0; i < radio.length; i++) //syntax for forloop
{
    if (radio[i].checked) {
        Selected = true
        break
    }

}

 if (!name || !lastName || !email || !Selected || !message || !consent){
    alert ("All fields are required")
    return 
 }






var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
   // alert ("Please enter a valid email. Thank you!")
  
    emailerror.textContent = "Please enter a valid email."
    emailerror.style.color = "red"
    emailerror.style.fontStyle = "italic"
    return
}
console.log(message)
alert("The form has been submitted successfully. Weldone!")
});

